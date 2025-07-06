'use client'

import { createContext, useContext, useState, useEffect } from 'react'
import { onAuthStateChanged, getIdToken } from 'firebase/auth'
import { auth } from '../../../firebaseConfig'

export const AuthContext = createContext()

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [token, setToken] = useState(null)

  const adminEmails = [
    'noorulainfarooq41@gmail.com',
    'admin@abc.com',
  ]

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (currentUser) => {
      if (!currentUser) {
        setUser(null)
        setToken(null)
        localStorage.removeItem('token')
      } else {
        const isAdmin = adminEmails.includes(currentUser.email)
        const idToken = await getIdToken(currentUser)
        setToken(idToken)
        localStorage.setItem('token', idToken)
        setUser({ ...currentUser, role: isAdmin ? 'admin' : 'user' })
      }
    })
    return () => unsub()
  }, [])

  return (
    <AuthContext.Provider value={{ user, token }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used inside AuthProvider')
  return ctx
}
