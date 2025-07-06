'use client'

import { useParams } from 'next/navigation'
import { useState, useContext } from 'react'
import { CartContext } from '@/app/context/CartContext'
import RatingChart from '@/app/components/RatingChart'

const sections = [
  {
    name: 'Jewelry',
    tag: 'jewelry',
    products: [
      { _id: 'j1', title: 'Diamond Necklace', price: 499.99, image: '/j4.png' },
      { _id: 'j2', title: 'Gold Ring', price: 199.99, image: '/j5.png' },
      { _id: 'j3', title: 'Pearl Earrings', price: 149.99, image: '/j6.png' },
      { _id: 'j4', title: 'Silver Bracelet', price: 99.99, image: '/j1.png' },
      { _id: 'j5', title: 'Anklet', price: 79.99, image: '/j2.png' },
      { _id: 'j6', title: 'Choker Set', price: 299.99, image: '/j3.png' },
    ],
  },
  {
    name: 'Men',
    tag: 'men',
    products: [
      { _id: 'm1', title: 'Men Shirt', price: 29.99, image: '/m1.png' },
      { _id: 'm2', title: 'Men Watch', price: 89.99, image: '/m2.png' },
      { _id: 'm3', title: 'Leather Wallet', price: 39.99, image: '/m3.png' },
      { _id: 'm4', title: 'Sunglasses', price: 59.99, image: '/m4.png' },
      { _id: 'm5', title: 'Shoes', price: 99.99, image: '/m5.png' },
      { _id: 'm6', title: 'Belt', price: 24.99, image: '/m6.png' },
    ],
  },
  {
    name: 'Women',
    tag: 'women',
    products: [
      { _id: 'w1', title: 'Kurti', price: 35.99, image: '/w1.png' },
      { _id: 'w2', title: 'Handbag', price: 89.99, image: '/w2.png' },
      { _id: 'w3', title: 'Makeup Kit', price: 59.99, image: '/w3.png' },
      { _id: 'w4', title: 'Stilettos', price: 79.99, image: '/w4.png' },
      { _id: 'w5', title: 'Hijab Set', price: 39.99, image: '/w5.png' },
      { _id: 'w6', title: 'Jewelry Box', price: 49.99, image: '/w6.png' },
    ],
  },
  {
    name: 'All Products',
    tag: 'all',
    products: [
      { _id: 'a1', title: 'Organic Lotion', price: 19.99, image: '/p1.png' },
      { _id: 'a2', title: 'Aroma Oil', price: 12.99, image: '/p2.png' },
      { _id: 'a3', title: 'Face Mask', price: 14.99, image: '/p3.png' },
      { _id: 'a4', title: 'Hair Serum', price: 22.99, image: '/p4.png' },
      { _id: 'a5', title: 'Lip Balm', price: 5.99, image: '/p5.png' },
      { _id: 'a6', title: 'Nail Polish', price: 6.99, image: '/p1.png' },
    ],
  },
]

const allProducts = sections.flatMap((s) => s.products)

export default function ProductDetailPage() {
  const { id } = useParams()
  const product = allProducts.find((p) => p._id === id)
  const { addToCart } = useContext(CartContext)

  const [quantity, setQuantity] = useState(1)
  const [color, setColor] = useState('default')

  if (!product) return <p className="p-10 text-center">❌ Product not found</p>

  return (
    <div className="container mx-auto px-4 py-6 sm:py-12">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10">
    <img
      src={product.image}
      alt={product.title}
      className="w-full max-h-80 sm:max-h-[500px] rounded-xl object-contain bg-white"
    />

    <div>
      <h1 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">{product.title}</h1>
      <p className="text-lg sm:text-xl text-gray-600 mb-2">${product.price}</p>

      <div className="mb-4">
        <label className="block mb-1 font-medium text-sm sm:text-base">Quantity:</label>
        <input
          type="number"
          min="1"
          value={quantity}
          onChange={(e) => setQuantity(parseInt(e.target.value))}
          className="border rounded px-3 py-2 w-24 text-sm sm:text-base"
        />
      </div>

      <div className="mb-4">
        <label className="block mb-1 font-medium text-sm sm:text-base">Color:</label>
        <select
          value={color}
          onChange={(e) => setColor(e.target.value)}
          className="border rounded px-3 py-2 text-sm sm:text-base"
        >
          <option value="default">Select Color</option>
          <option value="red">Red</option>
          <option value="gold">Gold</option>
          <option value="silver">Silver</option>
        </select>
      </div>

      <div className="mb-4">
        <p className="text-yellow-500 text-sm sm:text-base">⭐ 4.5 Rating</p>
      </div>

      <button
        onClick={() => addToCart({ ...product, quantity, color })}
        className="bg-primary text-white px-4 sm:px-6 py-2 sm:py-3 rounded hover:bg-indigo-700 w-full sm:w-auto text-sm sm:text-base"
      >
        Add to Cart
      </button>
    </div>
  </div>

  <div className="mt-8 sm:mt-12">
    <RatingChart />
  </div>
</div>

  )
}