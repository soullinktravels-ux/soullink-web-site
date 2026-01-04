import { NextRequest, NextResponse } from 'next/server';
import sql from '@/lib/db';
import { Resend } from 'resend';

const resend = new Resend('re_g6qbBvB3_49VvAVKRYz5TVBnhSw3kHwr4');

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, country } = body;

    // Validate required fields
    if (!name || !email || !phone || !country) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Create table if it doesn't exist
    await sql`
      CREATE TABLE IF NOT EXISTS enquiries (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        phone VARCHAR(50) NOT NULL,
        country VARCHAR(100) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `;

    // Insert the enquiry
    await sql`
      INSERT INTO enquiries (name, email, phone, country)
      VALUES (${name}, ${email}, ${phone}, ${country})
    `;

    // Send email notification to Soullink
    await resend.emails.send({
      from: 'Soullink Website <onboarding@resend.dev>',
      to: 'info@soullinktravels.com',
      subject: `New Visa Enquiry from ${name} - ${country}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(to right, #1e293b, #334155); padding: 20px; text-align: center;">
            <h1 style="color: #f59e0b; margin: 0;">🌍 New Visa Enquiry</h1>
          </div>
          <div style="padding: 30px; background-color: #f8fafc;">
            <div style="background-color: #fef3c7; border-left: 4px solid #f59e0b; padding: 15px; margin-bottom: 20px;">
              <p style="margin: 0; color: #92400e; font-weight: bold;">A potential client is interested in traveling to ${country}!</p>
            </div>
            <h2 style="color: #1e293b; margin-bottom: 20px;">Client Details</h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 12px; border-bottom: 1px solid #e2e8f0; font-weight: bold; color: #64748b; width: 30%;">Name:</td>
                <td style="padding: 12px; border-bottom: 1px solid #e2e8f0; color: #1e293b;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 12px; border-bottom: 1px solid #e2e8f0; font-weight: bold; color: #64748b;">Email:</td>
                <td style="padding: 12px; border-bottom: 1px solid #e2e8f0; color: #1e293b;"><a href="mailto:${email}" style="color: #3b82f6;">${email}</a></td>
              </tr>
              <tr>
                <td style="padding: 12px; border-bottom: 1px solid #e2e8f0; font-weight: bold; color: #64748b;">Phone:</td>
                <td style="padding: 12px; border-bottom: 1px solid #e2e8f0; color: #1e293b;"><a href="tel:${phone}" style="color: #3b82f6;">${phone}</a></td>
              </tr>
              <tr>
                <td style="padding: 12px; border-bottom: 1px solid #e2e8f0; font-weight: bold; color: #64748b;">Country of Interest:</td>
                <td style="padding: 12px; border-bottom: 1px solid #e2e8f0; color: #1e293b; font-weight: bold;">${country}</td>
              </tr>
            </table>
            <div style="margin-top: 25px; text-align: center;">
              <a href="https://wa.me/${phone.replace(/[^0-9]/g, '')}" style="display: inline-block; background-color: #22c55e; color: white; padding: 12px 25px; text-decoration: none; border-radius: 8px; font-weight: bold;">Contact on WhatsApp</a>
              <a href="mailto:${email}" style="display: inline-block; background-color: #3b82f6; color: white; padding: 12px 25px; text-decoration: none; border-radius: 8px; font-weight: bold; margin-left: 10px;">Send Email</a>
            </div>
          </div>
          <div style="background-color: #1e293b; padding: 20px; text-align: center;">
            <p style="color: #94a3b8; margin: 0; font-size: 14px;">Soullink Travels - Your Link to Global Destinations</p>
          </div>
        </div>
      `,
    });

    return NextResponse.json(
      { message: 'Enquiry submitted successfully!' },
      { status: 201 }
    );
  } catch (error) {
    console.error('Database error:', error);
    return NextResponse.json(
      { error: 'Failed to submit enquiry. Please try again.' },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    // Create table if it doesn't exist
    await sql`
      CREATE TABLE IF NOT EXISTS enquiries (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        phone VARCHAR(50) NOT NULL,
        country VARCHAR(100) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `;

    const enquiries = await sql`
      SELECT * FROM enquiries ORDER BY created_at DESC
    `;

    return NextResponse.json(enquiries);
  } catch (error) {
    console.error('Database error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch enquiries' },
      { status: 500 }
    );
  }
}
