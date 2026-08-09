const { EmailClient } = require('@azure/communication-email');
const { TableClient } = require('@azure/data-tables');
const crypto = require('crypto');

const TABLE_NAME = process.env.CONTACT_TABLE_NAME || 'ContactRequests';
const SOURCE = 'novakovic-advisory-website';

module.exports = async function (context, req) {
  const body = req.body || {};
  const requiredFields = ['name', 'company', 'email', 'message'];
  const missingFields = requiredFields.filter((field) => !String(body[field] || '').trim());

  if (body.website) {
    context.res = { status: 202, body: { ok: true } };
    return;
  }

  if (missingFields.length > 0 || !isValidEmail(body.email)) {
    context.res = {
      status: 400,
      body: {
        ok: false,
        error: 'Invalid contact request.',
      },
    };
    return;
  }

  const connectionString = process.env.AZURE_STORAGE_CONNECTION_STRING;

  if (!connectionString) {
    context.log.error('AZURE_STORAGE_CONNECTION_STRING is not configured.');
    context.res = {
      status: 501,
      body: {
        ok: false,
        error: 'Contact storage is not configured.',
      },
    };
    return;
  }

  try {
    const submittedAt = new Date();
    const tableClient = TableClient.fromConnectionString(connectionString, TABLE_NAME);
    const partitionKey = submittedAt.toISOString().slice(0, 10);
    const rowKey = `${submittedAt.getTime()}-${crypto.randomUUID()}`;
    const contactRequest = {
      submittedAt: submittedAt.toISOString(),
      name: normalize(body.name, 160),
      company: normalize(body.company, 200),
      email: normalize(body.email, 254).toLowerCase(),
      phone: normalize(body.phone, 80),
      message: normalize(body.message, 4000),
      source: SOURCE,
      userAgent: normalize(req.headers['user-agent'], 500),
      ipAddress: normalize(firstHeaderValue(req.headers['x-forwarded-for']), 120),
    };

    await tableClient.createEntity({
      partitionKey,
      rowKey,
      ...contactRequest,
    });

    const notificationResult = await sendNotificationEmail(context, contactRequest);
    await updateNotificationStatus(context, tableClient, partitionKey, rowKey, notificationResult);

    context.res = {
      status: 202,
      body: { ok: true },
    };
  } catch (error) {
    context.log.error('Failed to store contact request.', error);
    context.res = {
      status: 502,
      body: {
        ok: false,
        error: 'Contact request could not be stored.',
      },
    };
  }
};

function firstHeaderValue(value) {
  return String(value || '').split(',')[0].trim();
}

function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(value || ''));
}

function normalize(value, maxLength) {
  return String(value || '').trim().slice(0, maxLength);
}

async function sendNotificationEmail(context, contactRequest) {
  const emailConnectionString = process.env.COMMUNICATION_SERVICES_CONNECTION_STRING;
  const senderAddress = process.env.CONTACT_FROM_EMAIL;
  const recipientAddress = process.env.CONTACT_NOTIFY_EMAIL;

  if (!emailConnectionString || !senderAddress || !recipientAddress) {
    context.log.warn('Contact notification email is not configured.');
    return {
      status: 'not_configured',
      error: 'Missing COMMUNICATION_SERVICES_CONNECTION_STRING, CONTACT_FROM_EMAIL, or CONTACT_NOTIFY_EMAIL.',
    };
  }

  try {
    const emailClient = new EmailClient(emailConnectionString);

    const poller = await emailClient.beginSend({
      senderAddress,
      content: {
        subject: `Novi kontakt upit - ${contactRequest.company}`,
        plainText: buildPlainTextEmail(contactRequest),
        html: buildHtmlEmail(contactRequest),
      },
      recipients: {
        to: [{ address: recipientAddress }],
      },
      replyTo: [{ address: contactRequest.email, displayName: contactRequest.name }],
    });
    const result = await poller.pollUntilDone();

    const status = result.status || 'unknown';
    context.log(`Contact notification email status: ${status}`);

    if (result.error) {
      throw new Error(result.error.message || 'Email send failed.');
    }

    return {
      status,
      error: '',
    };
  } catch (error) {
    context.log.error('Failed to send contact notification email.', error);
    return {
      status: 'failed',
      error: normalize(error && error.message ? error.message : error, 1000),
    };
  }
}

async function updateNotificationStatus(context, tableClient, partitionKey, rowKey, notificationResult) {
  try {
    await tableClient.updateEntity(
      {
        partitionKey,
        rowKey,
        notificationEmailStatus: notificationResult.status,
        notificationEmailError: notificationResult.error,
        notificationEmailCheckedAt: new Date().toISOString(),
      },
      'Merge'
    );
  } catch (error) {
    context.log.error('Failed to update contact notification status.', error);
  }
}

function buildPlainTextEmail(contactRequest) {
  return [
    'Stigao je novi kontakt upit preko novakovicadvisory.com.',
    '',
    `Ime: ${contactRequest.name}`,
    `Kompanija: ${contactRequest.company}`,
    `Email: ${contactRequest.email}`,
    `Telefon: ${contactRequest.phone || '-'}`,
    `Vreme: ${contactRequest.submittedAt}`,
    '',
    'Poruka:',
    contactRequest.message,
  ].join('\n');
}

function buildHtmlEmail(contactRequest) {
  return `
    <div style="font-family: Arial, sans-serif; color: #15171a; line-height: 1.55;">
      <h2 style="margin: 0 0 16px;">Novi kontakt upit</h2>
      <p>Stigao je novi kontakt upit preko <strong>novakovicadvisory.com</strong>.</p>
      <table cellpadding="6" cellspacing="0" style="border-collapse: collapse;">
        <tr><td><strong>Ime</strong></td><td>${escapeHtml(contactRequest.name)}</td></tr>
        <tr><td><strong>Kompanija</strong></td><td>${escapeHtml(contactRequest.company)}</td></tr>
        <tr><td><strong>Email</strong></td><td>${escapeHtml(contactRequest.email)}</td></tr>
        <tr><td><strong>Telefon</strong></td><td>${escapeHtml(contactRequest.phone || '-')}</td></tr>
        <tr><td><strong>Vreme</strong></td><td>${escapeHtml(contactRequest.submittedAt)}</td></tr>
      </table>
      <h3 style="margin: 20px 0 8px;">Poruka</h3>
      <p style="white-space: pre-wrap;">${escapeHtml(contactRequest.message)}</p>
    </div>
  `;
}

function escapeHtml(value) {
  return String(value || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}
