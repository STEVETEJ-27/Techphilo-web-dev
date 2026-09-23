import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

/**
 * POST /api/send-demo
 *
 * Receives the Book Demo form submission and sends a formatted
 * email notification to the TechPhilo inbox via Resend.
 *
 * Required environment variables (add to .env.local & Render dashboard):
 *   RESEND_API_KEY — API key from resend.com
 *   DEMO_FROM      — verified sender address, e.g. noreply@techphilo.in
 *   DEMO_TO_EMAIL  — recipient address for demo notifications
 */

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, role, school, email, phone, size, focus } = body

    // Basic server-side validation
    if (!name || !role || !school || !email || !size) {
      return NextResponse.json(
        { error: 'Missing required fields.' },
        { status: 400 }
      )
    }

    const apiKey = process.env.RESEND_API_KEY
    if (!apiKey) {
      console.error('RESEND_API_KEY env var not set.')
      return NextResponse.json(
        { error: 'Email service not configured. Please contact us directly.' },
        { status: 503 }
      )
    }

    const resend = new Resend(apiKey)

    const from = process.env.DEMO_FROM || 'TechPhilo Website <noreply@techphilo.in>'
    const to = process.env.DEMO_TO_EMAIL || 'techphilo.tp@gmail.com'

    await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject: `📅 New Demo Request — ${school} (${name})`,
      html: `
        <div style="font-family: 'Inter', system-ui, sans-serif; max-width: 600px; margin: 0 auto; background: #F9F2E6; border-radius: 12px; overflow: hidden;">
          <div style="background: #3F554F; padding: 24px 32px;">
            <h1 style="color: #FFFDF8; margin: 0; font-size: 20px; font-weight: 700;">New Demo Request 📅</h1>
            <p style="color: rgba(255,255,255,0.7); margin: 6px 0 0; font-size: 13px;">Submitted via techphilo.in/book-demo</p>
          </div>

          <div style="padding: 28px 32px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #DDD5C5; font-size: 13px; color: #78817A; width: 140px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.08em;">Name</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #DDD5C5; font-size: 14px; color: #263638; font-weight: 600;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #DDD5C5; font-size: 13px; color: #78817A; font-weight: 600; text-transform: uppercase; letter-spacing: 0.08em;">Role</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #DDD5C5; font-size: 14px; color: #263638;">${role}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #DDD5C5; font-size: 13px; color: #78817A; font-weight: 600; text-transform: uppercase; letter-spacing: 0.08em;">School</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #DDD5C5; font-size: 14px; color: #263638; font-weight: 600;">${school}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #DDD5C5; font-size: 13px; color: #78817A; font-weight: 600; text-transform: uppercase; letter-spacing: 0.08em;">Email</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #DDD5C5; font-size: 14px;"><a href="mailto:${email}" style="color: #3F554F;">${email}</a></td>
              </tr>
              ${phone ? `
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #DDD5C5; font-size: 13px; color: #78817A; font-weight: 600; text-transform: uppercase; letter-spacing: 0.08em;">Phone</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #DDD5C5; font-size: 14px; color: #263638;">${phone}</td>
              </tr>` : ''}
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #DDD5C5; font-size: 13px; color: #78817A; font-weight: 600; text-transform: uppercase; letter-spacing: 0.08em;">School Size</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #DDD5C5; font-size: 14px; color: #263638;">${size}</td>
              </tr>
              ${focus ? `
              <tr>
                <td style="padding: 10px 0; font-size: 13px; color: #78817A; font-weight: 600; text-transform: uppercase; letter-spacing: 0.08em; vertical-align: top; padding-top: 14px;">Focus / Notes</td>
                <td style="padding: 10px 0; font-size: 14px; color: #263638; padding-top: 14px;">${focus}</td>
              </tr>` : ''}
            </table>
          </div>

          <div style="background: #3F554F; padding: 16px 32px; text-align: center;">
            <a href="mailto:${email}" style="display: inline-block; background: #D6AB75; color: #263638; text-decoration: none; padding: 10px 24px; border-radius: 8px; font-weight: 700; font-size: 13px;">Reply to ${name}</a>
          </div>

          <div style="padding: 16px 32px; text-align: center;">
            <p style="font-size: 11px; color: #91978E; margin: 0;">This email was sent automatically from the TechPhilo website demo request form.</p>
          </div>
        </div>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error sending demo request email:', error)
    return NextResponse.json(
      { error: 'Failed to send email. Please try again or contact us directly.' },
      { status: 500 }
    )
  }
}
