import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const role = formData.get("role") as string;
    const gender = formData.get("gender") as string;
    const message = formData.get("message") as string;
    const resume = formData.get("resume") as File;

    if (!name || !email || !phone || !role || !resume) {
      return NextResponse.json({ message: "Missing required fields." }, { status: 400 });
    }

    // Convert resume File to Buffer for Nodemailer attachment
    const arrayBuffer = await resume.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    // To use Gmail, the user must set EMAIL_USER and EMAIL_APP_PASSWORD in .env.local
    // For now, if they are missing, we will simulate success or catch the connection error.
    const smtpUser = process.env.EMAIL_USER || "your-email@gmail.com";
    const smtpPass = process.env.EMAIL_APP_PASSWORD || "your-app-password";
    const targetEmail = "chingkheinganbaluwangthem@gmail.com";

    // If no credentials provided, log it and return success for testing UI
    if (!process.env.EMAIL_USER || !process.env.EMAIL_APP_PASSWORD) {
      console.log("Mock Email Sent!");
      console.log(`To: ${targetEmail}`);
      console.log(`Name: ${name}, Role: ${role}, Email: ${email}`);
      console.log("Note: Configure EMAIL_USER and EMAIL_APP_PASSWORD in .env.local to actually send emails.");
      
      // We simulate success so the frontend works
      return NextResponse.json({ message: "Application submitted successfully (Simulated)." }, { status: 200 });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    const mailOptions = {
      from: smtpUser,
      to: targetEmail,
      subject: `New Job Application: ${name} for ${role}`,
      html: `
        <h2>New Application Received</h2>
        <p><strong>Role:</strong> ${role}</p>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Gender:</strong> ${gender}</p>
        <p><strong>Message:</strong></p>
        <p>${message || "No message provided."}</p>
      `,
      attachments: [
        {
          filename: resume.name,
          content: buffer,
        },
      ],
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: "Application submitted successfully!" }, { status: 200 });
  } catch (error) {
    console.error("Error submitting application:", error);
    return NextResponse.json({ message: "Internal server error." }, { status: 500 });
  }
}
