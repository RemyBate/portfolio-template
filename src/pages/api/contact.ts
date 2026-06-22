import type { APIRoute } from "astro";
import nodemailer from "nodemailer";

const CONTACT_EMAIL = "remybatem@gmail.com";
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();
    const name = typeof body.name === "string" ? body.name.trim() : "";
    const email = typeof body.email === "string" ? body.email.trim() : "";
    const subject = typeof body.subject === "string" ? body.subject.trim() : "";
    const message = typeof body.message === "string" ? body.message.trim() : "";

    if (!name || !email || !subject || !message) {
      return new Response(
        JSON.stringify({ success: false, error: "Missing required fields." }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    if (!EMAIL_PATTERN.test(email)) {
      return new Response(
        JSON.stringify({ success: false, error: "Invalid sender email address." }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    const gmailUser = import.meta.env.GMAIL_USER?.trim();
    const gmailAppPassword = import.meta.env.GMAIL_APP_PASSWORD?.replace(/\s/g, "");

    if (!gmailUser && !gmailAppPassword) {
      console.error(
        "Contact form: GMAIL_USER and GMAIL_APP_PASSWORD are not configured."
      );
      return new Response(
        JSON.stringify({
          success: false,
          error:
            "Email service is not configured. GMAIL_USER and GMAIL_APP_PASSWORD are missing.",
        }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }

    if (!gmailUser) {
      console.error("Contact form: GMAIL_USER is not configured.");
      return new Response(
        JSON.stringify({
          success: false,
          error: "Email service is not configured. GMAIL_USER is missing.",
        }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }

    if (!gmailAppPassword) {
      console.error("Contact form: GMAIL_APP_PASSWORD is not configured.");
      return new Response(
        JSON.stringify({
          success: false,
          error:
            "Email service is not configured. GMAIL_APP_PASSWORD is missing.",
        }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: gmailUser,
        pass: gmailAppPassword,
      },
    });

    await transporter.sendMail({
      from: `"Portfolio Contact" <${gmailUser}>`,
      to: CONTACT_EMAIL,
      replyTo: email,
      subject: `[remydev.de] ${subject}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Subject: ${subject}`,
        "",
        "Message:",
        message,
      ].join("\n"),
      html: `
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Subject:</strong> ${escapeHtml(subject)}</p>
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(message).replace(/\n/g, "<br>")}</p>
      `,
    });

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    console.error("Contact form error:", errorMessage, error);
    return new Response(
      JSON.stringify({ success: false, error: "Failed to send message." }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
};

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
