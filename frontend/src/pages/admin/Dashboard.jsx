import React from 'react'

export default function AdminDashboard(){
  return (
    <div className="bg-white rounded shadow p-6">
      <h2 className="text-xl font-semibold mb-4">Admin Dashboard (placeholder)</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="p-4 bg-gray-50 rounded">Total Sales<br/>৳0</div>
        <div className="p-4 bg-gray-50 rounded">Total Orders<br/>0</div>
        <div className="p-4 bg-gray-50 rounded">Total Users<br/>0</div>
        <div className="p-4 bg-gray-50 rounded">Monthly Revenue<br/>৳0</div>
      </div>
    </div>
  )
}
