import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { firstName, lastName, email, company, phone, role, message } = body;

    if (!firstName || !lastName || !email || !company) {
      return NextResponse.json(
        { error: "Please fill in all required fields." },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: Number(process.env.SMTP_PORT) || 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #1a6df5; border-bottom: 2px solid #1a6df5; padding-bottom: 10px;">
          New Demo Request — Urvika.ai
        </h2>
        <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
          <tr>
            <td style="padding: 8px 12px; font-weight: bold; color: #333; width: 140px;">Name</td>
            <td style="padding: 8px 12px; color: #555;">${firstName} ${lastName}</td>
          </tr>
          <tr style="background: #f9fafb;">
            <td style="padding: 8px 12px; font-weight: bold; color: #333;">Email</td>
            <td style="padding: 8px 12px; color: #555;"><a href="mailto:${email}">${email}</a></td>
          </tr>
          <tr>
            <td style="padding: 8px 12px; font-weight: bold; color: #333;">Company</td>
            <td style="padding: 8px 12px; color: #555;">${company}</td>
          </tr>
          <tr style="background: #f9fafb;">
            <td style="padding: 8px 12px; font-weight: bold; color: #333;">Phone</td>
            <td style="padding: 8px 12px; color: #555;">${phone || "Not provided"}</td>
          </tr>
          <tr>
            <td style="padding: 8px 12px; font-weight: bold; color: #333;">Role</td>
            <td style="padding: 8px 12px; color: #555;">${role || "Not specified"}</td>
          </tr>
          <tr style="background: #f9fafb;">
            <td style="padding: 8px 12px; font-weight: bold; color: #333;">Message</td>
            <td style="padding: 8px 12px; color: #555;">${message || "No message provided"}</td>
          </tr>
        </table>
        <p style="margin-top: 20px; font-size: 12px; color: #999;">
          This lead was submitted through the Urvika.ai website contact form.
        </p>
      </div>
    `;

    await transporter.sendMail({
      from: `"Urvika.ai Website" <${process.env.SMTP_USER}>`,
      to: "shrikant@alphanio.com",
      replyTo: email,
      subject: `New Demo Request from ${firstName} ${lastName} — ${company}`,
      html: htmlContent,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again." },
      { status: 500 }
    );
  }
}
