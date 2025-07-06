'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { CheckCircle } from 'lucide-react'

export default function OrderConfirmationPage() {
  const router = useRouter()

  useEffect(() => {
    // Optional: Clear cart from localStorage or context if needed
    // setCart([]) if you have access to context here
  }, [])

  return (
  <div className="min-h-screen flex flex-col items-center justify-center px-4 py-8 sm:py-10 bg-gradient-to-br from-purple-100 to-blue-100">
  <div className="bg-white p-6 sm:p-10 rounded-xl shadow-xl w-full max-w-sm sm:max-w-md text-center animate-in fade-in duration-700">
    <CheckCircle className="text-green-500 w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4" />
    <h1 className="text-2xl sm:text-3xl font-bold mb-2">Order Confirmed!</h1>
    <p className="text-gray-600 text-sm sm:text-base mb-6">
      Thank you for your purchase. Your order has been placed successfully. ✨
    </p>

    <div className="bg-gray-50 p-3 sm:p-4 rounded-lg text-left mb-6 shadow-sm text-sm sm:text-base">
      <p className="text-gray-700">We’ve sent a confirmation email with the details of your order.</p>
      <p className="text-gray-700 mt-1">You’ll receive updates once your package ships.</p>
    </div>

    <Button
      onClick={() => router.push('/')}
      className="bg-indigo-600 hover:bg-indigo-700 w-full text-sm sm:text-base"
    >
      Back to Home
    </Button>
  </div>
</div>

  )
}
