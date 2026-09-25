import { NextRequest, NextResponse } from 'next/server'
import { processDemoSubmission } from '@backend/controllers/demoController'

/**
 * POST /api/send-demo
 * Delegates submission handling to Backend Demo Controller
 */
export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, email, school, role, phone, size, focus } = body

    const result = await processDemoSubmission({
      name,
      email,
      school,
      role,
      phone,
      studentCount: size,
      notes: focus ? `Program Focus Areas: ${focus}` : undefined,
    })

    if (!result.success) {
      return NextResponse.json({ error: result.error }, { status: result.status })
    }

    return NextResponse.json({ message: result.message }, { status: 200 })
  } catch (err) {
    console.error('Demo API Error:', err)
    return NextResponse.json(
      { error: 'An unexpected server error occurred. Please try again later.' },
      { status: 500 }
    )
  }
}
