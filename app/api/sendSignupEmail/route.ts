import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

async function streamToBuffer(stream: ReadableStream<Uint8Array>): Promise<Buffer> {
  const reader = stream.getReader();
  const chunks: Uint8Array[] = [];

  let result = await reader.read();
  while (!result.done) {
    chunks.push(result.value);
    result = await reader.read();
  }

  return Buffer.concat(chunks);
}

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;
    const country = formData.get('country') as string;
    const resume = formData.get('resume') as File;

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.NEXT_PUBLIC_EMAIL_USERNAME,
        pass: process.env.NEXT_PUBLIC_EMAIL_PASSWORD,
      },
    });

    const attachments = resume ? [{
      filename: resume.name,
      content: await streamToBuffer(resume.stream()),  // Convert the stream to a Buffer
      contentType: resume.type,
    }] : [];

    const mailOptions = {
      from: process.env.NEXT_PUBLIC_EMAIL_USERNAME,
      to: process.env.NEXT_PUBLIC_PERSONAL_EMAIL,
      replyTo: email,
      subject: `Chapter Signup Request from ${name}`,
      html: `
        <p>Name: ${name}</p>
        <p>Email: ${email}</p>
        <p>Phone: ${phone}</p>
        <p>Country: ${country}</p>
      `,
      attachments,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: "Success: Signup form submitted", success: true });
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json({ message: "COULD NOT SEND SIGNUP FORM" }, { status: 500 });
  }
}
