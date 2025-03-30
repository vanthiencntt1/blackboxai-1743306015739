'use client'
import * as React from 'react'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
// Using verified relative path
import { Navbar } from '../components/Navbar'

export default function DashboardPage() {
  const router = useRouter()

  useEffect(() => {
    if (!document.cookie.includes('token')) {
      router.push('/auth/login')
    }
  }, [router])

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <main className="p-4 md:p-8">
        <h1 className="text-2xl font-bold text-gray-800">Clinic Dashboard</h1>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          <DashboardCard 
            title="Patients"
            description="Manage patient records"
            href="/dashboard/patients"
            icon="users"
          />
          <DashboardCard 
            title="Appointments" 
            description="Schedule and view appointments"
            href="/dashboard/appointments"
            icon="calendar"
          />
          <DashboardCard 
            title="Billing"
            description="Manage invoices and payments"
            href="/dashboard/billing"
            icon="credit-card"
          />
        </div>
      </main>
    </div>
  )
}

function DashboardCard({ title, description, href, icon }: {
  title: string
  description: string
  href: string
  icon: string
}) {
  return (
    <a href={href} className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow">
      <div className="flex items-center">
        <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-3">
          <span className="text-blue-500 text-sm">{icon === 'users' ? '👥' : icon === 'calendar' ? '📅' : '💳'}</span>
        </div>
        <h2 className="text-lg font-semibold">{title}</h2>
      </div>
      <p className="mt-2 text-gray-600">{description}</p>
    </a>
  )
}