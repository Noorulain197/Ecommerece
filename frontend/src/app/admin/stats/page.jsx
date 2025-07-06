'use client'

import RatingChart from '../../components/RatingChart'

export default function AdminStats() {
  return (
    <div className="p-10">
      <h2 className="text-2xl font-bold mb-4">Site Analytics</h2>
      <RatingChart />
    </div>
  )
}
