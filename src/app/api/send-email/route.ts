import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    // Destructure required fields
    const { first_name, last_name, email, phone, service, message } = data;

    // Validate inputs
    if (!first_name || !email || !phone || !service || !message) {
      return NextResponse.json(
        { success: false, message: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Configure Nodemailer with Gmail SMTP
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Format the email
    const mailOptions = {
      from: `"${first_name} ${last_name || ''}" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: `New Contact Form Submission - ${service}`,
      text: `New Contact Form Submission:

Name: ${first_name} ${last_name || ""}
Email: ${email}
Phone: ${phone}
Service: ${service}

Message:
${message}`
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true }, { status: 200 });

  } catch (error: any) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { success: false, message: error.message || 'Failed to send email' },
      { status: 500 }
    );
  }
}
