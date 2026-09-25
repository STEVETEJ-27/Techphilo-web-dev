import { getMailTransporter, getRecipientEmail } from '../services/mailer'

export interface ContactPayload {
  name: string
  email: string
  school?: string
  message: string
}

export async function processContactSubmission(payload: ContactPayload) {
  const { name, email, school, message } = payload

  if (!name || !email || !message) {
    return { success: false, status: 400, error: 'Missing required fields.' }
  }

  const transporter = getMailTransporter()
  if (!transporter) {
    return {
      success: false,
      status: 503,
      error: 'Email service not configured. Please contact us directly.',
    }
  }

  const toEmail = getRecipientEmail()

  const mailOptions = {
    from: `"TechPhilo Contact Form" <${process.env.GMAIL_USER}>`,
    to: toEmail,
    replyTo: email,
    subject: `[TechPhilo Web] New Contact Message from ${name}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #222;">
        <h2 style="color: #071985; border-bottom: 2px solid #F2AA16; padding-bottom: 8px;">
          New Contact Submission
        </h2>
        <table style="width: 100%; border-collapse: collapse; margin-top: 16px;">
          <tr>
            <td style="padding: 8px; font-weight: bold; width: 120px;">Name:</td>
            <td style="padding: 8px;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 8px; font-weight: bold;">Email:</td>
            <td style="padding: 8px;"><a href="mailto:${email}">${email}</a></td>
          </tr>
          ${school ? `
          <tr>
            <td style="padding: 8px; font-weight: bold;">School / Institution:</td>
            <td style="padding: 8px;">${school}</td>
          </tr>` : ''}
        </table>
        <div style="margin-top: 20px; padding: 16px; background-color: #f7f9fc; border-left: 4px solid #071985; border-radius: 4px;">
          <p style="margin: 0; font-weight: bold; color: #555;">Message:</p>
          <p style="margin: 8px 0 0 0; white-space: pre-wrap; color: #333;">${message}</p>
        </div>
        <p style="margin-top: 24px; font-size: 12px; color: #888;">
          Sent via TechPhilo Website Contact Form.
        </p>
      </div>
    `,
  }

  await transporter.sendMail(mailOptions)
  return { success: true, status: 200, message: 'Message sent successfully.' }
}
