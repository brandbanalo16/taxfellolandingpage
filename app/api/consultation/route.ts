import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const data = await request.json();

    const { fullName, phone, email, city, service, message } = data;

    // Required field validation: Name and Phone
    if (!fullName || !fullName.trim()) {
      return NextResponse.json(
        { error: 'Please enter your Full Name.' },
        { status: 400 }
      );
    }

    // Phone validation: exactly 10 digits
    const cleanPhone = String(phone || '').replace(/\D/g, '');
    if (cleanPhone.length !== 10) {
      return NextResponse.json(
        { error: 'Phone Number must be exactly 10 digits.' },
        { status: 400 }
      );
    }

    // In a production backend, this would trigger an email or CRM webhook (e.g. HubSpot, Zoho, SendGrid).
    // The placeholder API handles requests cleanly and securely without exposing secret keys.
    console.log('[Taxfello Consultation Enquiry Received]:', {
      fullName,
      phone,
      email: email || 'Not provided',
      city: city || 'Not provided',
      service: service || 'General Consultation',
      message: message || '',
      submittedAt: new Date().toISOString(),
    });

    return NextResponse.json(
      {
        success: true,
        message: 'Your enquiry has been received. A Taxfello CA consultant will reach out within 2-4 working hours.',
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error handling consultation submission:', error);
    return NextResponse.json(
      { error: 'An unexpected error occurred. Please try again or call our direct helpline.' },
      { status: 500 }
    );
  }
}
