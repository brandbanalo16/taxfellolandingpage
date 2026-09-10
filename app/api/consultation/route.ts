import { NextResponse } from 'next/server';
import { sendEnquiryEmail, EnquiryData } from '@/lib/mailer';

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/** Extract visitor IP from Vercel/Next.js request headers (best-effort). */
function getRemoteIp(request: Request): string {
  const headers = (request as any).headers as Headers;
  return (
    headers.get('x-real-ip') ||
    headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
    'Not available'
  );
}

/** Basic email format validation. */
function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// ---------------------------------------------------------------------------
// POST /api/consultation
// ---------------------------------------------------------------------------

export async function POST(request: Request) {
  try {
    const data = await request.json();

    const {
      fullName,
      phone,
      email,
      city,
      service,
      message,
      source,
      pageUrl,
    } = data;

    // -----------------------------------------------------------------------
    // Server-side validation (mirrors client-side; protects direct API calls)
    // -----------------------------------------------------------------------

    if (!fullName || !String(fullName).trim()) {
      return NextResponse.json(
        { error: 'Please enter your Full Name.' },
        { status: 400 }
      );
    }

    if (String(fullName).trim().length > 200) {
      return NextResponse.json(
        { error: 'Full Name is too long.' },
        { status: 400 }
      );
    }

    const cleanPhone = String(phone || '').replace(/\D/g, '');
    if (cleanPhone.length !== 10) {
      return NextResponse.json(
        { error: 'Phone Number must be exactly 10 digits.' },
        { status: 400 }
      );
    }

    if (email && email.trim() && !isValidEmail(String(email).trim())) {
      return NextResponse.json(
        { error: 'Please enter a valid email address.' },
        { status: 400 }
      );
    }

    if (message && String(message).length > 5000) {
      return NextResponse.json(
        { error: 'Message is too long (max 5000 characters).' },
        { status: 400 }
      );
    }

    // -----------------------------------------------------------------------
    // Build enquiry payload
    // -----------------------------------------------------------------------

    const enquiry: EnquiryData = {
      fullName:  String(fullName).trim(),
      phone:     cleanPhone,
      email:     email    ? String(email).trim()    : undefined,
      city:      city     ? String(city).trim()     : undefined,
      service:   service  ? String(service).trim()  : undefined,
      message:   message  ? String(message).trim()  : undefined,
      source:    source   ? String(source).trim()   : 'Website Form',
      pageUrl:   pageUrl  ? String(pageUrl).trim()  : undefined,
      userAgent: request.headers.get('user-agent')  || 'Not available',
      remoteIp:  getRemoteIp(request),
    };

    // -----------------------------------------------------------------------
    // Safe console log — NEVER logs SMTP credentials
    // -----------------------------------------------------------------------

    console.log('[Taxfello] Enquiry received:', {
      fullName:  enquiry.fullName,
      phone:     enquiry.phone,
      email:     enquiry.email     || 'Not provided',
      city:      enquiry.city      || 'Not provided',
      service:   enquiry.service   || 'General Consultation',
      source:    enquiry.source,
      pageUrl:   enquiry.pageUrl   || 'Not provided',
      remoteIp:  enquiry.remoteIp,
      submittedAt: new Date().toISOString(),
    });

    // -----------------------------------------------------------------------
    // Send email via Nodemailer (server-side only)
    // -----------------------------------------------------------------------

    try {
      await sendEnquiryEmail(enquiry);
      console.log('[Taxfello] Enquiry email sent successfully.');
    } catch (mailError) {
      // Log a safe message — never expose SMTP config or credentials
      console.error('[Taxfello] Email delivery failed. Check SMTP environment variables.');
      // Do NOT re-throw: the enquiry is still acknowledged to the visitor
      // to avoid breaking the form UX due to a transient email failure.
    }

    // -----------------------------------------------------------------------
    // Success response
    // -----------------------------------------------------------------------

    return NextResponse.json(
      {
        success: true,
        message:
          'Your enquiry has been received. A Taxfello CA consultant will reach out within 2–4 working hours.',
      },
      { status: 200 }
    );
  } catch (error) {
    // Unexpected errors (e.g. malformed JSON)
    console.error('[Taxfello] Unexpected error in /api/consultation:', error);
    return NextResponse.json(
      {
        error:
          'Unable to submit your enquiry right now. Please try again or call our direct helpline.',
      },
      { status: 500 }
    );
  }
}
