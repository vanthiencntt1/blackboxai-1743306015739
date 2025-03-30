import React from 'react'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4">
      <h1 className="text-3xl font-bold">Clinic Management System</h1>
      <div className="flex gap-4">
        <Link href="/auth/register" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Register
        </Link>
        <Link href="/auth/login" className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
          Login
        </Link>
      </div>
    </div>
  )
}