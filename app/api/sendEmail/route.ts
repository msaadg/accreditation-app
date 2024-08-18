import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const userType = formData.get('userType') as string;
    const phone = formData.get('phone') as string;

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.NEXT_PUBLIC_EMAIL_USERNAME,
        pass: process.env.NEXT_PUBLIC_EMAIL_PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.NEXT_PUBLIC_EMAIL_USERNAME,
      to: process.env.NEXT_PUBLIC_PERSONAL_EMAIL,
      replyTo: email,
      subject: `Accreditation Request from ${name}`,
      html: `
        <p>Name: ${name}</p>
        <p>Email: ${email}</p>
        <p>UserType: ${userType}</p>
        <p>Phone: ${phone}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: "Success: email was sent", success: true });
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json({ message: "COULD NOT SEND MESSAGE" }, { status: 500 });
  }
}
