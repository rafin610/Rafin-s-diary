import React, { useEffect, useState } from 'react'
import API from '../../services/api'
import BookForm from '../../components/admin/BookForm'

export default function AdminBooks(){
  const [books, setBooks] = useState([])
  const fetch = ()=> API.get('/books').then(r=>setBooks(r.data.data || r.data)).catch(()=>{})
  useEffect(()=>{ fetch() },[])
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Manage Books</h2>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-1">
          <BookForm onSaved={fetch} />
        </div>
        <div className="md:col-span-2">
          <div className="space-y-4">
            {books.map(b=> (
              <div key={b._id} className="p-4 bg-white rounded shadow flex items-center">
                <img src={b.images?.[0] || '/placeholder.png'} alt="" className="w-20 h-28 object-cover mr-4" />
                <div>
                  <div className="font-semibold">{b.title}</div>
                  <div className="text-sm text-gray-500">৳{b.price} · Stock: {b.stock}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
