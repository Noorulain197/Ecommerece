'use client'

import { useState } from 'react'
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"

export default function AddProductForm({ onSubmit }) {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState('')
  const [image, setImage] = useState('')
  const [category, setCategory] = useState('')
  const [stock, setStock] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    const newProduct = { title, description, price, image, category, stock }
    onSubmit(newProduct)
  }

  return (
  <form
  onSubmit={handleSubmit}
  className="space-y-4 max-w-sm sm:max-w-md mx-auto p-4 sm:p-6 border rounded-lg shadow-md bg-white"
>
  <div>
    <Label className="text-sm sm:text-base">Title</Label>
    <Input
      value={title}
      onChange={(e) => setTitle(e.target.value)}
      required
      className="text-sm sm:text-base"
    />
  </div>

  <div>
    <Label className="text-sm sm:text-base">Description</Label>
    <Textarea
      value={description}
      onChange={(e) => setDescription(e.target.value)}
      required
      className="text-sm sm:text-base"
    />
  </div>

  <div>
    <Label className="text-sm sm:text-base">Price</Label>
    <Input
      type="number"
      value={price}
      onChange={(e) => setPrice(e.target.value)}
      required
      className="text-sm sm:text-base"
    />
  </div>

  <div>
    <Label className="text-sm sm:text-base">Image URL</Label>
    <Input
      value={image}
      onChange={(e) => setImage(e.target.value)}
      required
      className="text-sm sm:text-base"
    />
  </div>

  <div>
    <Label className="text-sm sm:text-base">Category</Label>
    <Input
      value={category}
      onChange={(e) => setCategory(e.target.value)}
      required
      className="text-sm sm:text-base"
    />
  </div>

  <div>
    <Label className="text-sm sm:text-base">Stock</Label>
    <Input
      type="number"
      value={stock}
      onChange={(e) => setStock(e.target.value)}
      required
      className="text-sm sm:text-base"
    />
  </div>

  <Button type="submit" className="w-full text-sm sm:text-base">
    Add Product
  </Button>
</form>

  )
}
