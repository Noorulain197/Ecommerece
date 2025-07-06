'use client'

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from 'recharts'
import { FaStar } from 'react-icons/fa'

const ratingData = [
  { stars: 5, count: 40 },
  { stars: 4, count: 30 },
  { stars: 3, count: 15 },
  { stars: 2, count: 5 },
  { stars: 1, count: 3 },
]

const starColors = {
  5: '#FFD700',
  4: '#FFC107',
  3: '#FF9800',
  2: '#FF5722',
  1: '#F44336',
}

export default function RatingChart() {
  return (
   <div className="bg-white p-4 sm:p-6 rounded-xl shadow-md overflow-x-auto">
  <h3 className="text-lg sm:text-xl font-bold mb-4 flex items-center gap-2">
    <FaStar className="text-yellow-500" /> Product Ratings Summary
  </h3>

  <div className="min-w-[300px] sm:min-w-full">
    <ResponsiveContainer width="100%" height={250}>
      <BarChart data={ratingData} layout="vertical">
        <XAxis type="number" allowDecimals={false} />
        <YAxis dataKey="stars" type="category" tickFormatter={(value) => `${value} ★`} />
        <Tooltip formatter={(value) => `${value} Ratings`} />
        <Bar dataKey="count" radius={[0, 8, 8, 0]}>
          {ratingData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={starColors[entry.stars]} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  </div>
</div>


  )
}
