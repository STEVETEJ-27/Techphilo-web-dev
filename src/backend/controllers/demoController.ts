import { getMailTransporter, getRecipientEmail } from '../services/mailer'

export interface DemoPayload {
  name: string
  email: string
  school: string
  role?: string
  phone?: string
  studentCount?: string
  preferredDate?: string
  notes?: string
}

export async function processDemoSubmission(payload: DemoPayload) {
  const { name, email, school, role, phone, studentCount, preferredDate, notes } = payload

  if (!name || !email || !school) {
    return { success: false, status: 400, error: 'Missing required fields (name, email, school).' }
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
    from: `"TechPhilo Demo Booking" <${process.env.GMAIL_USER}>`,
    to: toEmail,
    replyTo: email,
    subject: `[TechPhilo Web] Demo Request from ${name} (${school})`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #222;">
        <h2 style="color: #071985; border-bottom: 2px solid #F2AA16; padding-bottom: 8px;">
          New School Demo Request
        </h2>
        <table style="width: 100%; border-collapse: collapse; margin-top: 16px;">
          <tr>
            <td style="padding: 8px; font-weight: bold; width: 160px;">Name:</td>
            <td style="padding: 8px;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 8px; font-weight: bold;">Email:</td>
            <td style="padding: 8px;"><a href="mailto:${email}">${email}</a></td>
          </tr>
          <tr>
            <td style="padding: 8px; font-weight: bold;">School Name:</td>
            <td style="padding: 8px;">${school}</td>
          </tr>
          ${role ? `<tr><td style="padding: 8px; font-weight: bold;">Role / Title:</td><td style="padding: 8px;">${role}</td></tr>` : ''}
          ${phone ? `<tr><td style="padding: 8px; font-weight: bold;">Phone Number:</td><td style="padding: 8px;">${phone}</td></tr>` : ''}
          ${studentCount ? `<tr><td style="padding: 8px; font-weight: bold;">Estimated Students:</td><td style="padding: 8px;">${studentCount}</td></tr>` : ''}
          ${preferredDate ? `<tr><td style="padding: 8px; font-weight: bold;">Preferred Date:</td><td style="padding: 8px;">${preferredDate}</td></tr>` : ''}
        </table>
        ${notes ? `
        <div style="margin-top: 20px; padding: 16px; background-color: #f7f9fc; border-left: 4px solid #071985; border-radius: 4px;">
          <p style="margin: 0; font-weight: bold; color: #555;">Additional Notes:</p>
          <p style="margin: 8px 0 0 0; white-space: pre-wrap; color: #333;">${notes}</p>
        </div>` : ''}
        <p style="margin-top: 24px; font-size: 12px; color: #888;">
          Sent via TechPhilo Book a Demo Form.
        </p>
      </div>
    `,
  }

  await transporter.sendMail(mailOptions)
  return { success: true, status: 200, message: 'Demo request submitted successfully.' }
}
