import { NextResponse } from 'next/server';
import { sendEnquiryEmail, EnquiryData } from '@/lib/mailer';

// Explicitly use Node.js serverless runtime for Nodemailer compatibility
export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

// ---------------------------------------------------------------------------
// CORS Headers (works for Vercel, localhost, and custom live domains)
// ---------------------------------------------------------------------------

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Requested-With',
};

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
// OPTIONS /api/consultation (CORS Preflight)
// ---------------------------------------------------------------------------

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 204,
    headers: corsHeaders,
  });
}

// ---------------------------------------------------------------------------
// GET /api/consultation (Health Check & Diagnostics)
// ---------------------------------------------------------------------------

export async function GET() {
  return NextResponse.json(
    {
      status: 'ok',
      service: 'Taxfello Consultation API',
      timestamp: new Date().toISOString(),
      bccConfigured: true,
    },
    { status: 200, headers: corsHeaders }
  );
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
        { status: 400, headers: corsHeaders }
      );
    }

    if (String(fullName).trim().length > 200) {
      return NextResponse.json(
        { error: 'Full Name is too long.' },
        { status: 400, headers: corsHeaders }
      );
    }

    const cleanPhone = String(phone || '').replace(/\D/g, '');
    if (cleanPhone.length !== 10) {
      return NextResponse.json(
        { error: 'Phone Number must be exactly 10 digits.' },
        { status: 400, headers: corsHeaders }
      );
    }

    if (email && email.trim() && !isValidEmail(String(email).trim())) {
      return NextResponse.json(
        { error: 'Please enter a valid email address.' },
        { status: 400, headers: corsHeaders }
      );
    }

    if (message && String(message).length > 5000) {
      return NextResponse.json(
        { error: 'Message is too long (max 5000 characters).' },
        { status: 400, headers: corsHeaders }
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
    // Safe console log — Lead details logged for safety
    // -----------------------------------------------------------------------

    console.log('[Taxfello] Enquiry received:', {
      fullName:    enquiry.fullName,
      phone:       enquiry.phone,
      email:       enquiry.email     || 'Not provided',
      city:        enquiry.city      || 'Not provided',
      service:     enquiry.service   || 'General Consultation',
      source:      enquiry.source,
      pageUrl:     enquiry.pageUrl   || 'Not provided',
      remoteIp:    enquiry.remoteIp,
      submittedAt: new Date().toISOString(),
    });

    // -----------------------------------------------------------------------
    // Send email via Nodemailer (server-side only)
    // -----------------------------------------------------------------------

    try {
      await sendEnquiryEmail(enquiry);
      console.log('[Taxfello] Enquiry email sent successfully to support & BCC.');
    } catch (mailError: any) {
      console.error('[Taxfello] CRITICAL: Email delivery failed:', mailError?.message || mailError);
      return NextResponse.json(
        {
          error:
            'Unable to deliver consultation email right now. Please call our direct helpline at +91 88004 85106.',
          details: process.env.NODE_ENV === 'development' ? mailError?.message : undefined,
        },
        { status: 500, headers: corsHeaders }
      );
    }

    // -----------------------------------------------------------------------
    // Success response
    // -----------------------------------------------------------------------

    return NextResponse.json(
      {
        success: true,
        message:
          'Your enquiry has been received. A Taxfello consultant will reach out within 2–4 working hours.',
      },
      { status: 200, headers: corsHeaders }
    );
  } catch (error) {
    // Unexpected errors (e.g. malformed JSON)
    console.error('[Taxfello] Unexpected error in /api/consultation:', error);
    return NextResponse.json(
      {
        error:
          'Unable to submit your enquiry right now. Please try again or call our direct helpline.',
      },
      { status: 500, headers: corsHeaders }
    );
  }
}
