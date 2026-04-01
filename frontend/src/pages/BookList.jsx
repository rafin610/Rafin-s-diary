import React, { useEffect, useState } from 'react'
import API from '../services/api'
import BookCard from '../components/BookCard'

export default function BookList(){
  const [books,setBooks] = useState([])
  const [q, setQ] = useState('')
  useEffect(()=>{ let t; const fetchBooks = ()=> API.get('/books').then(r=>setBooks(r.data.data || r.data)); if (q){ clearTimeout(t); t=setTimeout(fetchBooks,300);} else fetchBooks(); return ()=>clearTimeout(t)},[q])
  return (
    <div>
      <div className="mb-4">
        <input value={q} onChange={e=>setQ(e.target.value)} placeholder="Search books..." className="w-full p-2 border rounded" />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {books.map(b=> <BookCard key={b._id} book={b} />)}
      </div>
    </div>
  )
}
