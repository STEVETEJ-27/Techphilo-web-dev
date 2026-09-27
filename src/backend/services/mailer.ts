import nodemailer from 'nodemailer'

/**
 * Backend Mailer Service — handles SMTP/Gmail transporter configuration
 * and sending outgoing automated email notifications.
 */
export function getMailTransporter() {
  const gmailUser = process.env.GMAIL_USER || process.env.EMAIL_USER
  const gmailPass = process.env.GMAIL_APP_PASS || process.env.EMAIL_PASS

  if (!gmailUser || !gmailPass) {
    return null
  }

  return nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, // Use true for port 465
    auth: {
      user: gmailUser,
      pass: gmailPass,
    },
    family: 4, // Forces Nodemailer to use IPv4 and bypasses Gmail connection timeouts on Render
  } as any)
}

export function getRecipientEmail(): string {
  return process.env.CONTACT_TO_EMAIL || process.env.GMAIL_USER || process.env.EMAIL_USER || ''
}
