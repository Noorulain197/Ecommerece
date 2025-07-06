'use client'

import { useContext, useState } from 'react'
import { useRouter } from 'next/navigation'
import { CartContext } from '../context/CartContext'
import { Button } from '@/components/ui/button'

export default function CheckoutPage() {
  const router = useRouter()
  const { cart } = useContext(CartContext)

  const [form, setForm] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    postalCode: '',
    phone: '',
  })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Order placed:', { ...form, cart })
    router.push('/order-confirmation')
  }

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const taxRate = 0.13
  const tax = subtotal * taxRate
  const grandTotal = subtotal + tax

  return (
  <div className="container mx-auto px-4 py-6 sm:py-12 max-w-2xl md:max-w-4xl">
    <h1 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center">🧾 Checkout</h1>

    {/* 👉 Grid becomes 1-column on mobile, 2-column on md+ */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
      {/* FORM */}
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-4 sm:p-8 space-y-4 sm:space-y-6">
        <div>
          <label className="block font-medium mb-1 text-sm sm:text-base">Full Name</label>
          <input
            type="text"
            name="name"
            required
            value={form.name}
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded text-sm sm:text-base"
          />
        </div>

        <div>
          <label className="block font-medium mb-1 text-sm sm:text-base">Email</label>
          <input
            type="email"
            name="email"
            required
            value={form.email}
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded text-sm sm:text-base"
          />
        </div>

        <div>
          <label className="block font-medium mb-1 text-sm sm:text-base">Shipping Address</label>
          <textarea
            name="address"
            required
            rows="3"
            value={form.address}
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded text-sm sm:text-base"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block font-medium mb-1 text-sm sm:text-base">City</label>
            <input
              type="text"
              name="city"
              required
              value={form.city}
              onChange={handleChange}
              className="w-full border px-4 py-2 rounded text-sm sm:text-base"
            />
          </div>

          <div>
            <label className="block font-medium mb-1 text-sm sm:text-base">Postal Code</label>
            <input
              type="text"
              name="postalCode"
              required
              value={form.postalCode}
              onChange={handleChange}
              className="w-full border px-4 py-2 rounded text-sm sm:text-base"
            />
          </div>
        </div>

        <div>
          <label className="block font-medium mb-1 text-sm sm:text-base">Phone Number</label>
          <input
            type="tel"
            name="phone"
            required
            value={form.phone}
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded text-sm sm:text-base"
          />
        </div>

        <Button type="submit" className="w-full bg-primary hover:bg-indigo-700">
          Confirm Order
        </Button>
      </form>

      {/* CART SUMMARY */}
      <div className="bg-gray-50 p-4 sm:p-6 rounded-xl shadow-md">
        <h2 className="text-lg sm:text-xl font-bold mb-4">🛍️ Order Summary</h2>
        <ul className="space-y-2 mb-4 text-sm sm:text-base">
          {cart.map((item) => (
            <li key={item._id} className="flex justify-between">
              <span>
                {item.title} × {item.quantity}
              </span>
              <span>${(item.price * item.quantity).toFixed(2)}</span>
            </li>
          ))}
        </ul>

        <div className="flex justify-between mb-2 text-sm sm:text-base">
          <span>Subtotal:</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between mb-2 text-sm sm:text-base">
          <span>Tax (13%):</span>
          <span>${tax.toFixed(2)}</span>
        </div>
        <div className="flex justify-between font-bold text-base sm:text-lg border-t pt-3 mt-3">
          <span>Total:</span>
          <span>${grandTotal.toFixed(2)}</span>
        </div>
      </div>
    </div>
  </div>
)

}
