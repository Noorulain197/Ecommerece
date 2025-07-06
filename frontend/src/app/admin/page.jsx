'use client'

import { useAuth } from '../context/AuthContext'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'

export default function AdminPage() {
  const { user } = useAuth()
  const router = useRouter()

  if (!user || user.role !== 'admin') {
    return <div className="text-center text-red-600 py-10">Access denied</div>
  }

  return (
    <div className="p-6 sm:p-10">
  <h1 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">🛠️ Admin Dashboard</h1>

  {/* 1‑col on phones, 2‑col on tablets+ */}
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
    <Button
      onClick={() => router.push('/admin/products')}
      className="w-full text-sm sm:text-base"
    >
      📦 Manage Products
    </Button>

    <Button
      onClick={() => router.push('/admin/orders')}
      className="w-full text-sm sm:text-base"
    >
      📑 View Orders
    </Button>

    <Button
      onClick={() => router.push('/admin/stats')}
      className="w-full text-sm sm:text-base"
    >
      📊 Analytics
    </Button>

    <Button
      variant="destructive"
      onClick={() => router.push('/')}
      className="w-full text-sm sm:text-base"
    >
      Back to Home
    </Button>
  </div>
</div>

  )
}
