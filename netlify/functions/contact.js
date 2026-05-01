const RESEND_API_URL = 'https://api.resend.com/emails';
const DEFAULT_FROM = 'RKKM Law Website <forms@rkkmlaw.com>';
const DEFAULT_SUBJECT = 'RKKM Law Website Contact Form Submission';

function escapeHtml(value = '') {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

function parseRecipients(value = '') {
  return value
    .split(',')
    .map((item) => item.trim())
    .filter(Boolean);
}

function isValidEmail(value = '') {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}

function getRequestBody(event) {
  const rawBody = event.body || '';

  if (event.isBase64Encoded) {
    return Buffer.from(rawBody, 'base64').toString('utf8');
  }

  return rawBody;
}

function parseFormParams(event) {
  const body = getRequestBody(event);
  const contentType = event.headers?.['content-type'] || event.headers?.['Content-Type'] || '';

  if (contentType.includes('application/json')) {
    const parsed = JSON.parse(body || '{}');
    return new URLSearchParams(Object.entries(parsed));
  }

  return new URLSearchParams(body);
}

function buildPlainText({ name, phone, email, message, submittedAt }) {
  return [
    'New website contact form submission',
    '',
    `Name: ${name}`,
    `Phone: ${phone}`,
    `Email: ${email}`,
    `Submitted: ${submittedAt}`,
    '',
    'Message:',
    message,
  ].join('\n');
}

function buildHtml({ name, phone, email, message, submittedAt }) {
  const safeName = escapeHtml(name);
  const safePhone = escapeHtml(phone);
  const safeEmail = escapeHtml(email);
  const safeMessage = escapeHtml(message).replaceAll('\n', '<br>');
  const safeSubmittedAt = escapeHtml(submittedAt);

  return `<!doctype html>
<html>
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New Contact Form Submission</title>
  </head>
  <body style="margin:0; padding:0; background-color:#f5f5f4; font-family:Arial, Helvetica, sans-serif; color:#1c1917;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#f5f5f4; margin:0; padding:24px 0;">
      <tr>
        <td align="center" style="padding:0 16px;">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width:640px; background-color:#ffffff; border:1px solid #e7e5e4; border-radius:8px; overflow:hidden;">
            <tr>
              <td style="background-color:#1b3b49; padding:24px 28px;">
                <h1 style="margin:0; font-size:22px; line-height:28px; font-weight:700; color:#ffffff; font-family:Arial, Helvetica, sans-serif;">New Contact Form Submission</h1>
                <p style="margin:8px 0 0; font-size:14px; line-height:20px; color:#d6e2e6; font-family:Arial, Helvetica, sans-serif;">RKKM Law website</p>
              </td>
            </tr>
            <tr>
              <td style="padding:24px 28px;">
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;">
                  <tr>
                    <td style="padding:0 0 14px; font-size:12px; line-height:18px; color:#78716c; text-transform:uppercase; letter-spacing:0.08em; font-family:Arial, Helvetica, sans-serif;">Contact Details</td>
                  </tr>
                  <tr>
                    <td style="padding:0;">
                      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;">
                        <tr>
                          <td width="120" valign="top" style="padding:10px 0; border-top:1px solid #e7e5e4; font-size:14px; line-height:20px; color:#57534e; font-family:Arial, Helvetica, sans-serif;">Name</td>
                          <td valign="top" style="padding:10px 0; border-top:1px solid #e7e5e4; font-size:14px; line-height:20px; color:#1c1917; font-family:Arial, Helvetica, sans-serif;">${safeName}</td>
                        </tr>
                        <tr>
                          <td width="120" valign="top" style="padding:10px 0; border-top:1px solid #e7e5e4; font-size:14px; line-height:20px; color:#57534e; font-family:Arial, Helvetica, sans-serif;">Phone</td>
                          <td valign="top" style="padding:10px 0; border-top:1px solid #e7e5e4; font-size:14px; line-height:20px; color:#1c1917; font-family:Arial, Helvetica, sans-serif;"><a href="tel:${safePhone}" style="color:#1b3b49; text-decoration:none;">${safePhone}</a></td>
                        </tr>
                        <tr>
                          <td width="120" valign="top" style="padding:10px 0; border-top:1px solid #e7e5e4; font-size:14px; line-height:20px; color:#57534e; font-family:Arial, Helvetica, sans-serif;">Email</td>
                          <td valign="top" style="padding:10px 0; border-top:1px solid #e7e5e4; font-size:14px; line-height:20px; color:#1c1917; font-family:Arial, Helvetica, sans-serif;"><a href="mailto:${safeEmail}" style="color:#1b3b49; text-decoration:none;">${safeEmail}</a></td>
                        </tr>
                        <tr>
                          <td width="120" valign="top" style="padding:10px 0; border-top:1px solid #e7e5e4; border-bottom:1px solid #e7e5e4; font-size:14px; line-height:20px; color:#57534e; font-family:Arial, Helvetica, sans-serif;">Submitted</td>
                          <td valign="top" style="padding:10px 0; border-top:1px solid #e7e5e4; border-bottom:1px solid #e7e5e4; font-size:14px; line-height:20px; color:#1c1917; font-family:Arial, Helvetica, sans-serif;">${safeSubmittedAt}</td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding:24px 0 8px; font-size:12px; line-height:18px; color:#78716c; text-transform:uppercase; letter-spacing:0.08em; font-family:Arial, Helvetica, sans-serif;">Message</td>
                  </tr>
                  <tr>
                    <td style="padding:16px; background-color:#fafaf9; border:1px solid #e7e5e4; border-radius:6px; font-size:15px; line-height:24px; color:#1c1917; font-family:Arial, Helvetica, sans-serif;">${safeMessage}</td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td style="padding:16px 28px 24px; font-size:12px; line-height:18px; color:#78716c; font-family:Arial, Helvetica, sans-serif;">
                You can reply directly to this email to respond to ${safeName}.
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}

function response(statusCode, body, headers = {}) {
  return {
    statusCode,
    headers: {
      'Content-Type': 'text/html; charset=utf-8',
      ...headers,
    },
    body,
  };
}

export const handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return response(405, 'Method Not Allowed', { Allow: 'POST' });
  }

  let params;

  try {
    params = parseFormParams(event);
  } catch (error) {
    console.error('Could not parse contact form submission body:', error);
    return response(
      400,
      '<p>Sorry, we could not read your message. Please call us directly at (303) 331-6432.</p>',
    );
  }

  const botField = params.get('bot-field') || '';

  if (botField.trim()) {
    return {
      statusCode: 303,
      headers: { Location: '/thank-you' },
      body: '',
    };
  }

  const name = (params.get('name') || '').trim();
  const phone = (params.get('phone') || '').trim();
  const email = (params.get('email') || '').trim();
  const message = (params.get('message') || '').trim();

  if (!name || !phone || !isValidEmail(email) || !message) {
    return response(
      400,
      '<p>Please complete all required fields and provide a valid email address.</p><p><a href="/contact">Back to contact form</a></p>',
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = parseRecipients(process.env.CONTACT_TO_EMAIL || '');
  const from = process.env.CONTACT_FROM_EMAIL || DEFAULT_FROM;
  const subject = process.env.CONTACT_EMAIL_SUBJECT || DEFAULT_SUBJECT;

  if (!apiKey || to.length === 0) {
    console.error('Missing RESEND_API_KEY or CONTACT_TO_EMAIL environment variable.');
    return response(
      500,
      '<p>Sorry, the contact form is temporarily unavailable. Please call us directly at (303) 331-6432.</p>',
    );
  }

  const submittedAt = new Intl.DateTimeFormat('en-US', {
    dateStyle: 'medium',
    timeStyle: 'short',
    timeZone: 'America/Denver',
  }).format(new Date());

  const payload = {
    from,
    to,
    subject,
    reply_to: email,
    html: buildHtml({ name, phone, email, message, submittedAt }),
    text: buildPlainText({ name, phone, email, message, submittedAt }),
  };

  try {
    const resendResponse = await fetch(RESEND_API_URL, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (!resendResponse.ok) {
      const errorBody = await resendResponse.text();
      console.error('Resend API error:', resendResponse.status, errorBody);
      return response(
        502,
        '<p>Sorry, we could not send your message. Please call us directly at (303) 331-6432.</p>',
      );
    }

    return {
      statusCode: 303,
      headers: { Location: '/thank-you' },
      body: '',
    };
  } catch (error) {
    console.error('Contact form submission failed:', error);
    return response(
      502,
      '<p>Sorry, we could not send your message. Please call us directly at (303) 331-6432.</p>',
    );
  }
};
