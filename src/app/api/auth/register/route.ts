import { NextResponse } from 'next/server'
import jwt from 'jsonwebtoken'

let users = [
  {
    id: 1,
    email: 'admin@clinic.com',
    password: 'admin123',
    role: 'admin'
  }
]

export async function POST(request: Request) {
  const { email, password, name } = await request.json()

  if (users.some(u => u.email === email)) {
    return NextResponse.json(
      { message: 'User already exists' },
      { status: 400 }
    )
  }

  const newUser = {
    id: users.length + 1,
    email,
    password,
    name,
    role: 'receptionist'
  }

  users.push(newUser)

  const token = jwt.sign(
    { userId: newUser.id, role: newUser.role },
    process.env.JWT_SECRET || 'your-secret-key',
    { expiresIn: '1h' }
  )

  const response = NextResponse.json(
    { message: 'Registration successful' },
    { status: 201 }
  )

  response.cookies.set('token', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    path: '/',
  })

  return response
}