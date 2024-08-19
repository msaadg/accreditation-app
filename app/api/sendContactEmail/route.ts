import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, message } = body;

    // Create a transporter object using SMTP transport.
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.NEXT_PUBLIC_EMAIL_USERNAME, // your Gmail username
        pass: process.env.NEXT_PUBLIC_EMAIL_PASSWORD, // your Gmail password or app-specific password
      },
    });

    // Define the email options
    const mailOptions = {
      from: process.env.NEXT_PUBLIC_EMAIL_USERNAME,
      to: process.env.NEXT_PUBLIC_PERSONAL_EMAIL, // your personal email address
      replyTo: email,
      subject: `New Enquiry from ${name}`,
      html: `
        <h2>New Enquiry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: 'Message sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ success: false, message: 'Failed to send message' }, { status: 500 });
  }
}
