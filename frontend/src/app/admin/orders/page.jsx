'use client'

import { useEffect, useState } from 'react'
import axios from 'axios'
import { useAuth } from '@/app/context/AuthContext'

export default function AdminOrders() {
  const { token } = useAuth()
  const [orders, setOrders] = useState([])

  const fetchOrders = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/orders/admin', {
        headers: { Authorization: `Bearer ${token}` },
      })
      setOrders(res.data)
    } catch (err) {
      console.error('❌ Failed to load orders:', err.response?.data || err)
    }
  }

  useEffect(() => {
    if (token) fetchOrders()
  }, [token])

  const handleStatusChange = async (id, newStatus) => {
    try {
      await axios.put(
        `http://localhost:5000/api/orders/${id}`,
        { status: newStatus },
        { headers: { Authorization: `Bearer ${token}` } },
      )
      fetchOrders()
    } catch (err) {
      console.error('Status update failed', err)
    }
  }

  const deleteOrder = async (id) => {
    if (!confirm('Delete this order?')) return
    try {
      await axios.delete(`http://localhost:5000/api/orders/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      fetchOrders()
    } catch (err) {
      console.error('Delete failed', err)
    }
  }

 return (
  <div className="p-4 sm:p-10">
    <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">
      Customer Orders
    </h2>

    {orders.length === 0 ? (
      <p>No orders found.</p>
    ) : (
      /* 👉 Horizontal scroll only below md */
      <div className="overflow-x-auto md:overflow-visible">
        <table className="min-w-full text-xs sm:text-sm border">
          <thead>
            <tr className="bg-gray-100 text-center">
              <th className="p-2 border">User</th>
              <th className="p-2 border">Products</th>
              <th className="p-2 border">Total</th>

              {/* Status stays visible everywhere */}
              <th className="p-2 border">Status</th>

              {/* Date + Actions hide under sm to declutter */}
              <th className="p-2 border hidden sm:table-cell">Date</th>
              <th className="p-2 border hidden sm:table-cell">Actions</th>
            </tr>
          </thead>

          <tbody>
            {orders.map((order) => (
              <tr key={order._id} className="text-center">
                <td className="p-2 border whitespace-nowrap">
                  {order.user.email}
                </td>

                <td className="p-2 border text-left">
                  {order.items.map((item) => (
                    <div
                      key={item.product}
                      className="whitespace-nowrap sm:whitespace-normal"
                    >
                      {`${item.title} × ${item.quantity}`}
                    </div>
                  ))}
                </td>

                <td className="p-2 border whitespace-nowrap">
                  Rs.&nbsp;{order.total}
                </td>

                <td className="p-2 border">
                  <select
                    value={order.status}
                    onChange={(e) =>
                      handleStatusChange(order._id, e.target.value)
                    }
                    className="border rounded px-2 py-1"
                  >
                    {['pending', 'paid', 'shipped', 'delivered'].map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </td>

                {/* Date & Delete shrink‑away on extra‑small */}
                <td className="p-2 border hidden sm:table-cell">
                  {new Date(order.createdAt).toLocaleString()}
                </td>

                <td className="p-2 border hidden sm:table-cell">
                  <button
                    onClick={() => deleteOrder(order._id)}
                    className="text-red-500 hover:underline"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )}
  </div>
)

}