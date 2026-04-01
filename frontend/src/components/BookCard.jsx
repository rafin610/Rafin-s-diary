import React from 'react'
import { Link } from 'react-router-dom'

export default function BookCard({book}){
  return (
    <div className="bg-white rounded shadow p-4">
      <Link to={`/books/${book._id}`}>
        <img src={book.images?.[0] || '/placeholder.png'} alt={book.title} className="h-48 w-full object-cover mb-3" />
        <h3 className="font-semibold">{book.title}</h3>
        <p className="text-sm text-gray-500">{book.authors?.join(', ')}</p>
        <div className="mt-2 font-bold">৳{book.price}</div>
      </Link>
    </div>
  )
}
