import nodemailer from 'nodemailer'

/**
 * Backend Mailer Service — handles SMTP/Gmail transporter configuration
 * and sending outgoing automated email notifications.
 */
export function getMailTransporter() {
  const gmailUser = process.env.GMAIL_USER
  const gmailPass = process.env.GMAIL_APP_PASS

  if (!gmailUser || !gmailPass) {
    return null
  }

  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: gmailUser,
      pass: gmailPass,
    },
  })
}

export function getRecipientEmail(): string {
  return process.env.CONTACT_TO_EMAIL || process.env.GMAIL_USER || ''
}
