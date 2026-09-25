import { NextRequest, NextResponse } from 'next/server'
import { processContactSubmission } from '@backend/controllers/contactController'

/**
 * POST /api/send-contact
 * Delegates submission handling to Backend Contact Controller
 */
export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const result = await processContactSubmission(body)

    if (!result.success) {
      return NextResponse.json({ error: result.error }, { status: result.status })
    }

    return NextResponse.json({ message: result.message }, { status: 200 })
  } catch (err) {
    console.error('Contact API Error:', err)
    return NextResponse.json(
      { error: 'An unexpected server error occurred. Please try again later.' },
      { status: 500 }
    )
  }
}
