
import nodemailer from 'nodemailer';

/**
 * Utility to send an email using Gmail SMTP.
 * Requires GMAIL_USER and GMAIL_APP_PASSWORD environment variables.
 */
export async function sendEmail({
  to,
  subject,
  text,
  html,
}: {
  to: string;
  subject: string;
  text: string;
  html?: string;
}) {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER || 'welldropp.tech@gmail.com',
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });

  const mailOptions = {
    from: `"WELLDROPP Lead System" <${process.env.GMAIL_USER || 'welldropp.tech@gmail.com'}>`,
    to,
    subject,
    text,
    html,
  };

  return transporter.sendMail(mailOptions);
}
