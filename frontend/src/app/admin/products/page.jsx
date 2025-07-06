// /admin/products/page.jsx
'use client'

import axios from 'axios'
import { useAuth } from '@/app/context/AuthContext'
import AddProductForm from '../../components/AddProductForm' // ⬅️ correct path adjust karo
import { useState } from 'react'

export default function AdminProducts() {
  const { token } = useAuth()
  const [products, setProducts] = useState([]) // optional: for showing added products

  const handleAddProduct = async (product) => {
    try {
      await axios.post(
        'http://localhost:5000/api/products',
        {
          ...product,
          price: Number(product.price),
          stock: Number(product.stock),
        },
        { headers: { Authorization: `Bearer ${token}` } }
      )
      alert('✅ Product added!')
      // optionally: refresh product list
    } catch (err) {
      console.error('❌ Product add failed:', err.response?.data || err.message)
      alert('Error adding product')
    }
  }

  return (
    <div className="p-4 sm:p-10 max-w-lg mx-auto">
  <h2 className="text-xl sm:text-2xl font-bold mb-6">Add New Product</h2>
  <AddProductForm onSubmit={handleAddProduct} />
</div>

  )
}
