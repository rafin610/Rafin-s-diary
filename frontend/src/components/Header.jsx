import React from 'react'
import { Link } from 'react-router-dom'

export default function Header(){
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="font-bold text-xl">BookBazaar</Link>
        <nav className="space-x-4">
          <Link to="/books" className="text-gray-700">Books</Link>
          <Link to="/cart" className="text-gray-700">Cart</Link>
          <Link to="/login" className="text-gray-700">Login</Link>
          <Link to="/admin" className="text-gray-700">Admin</Link>
        </nav>
      </div>
    </header>
  )
}
