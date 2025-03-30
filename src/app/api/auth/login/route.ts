import { NextResponse } from 'next/server'
import jwt from 'jsonwebtoken'

// Mock user database
const users = [
  {
    id: 1,
    email: 'admin@clinic.com',
    password: 'admin123',
    role: 'admin'
  },
  {
    id: 2,
    email: 'reception@clinic.com',
    password: 'reception123',
    role: 'receptionist'
  }
]

export async function POST(request: Request) {
  const { email, password } = await request.json()

  const user = users.find(
    (u) => u.email === email && u.password === password
  )

  if (!user) {
    return NextResponse.json(
      { message: 'Invalid credentials' },
      { status: 401 }
    )
  }

  const token = jwt.sign(
    { userId: user.id, role: user.role },
    process.env.JWT_SECRET || 'your-secret-key',
    { expiresIn: '1h' }
  )

  const response = NextResponse.json(
    { message: 'Login successful' },
    { status: 200 }
  )

  response.cookies.set('token', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    path: '/',
  })

  return response
}