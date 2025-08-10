'use client'

import { useEffect } from 'react'
import { useAuth } from '@/lib/AuthContext'
import { useRouter } from 'next/navigation'

export default function LogoutPage() {
  const { logout } = useAuth()
  const router = useRouter()

  useEffect(() => {
    const performLogout = async () => {
      try {
        console.log('Logout page: Performing logout...')
        await logout()
        console.log('Logout page: Logout successful, redirecting to login')
        router.push('/login')
      } catch (error) {
        console.error('Logout page: Logout error:', error)
        // Even if logout fails, redirect to login
        router.push('/login')
      }
    }

    performLogout()
  }, [logout, router])

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900 mx-auto mb-4"></div>
        <h1 className="text-xl font-semibold text-gray-900">Logging out...</h1>
        <p className="text-gray-600 mt-2">Please wait while we sign you out.</p>
      </div>
    </div>
  )
} 