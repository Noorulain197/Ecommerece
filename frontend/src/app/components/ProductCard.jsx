'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useContext } from 'react'
import { CartContext } from '@/app/context/CartContext'
import Link from 'next/link'


export default function ProductCard({ _id, title, price, image }) {
  const router = useRouter()
  const { addToCart } = useContext(CartContext)

  // ——— handlers ———
  const handleAddToCart = () => {
    addToCart({ _id, title, price, image, quantity: 1 })
    router.push('/cart')               // single source of truth: router
  }

  const handleViewProduct = () => {
    router.push(`/product/${_id}`)      // dynamic id, no brackets
  }

  return (
  <div className="border rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all bg-white">
  <Image
    src={image}
    alt={title}
    width={400}
    height={300}
    className="w-full h-40 sm:h-52 object-contain p-4 bg-white"
    priority
  />

  <div className="p-4">
    <h3 className="text-base sm:text-lg font-semibold line-clamp-1">{title}</h3>
    <p className="text-primary font-bold mt-1 text-sm sm:text-base">${price}</p>

    <div className="flex flex-col sm:flex-row gap-2 mt-3">
      <button
        onClick={handleAddToCart}
        className="bg-primary text-white px-4 py-2 rounded text-sm sm:text-base hover:bg-indigo-700"
      >
        Add to Cart
      </button>
      <Link href={`/product/${_id}`}>
        <button
          className="bg-transparent text-black px-4 py-2 rounded text-sm sm:text-base hover:bg-indigo-700 hover:text-white border border-black"
        >
          View Product
        </button>
      </Link>
    </div>
  </div>
</div>

  )
}
