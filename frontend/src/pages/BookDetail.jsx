import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import API from '../services/api'
import Cart from '../services/cart'

export default function BookDetail(){
  const { id } = useParams();
  const [book,setBook] = useState(null)
  useEffect(()=>{ if (!id) return; API.get(`/books/${id}`).then(r=>setBook(r.data)).catch(()=>{}) },[id])
  if (!book) return <div>Loading...</div>
  return (
    <div className="grid md:grid-cols-3 gap-6">
      <div className="md:col-span-1">
        <img src={book.images?.[0] || '/placeholder.png'} alt={book.title} className="w-full h-auto rounded" />
      </div>
      <div className="md:col-span-2">
        <h1 className="text-2xl font-bold">{book.title}</h1>
        <p className="text-gray-600">by {book.authors?.join(', ')}</p>
        <div className="mt-4">{book.description}</div>
        <div className="mt-4 text-2xl font-bold">৳{book.price}</div>
        <div className="mt-4">
          <button onClick={() => { Cart.addToCart({ book: book._id, qty: 1 }); alert('Added to cart'); }} className="bg-indigo-600 text-white px-4 py-2 rounded">Add to cart</button>
        </div>
      </div>
    </div>
  )
}
