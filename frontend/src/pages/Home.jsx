import React, { useEffect, useState } from 'react'
import API from '../services/api'
import BookCard from '../components/BookCard'

export default function Home(){
  const [books, setBooks] = useState([])
  useEffect(()=>{ API.get('/books?limit=8').then(r=>setBooks(r.data.data || r.data)).catch(()=>{}) },[])
  return (
    <div>
      <section className="mb-8">
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg p-8">
          <h1 className="text-3xl font-bold">Welcome to BookBazaar</h1>
          <p className="mt-2">Bangladesh's premium online bookstore — discover, review and buy books.</p>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-4">Featured books</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {books.map(b => <BookCard key={b._id} book={b} />)}
        </div>
      </section>
    </div>
  )
}
