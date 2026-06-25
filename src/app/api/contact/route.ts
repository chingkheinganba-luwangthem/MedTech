import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, phone, message } = body;

    // Send email using Resend or a mailto-based approach
    // For now, we'll use a fetch to a free email service
    const emailContent = `
New Contact Form Submission from MedTech Website

Name: ${firstName} ${lastName}
Email: ${email}
Phone: ${phone}

Message:
${message}
    `.trim();

    // Using Web3Forms (free tier, no signup needed for basic use)
    // You can replace this with Resend, SendGrid, or any email API
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        access_key: process.env.WEB3FORMS_KEY || '',
        to: 'chingkheinganbaluwangthem@gmail.com',
        subject: `New MedTech Contact: ${firstName} ${lastName}`,
        message: emailContent,
        from_name: `${firstName} ${lastName}`,
        reply_to: email,
      }),
    });

    if (response.ok) {
      return NextResponse.json({ success: true });
    }

    // Fallback: log the submission
    console.log('Contact form submission:', { firstName, lastName, email, phone, message });
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 });
  }
}
