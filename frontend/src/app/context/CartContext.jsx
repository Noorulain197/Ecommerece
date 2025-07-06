'use client'

import { createContext, useState, useContext, useEffect } from 'react'

// Create the context
export const CartContext = createContext()

// Create a provider component
export default function CartProvider({ children }) {
  const [cart, setCart] = useState([])
  const [cartCount, setCartCount] = useState(0)

  // Calculate cart count whenever cart changes
  useEffect(() => {
    const count = cart.reduce((total, item) => total + item.quantity, 0)
    setCartCount(count)
  }, [cart])

  // Add to cart function
  const addToCart = (newItem) => {
    setCart(prev => {
      // If color doesn't exist, add default
      const itemToAdd = newItem.color ? newItem : {...newItem, color: 'default'}
      
      // Check if item already exists (by id and color)
      const existingIndex = prev.findIndex(
        item => item._id === itemToAdd._id && item.color === itemToAdd.color
      )
      
      if (existingIndex >= 0) {
        const updated = [...prev]
        updated[existingIndex].quantity += itemToAdd.quantity
        return updated
      }
      
      return [...prev, itemToAdd]
    })
  }

  return (
    <CartContext.Provider value={{ 
      cart, 
      setCart, 
      addToCart, 
      cartCount 
    }}>
      {children}
    </CartContext.Provider>
  )
}

// Custom hook for using cart context
export function useCart() {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}