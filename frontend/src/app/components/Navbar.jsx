'use client'

import { useCart } from '../context/CartContext' // Fixed import
import { FaShoppingCart } from 'react-icons/fa'
import Link from 'next/link'

export default function Navbar() {
  const { cartCount } = useCart()

  return (
    <nav className="bg-white px-4 py-3 shadow flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 sm:gap-0 sticky top-0 z-50">
  <Link href="/" className="text-xl font-bold flex items-center gap-2">
    <div className="bg-primary text-white p-1 rounded">Noor</div>
    <span>Store</span>
  </Link>

  <div className="flex items-center justify-between sm:justify-end gap-6">
    <Link href="/products" className="hover:text-primary transition-colors text-sm sm:text-base">
      Products
    </Link>
    
    <Link href="/cart" className="relative">
      <FaShoppingCart className="text-xl sm:text-2xl" />
      {cartCount > 0 && (
        <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-[10px] sm:text-xs">
          {cartCount}
        </span>
      )}
    </Link>
  </div>
</nav>

  )
}