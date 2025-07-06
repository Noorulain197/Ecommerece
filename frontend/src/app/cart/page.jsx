'use client'

import { useContext, useState, useEffect } from 'react'
import { CartContext } from '../context/CartContext'
import { Button } from '@/components/ui/button'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { FaTrash } from 'react-icons/fa'
import Link from 'next/link'
import RatingChart from '../components/RatingChart'

export default function CartPage() {
  const { cart, setCart } = useContext(CartContext)
  const [total, setTotal] = useState(0)
  const taxRate = 0.13

  const handleRemove = (id) => {
    const updated = cart.filter((item) => item._id !== id)
    setCart(updated)
  }

  const handleQuantityChange = (id, quantity) => {
    const updated = cart.map((item) =>
      item._id === id ? { ...item, quantity: parseInt(quantity) } : item
    )
    setCart(updated)
  }

  useEffect(() => {
    const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
    setTotal(totalPrice)
  }, [cart])

  const tax = total * taxRate
  const grandTotal = total + tax

  if (cart.length === 0)
    return <p className="text-center py-20 text-xl font-semibold">Your cart is empty!</p>

  return (
   <div className="container mx-auto px-4 py-6 sm:py-10">
  <h1 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center">
    🛒 Your Shopping Cart
  </h1>

  {/* 👉 Scrollable on mobile */}
  <div className="overflow-x-auto">
    <Table className="min-w-[700px]">
      <TableCaption>A list of items you've added to your cart.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Image</TableHead>
          <TableHead>Title</TableHead>
          <TableHead>Price</TableHead>
          <TableHead>Quantity</TableHead>
          <TableHead>Subtotal</TableHead>
          <TableHead>Remove</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {cart.map((item) => (
          <TableRow key={item._id}>
            <TableCell>
              <img src={item.image} alt={item.title} className="w-14 h-14 sm:w-16 sm:h-16 rounded object-cover" />
            </TableCell>
            <TableCell>{item.title}</TableCell>
            <TableCell>${item.price.toFixed(2)}</TableCell>
            <TableCell>
              <input
                type="number"
                min="1"
                value={item.quantity}
                onChange={(e) => handleQuantityChange(item._id, e.target.value)}
                className="w-14 sm:w-16 border rounded px-2 py-1"
              />
            </TableCell>
            <TableCell>${(item.price * item.quantity).toFixed(2)}</TableCell>
            <TableCell>
              <Button
                variant="destructive"
                size="icon"
                onClick={() => handleRemove(item._id)}
              >
                <FaTrash className="text-white" />
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </div>

  {/* 👉 Responsive summary card */}
  <div className="mt-8 sm:mt-10 max-w-full sm:max-w-md ml-auto bg-gray-50 p-4 sm:p-6 rounded-xl shadow-md">
    <h2 className="text-lg sm:text-xl font-bold mb-4">Order Summary</h2>

    <div className="flex justify-between mb-2 text-sm sm:text-base">
      <span>Subtotal:</span>
      <span>${total.toFixed(2)}</span>
    </div>
    <div className="flex justify-between mb-2 text-sm sm:text-base">
      <span>Tax (13%):</span>
      <span>${tax.toFixed(2)}</span>
    </div>
    <div className="flex justify-between font-semibold text-base sm:text-lg border-t pt-3 mt-3">
      <span>Total:</span>
      <span>${grandTotal.toFixed(2)}</span>
    </div>

    <Link href="/checkout">
      <Button className="mt-6 w-full bg-primary hover:bg-indigo-700">
        Proceed to Checkout
      </Button>
    </Link>
  </div>
</div>

  )
}
