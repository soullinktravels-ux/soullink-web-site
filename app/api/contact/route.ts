import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend('re_g6qbBvB3_49VvAVKRYz5TVBnhSw3kHwr4');

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, message } = body;

    // Validate required fields
    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Send email to Soullink
    await resend.emails.send({
      from: 'Soullink Website <onboarding@resend.dev>',
      to: 'info@soullinktravels.com',
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(to right, #1e293b, #334155); padding: 20px; text-align: center;">
            <h1 style="color: #f59e0b; margin: 0;">New Contact Form Submission</h1>
          </div>
          <div style="padding: 30px; background-color: #f8fafc;">
            <h2 style="color: #1e293b; margin-bottom: 20px;">Contact Details</h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #e2e8f0; font-weight: bold; color: #64748b;">Name:</td>
                <td style="padding: 10px; border-bottom: 1px solid #e2e8f0; color: #1e293b;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #e2e8f0; font-weight: bold; color: #64748b;">Email:</td>
                <td style="padding: 10px; border-bottom: 1px solid #e2e8f0; color: #1e293b;"><a href="mailto:${email}" style="color: #3b82f6;">${email}</a></td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #e2e8f0; font-weight: bold; color: #64748b;">Phone:</td>
                <td style="padding: 10px; border-bottom: 1px solid #e2e8f0; color: #1e293b;"><a href="tel:${phone}" style="color: #3b82f6;">${phone}</a></td>
              </tr>
            </table>
            <div style="margin-top: 20px;">
              <h3 style="color: #1e293b; margin-bottom: 10px;">Message:</h3>
              <div style="background-color: white; padding: 15px; border-radius: 8px; border: 1px solid #e2e8f0;">
                <p style="color: #475569; margin: 0; white-space: pre-wrap;">${message}</p>
              </div>
            </div>
          </div>
          <div style="background-color: #1e293b; padding: 20px; text-align: center;">
            <p style="color: #94a3b8; margin: 0; font-size: 14px;">Soullink Travels - Your Link to Global Destinations</p>
          </div>
        </div>
      `,
    });

    return NextResponse.json(
      { message: 'Message sent successfully!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Email error:', error);
    return NextResponse.json(
      { error: 'Failed to send message. Please try again.' },
      { status: 500 }
    );
  }
}
