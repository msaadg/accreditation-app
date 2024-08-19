import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;
    const message = formData.get('message') as string;
    const schoolTitle = formData.get('schoolTitle') as string;

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USERNAME,
      to: process.env.PERSONAL_EMAIL,
      replyTo: email,
      subject: `Enquiry from ${name} about ${schoolTitle}`,
      html: `
        <p>Name: ${name}</p>
        <p>Email: ${email}</p>
        <p>Phone: ${phone}</p>
        <p>Message: ${message}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: "Success: enquiry was sent", success: true });
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json({ message: "COULD NOT SEND ENQUIRY" }, { status: 500 });
  }
}
