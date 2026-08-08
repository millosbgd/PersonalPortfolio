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

  const endpoint = process.env.CONTACT_ENDPOINT_URL;

  if (!endpoint) {
    context.res = {
      status: 501,
      body: {
        ok: false,
        error: 'Contact endpoint is not configured.',
      },
    };
    return;
  }

  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Contact-Token': process.env.CONTACT_ENDPOINT_TOKEN || '',
    },
    body: JSON.stringify({
      name: body.name,
      company: body.company,
      email: body.email,
      phone: body.phone || '',
      message: body.message,
      source: 'boutique-consulting-website',
      createdAt: new Date().toISOString(),
    }),
  });

  context.res = {
    status: response.ok ? 202 : 502,
    body: {
      ok: response.ok,
    },
  };
};

function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(value || ''));
}
