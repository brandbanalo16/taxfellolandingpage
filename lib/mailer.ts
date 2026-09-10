/**
 * Taxfello Email Utility — Server-side only.
 * Uses Nodemailer with Gmail SMTP + Google App Password (STARTTLS).
 *
 * SECURITY: This file must never be imported from client-side code.
 * All SMTP credentials are read exclusively from server-side environment variables.
 * No credential is ever logged or exposed to the browser.
 */

import nodemailer from 'nodemailer';

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface EnquiryData {
  fullName: string;
  phone: string;
  email?: string;
  city?: string;
  service?: string;
  message?: string;
  source?: string;      // Which form / page triggered the submission
  pageUrl?: string;     // URL of the page where the form was submitted
  userAgent?: string;
  remoteIp?: string;
}

// ---------------------------------------------------------------------------
// Transporter (created once per cold start in Vercel serverless)
// ---------------------------------------------------------------------------

function createTransporter() {
  const host     = process.env.SMTP_HOST     || 'smtp.gmail.com';
  const port     = parseInt(process.env.SMTP_PORT || '587', 10);
  const secure   = process.env.SMTP_SECURE   === 'true';   // false → STARTTLS
  const user     = process.env.SMTP_USER;
  const pass     = process.env.SMTP_PASSWORD;

  if (!user || !pass) {
    throw new Error('SMTP credentials are not configured. Set SMTP_USER and SMTP_PASSWORD.');
  }

  return nodemailer.createTransport({
    host,
    port,
    secure,          // false = STARTTLS (port 587)
    requireTLS: true,
    auth: { user, pass },
  });
}

// ---------------------------------------------------------------------------
// Date / Time helpers (India timezone)
// ---------------------------------------------------------------------------

function getIndiaDateTime(): { date: string; time: string } {
  const now = new Date();
  const formatter = new Intl.DateTimeFormat('en-IN', {
    timeZone: 'Asia/Kolkata',
    year:     'numeric',
    month:    'long',
    day:      'numeric',
    hour:     '2-digit',
    minute:   '2-digit',
    hour12:   true,
  });

  const parts = formatter.formatToParts(now);
  const get   = (type: string) => parts.find((p) => p.type === type)?.value ?? '';

  const date = `${get('day')} ${get('month')} ${get('year')}`;
  const time = `${get('hour')}:${get('minute')} ${get('dayPeriod')}`;

  return { date, time };
}

// ---------------------------------------------------------------------------
// HTML email template
// ---------------------------------------------------------------------------

