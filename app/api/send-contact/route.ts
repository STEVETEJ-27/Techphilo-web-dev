import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

/**
 * POST /api/send-contact
 *
 * Receives the Contact page form submission and sends a formatted
 * email notification to the TechPhilo inbox via Nodemailer + Gmail.
 *
 * Required environment variables (add to .env.local):
 *   GMAIL_USER       — your Gmail address, e.g. itstechphilo@gmail.com
 *   GMAIL_APP_PASS   — a 16-char Gmail App Password (NOT your normal password)
 *   CONTACT_TO_EMAIL — recipient address (defaults to GMAIL_USER if omitted)
 */

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, email, school, message } = body

    // Basic server-side validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields.' },
        { status: 400 }
      )
    }

    const gmailUser = process.env.GMAIL_USER
    const gmailPass = process.env.GMAIL_APP_PASS

    if (!gmailUser || !gmailPass) {
      console.error('GMAIL_USER or GMAIL_APP_PASS env vars not set.')
      return NextResponse.json(
        { error: 'Email service not configured. Please contact us directly.' },
        { status: 503 }
      )
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: gmailUser,
        pass: gmailPass,
      },
    })

    const toEmail = process.env.CONTACT_TO_EMAIL || gmailUser

    const mailOptions = {
      from: `"TechPhilo Website" <${gmailUser}>`,
      to: toEmail,
      replyTo: email,
      subject: `✉️ New Contact Message — ${name}${school ? ` (${school})` : ''}`,
      html: `
        <div style="font-family: 'Inter', system-ui, sans-serif; max-width: 600px; margin: 0 auto; background: #F9F2E6; border-radius: 12px; overflow: hidden;">
          <div style="background: #3F554F; padding: 24px 32px;">
            <h1 style="color: #FFFDF8; margin: 0; font-size: 20px; font-weight: 700;">New Contact Message ✉️</h1>
            <p style="color: rgba(255,255,255,0.7); margin: 6px 0 0; font-size: 13px;">Submitted via techphilo.in/contact</p>
          </div>

          <div style="padding: 28px 32px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #DDD5C5; font-size: 13px; color: #78817A; width: 140px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.08em;">Name</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #DDD5C5; font-size: 14px; color: #263638; font-weight: 600;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #DDD5C5; font-size: 13px; color: #78817A; font-weight: 600; text-transform: uppercase; letter-spacing: 0.08em;">Email</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #DDD5C5; font-size: 14px;"><a href="mailto:${email}" style="color: #3F554F;">${email}</a></td>
              </tr>
              ${school ? `
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #DDD5C5; font-size: 13px; color: #78817A; font-weight: 600; text-transform: uppercase; letter-spacing: 0.08em;">Organisation</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #DDD5C5; font-size: 14px; color: #263638;">${school}</td>
              </tr>` : ''}
              <tr>
                <td style="padding: 10px 0; font-size: 13px; color: #78817A; font-weight: 600; text-transform: uppercase; letter-spacing: 0.08em; vertical-align: top; padding-top: 14px;">Message</td>
                <td style="padding: 10px 0; font-size: 14px; color: #263638; padding-top: 14px; line-height: 1.6; white-space: pre-wrap;">${message}</td>
              </tr>
            </table>
          </div>

          <div style="background: #3F554F; padding: 16px 32px; text-align: center;">
            <a href="mailto:${email}" style="display: inline-block; background: #D6AB75; color: #263638; text-decoration: none; padding: 10px 24px; border-radius: 8px; font-weight: 700; font-size: 13px;">Reply to ${name}</a>
          </div>

          <div style="padding: 16px 32px; text-align: center;">
            <p style="font-size: 11px; color: #91978E; margin: 0;">This email was sent automatically from the TechPhilo website contact form.</p>
          </div>
        </div>
      `,
    }

    await transporter.sendMail(mailOptions)

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error sending contact email:', error)
    return NextResponse.json(
      { error: 'Failed to send message. Please try again or contact us directly.' },
      { status: 500 }
    )
  }
}
