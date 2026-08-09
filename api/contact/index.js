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

    await tableClient.createEntity({
      partitionKey: submittedAt.toISOString().slice(0, 10),
      rowKey: `${submittedAt.getTime()}-${crypto.randomUUID()}`,
      submittedAt: submittedAt.toISOString(),
      name: normalize(body.name, 160),
      company: normalize(body.company, 200),
      email: normalize(body.email, 254).toLowerCase(),
      phone: normalize(body.phone, 80),
      message: normalize(body.message, 4000),
      source: SOURCE,
      userAgent: normalize(req.headers['user-agent'], 500),
      ipAddress: normalize(firstHeaderValue(req.headers['x-forwarded-for']), 120),
    });

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
