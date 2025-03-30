'use client'
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export function NewNavbar() {
  const pathname = usePathname()

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <Link href="/" className="text-2xl font-bold text-blue-600 hover:text-blue-800 transition-colors">
            ClinicMS
          </Link>
          
          <div className="flex space-x-8">
            <Link 
              href="/dashboard"
              className={`px-3 py-2 rounded-md text-sm font-medium ${pathname === '/dashboard' ? 'bg-blue-100 text-blue-700' : 'text-gray-600 hover:bg-gray-100'}`}
            >
              Dashboard
            </Link>
            <Link
              href="/auth/login" 
              className={`px-3 py-2 rounded-md text-sm font-medium ${pathname === '/auth/login' ? 'bg-blue-100 text-blue-700' : 'text-gray-600 hover:bg-gray-100'}`}
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}