function buildHtmlEmail(data: EnquiryData, date: string, time: string): string {
  const source     = data.source     || 'Website Form';
  const pageUrl    = data.pageUrl    || 'Not available';
  const userAgent  = data.userAgent  || 'Not available';
  const remoteIp   = data.remoteIp   || 'Not available';

  const row = (label: string, value: string, isLink = false, href = '') => {
    if (!value || value === 'Not provided' && label !== 'Email' && label !== 'City' && label !== 'Service' && label !== 'Message') {
      // Always show required fields; skip truly-empty optional rows
    }
    const displayVal = isLink
      ? `<a href="${href}" style="color:#1a56db;text-decoration:none;">${value}</a>`
      : value;
    return `
      <tr>
        <td style="padding:10px 16px;font-size:13px;color:#6b7280;font-weight:600;white-space:nowrap;vertical-align:top;width:120px;">${label}</td>
        <td style="padding:10px 16px;font-size:14px;color:#111827;vertical-align:top;word-break:break-word;">${displayVal}</td>
      </tr>`;
  };

  // Build rows for form fields
  const phoneHref  = `tel:+91${data.phone}`;
  const emailHref  = data.email ? `mailto:${data.email}` : '';
  const pageHref   = pageUrl !== 'Not available' ? pageUrl : '';

  const formRows = [
    row('Name',    data.fullName),
    row('Phone',   `+91 ${data.phone}`, true, phoneHref),
    data.email
      ? row('Email',   data.email, true, emailHref)
      : row('Email',   'Not provided'),
    row('City',    data.city    || 'Not provided'),
    row('Service', data.service || 'General Consultation'),
    data.message
      ? row('Message', data.message)
      : '',
  ].join('');

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>New Enquiry Received - Taxfello</title>
</head>
<body style="margin:0;padding:0;background:#f3f4f6;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f3f4f6;padding:32px 16px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" style="max-width:580px;background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.08);border:1px solid #e5e7eb;">

          <!-- Header -->
          <tr>
            <td style="background:#0f172a;padding:24px 28px;">
              <p style="margin:0;font-size:11px;text-transform:uppercase;letter-spacing:1.5px;color:#94a3b8;font-weight:600;">Taxfello</p>
              <h1 style="margin:6px 0 0;font-size:22px;font-weight:800;color:#ffffff;letter-spacing:-0.3px;">New Enquiry Received</h1>
              <p style="margin:6px 0 0;font-size:13px;color:#94a3b8;">Via: ${source}</p>
            </td>
          </tr>

          <!-- Body: form fields -->
          <tr>
            <td style="padding:8px 12px 4px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;">
                <tbody>
                  ${formRows}
                </tbody>
              </table>
            </td>
          </tr>

          <!-- Divider -->
          <tr>
            <td style="padding:4px 28px;">
              <hr style="border:none;border-top:1px solid #e5e7eb;margin:8px 0;">
            </td>
          </tr>

          <!-- Metadata -->
          <tr>
            <td style="padding:4px 12px 12px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;background:#f9fafb;border-radius:8px;">
                <tbody>
                  <tr>
                    <td style="padding:10px 16px;font-size:12px;color:#6b7280;font-weight:600;white-space:nowrap;vertical-align:top;width:120px;">Date</td>
                    <td style="padding:10px 16px;font-size:12px;color:#374151;vertical-align:top;">${date}</td>
                  </tr>
                  <tr>
                    <td style="padding:10px 16px;font-size:12px;color:#6b7280;font-weight:600;white-space:nowrap;vertical-align:top;">Time</td>
                    <td style="padding:10px 16px;font-size:12px;color:#374151;vertical-align:top;">${time} (IST)</td>
                  </tr>
                  <tr>
                    <td style="padding:10px 16px;font-size:12px;color:#6b7280;font-weight:600;white-space:nowrap;vertical-align:top;">Page URL</td>
                    <td style="padding:10px 16px;font-size:12px;color:#374151;vertical-align:top;word-break:break-all;">
                      ${pageHref
                        ? `<a href="${pageHref}" style="color:#1a56db;text-decoration:none;">${pageUrl}</a>`
                        : pageUrl}
                    </td>
                  </tr>
                  <tr>
                    <td style="padding:10px 16px;font-size:12px;color:#6b7280;font-weight:600;white-space:nowrap;vertical-align:top;">User Agent</td>
                    <td style="padding:10px 16px;font-size:12px;color:#374151;vertical-align:top;word-break:break-all;">${userAgent}</td>
                  </tr>
                  <tr>
                    <td style="padding:10px 16px;font-size:12px;color:#6b7280;font-weight:600;white-space:nowrap;vertical-align:top;">Remote IP</td>
                    <td style="padding:10px 16px;font-size:12px;color:#374151;vertical-align:top;">${remoteIp}</td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background:#f9fafb;padding:16px 28px;border-top:1px solid #e5e7eb;text-align:center;">
              <p style="margin:0;font-size:12px;color:#9ca3af;">Powered by <strong style="color:#374151;">Taxfello</strong> &mdash; Tax, GST &amp; Business Compliance Advisory</p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

// ---------------------------------------------------------------------------
// Plain-text fallback
// ---------------------------------------------------------------------------

function buildTextEmail(data: EnquiryData, date: string, time: string): string {
  const source    = data.source    || 'Website Form';
  const pageUrl   = data.pageUrl   || 'Not available';
  const userAgent = data.userAgent || 'Not available';
  const remoteIp  = data.remoteIp  || 'Not available';

  return [
    'NEW ENQUIRY RECEIVED — TAXFELLO',
    `Via: ${source}`,
    '',
    `Name    : ${data.fullName}`,
    `Phone   : +91 ${data.phone}`,
    `Email   : ${data.email    || 'Not provided'}`,
    `City    : ${data.city     || 'Not provided'}`,
    `Service : ${data.service  || 'General Consultation'}`,
    `Message : ${data.message  || '(none)'}`,
    '',
    '---',
    `Date     : ${date}`,
    `Time     : ${time} (IST)`,
    `Page URL : ${pageUrl}`,
    `User-Agent: ${userAgent}`,
    `Remote IP : ${remoteIp}`,
    '',
    'Powered by Taxfello',
  ].join('\n');
}

// ---------------------------------------------------------------------------
// Public send function
// ---------------------------------------------------------------------------

export async function sendEnquiryEmail(data: EnquiryData): Promise<void> {
  const { date, time } = getIndiaDateTime();

  const mailFrom = process.env.MAIL_FROM || 'Taxfello <support@taxfello.com>';
  const mailTo   = process.env.SMTP_USER || 'support@taxfello.com';
  const mailBcc  = process.env.MAIL_BCC  || 'brandbanalo25@gmail.com';

  const transporter = createTransporter();

  await transporter.sendMail({
    from:    `Taxfello <${mailFrom.includes('<') ? mailFrom.split('<')[1].replace('>', '').trim() : mailFrom}>`,
    to:      mailTo,
    bcc:     mailBcc,
    subject: `New Enquiry Received - Taxfello`,
    html:    buildHtmlEmail(data, date, time),
    text:    buildTextEmail(data, date, time),
  });
}
