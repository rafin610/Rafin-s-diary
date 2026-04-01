import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import BookList from './pages/BookList'
import BookDetail from './pages/BookDetail'
import Login from './pages/Login'
import Register from './pages/Register'
import Cart from './pages/Cart'
import AdminDashboard from './pages/admin/Dashboard'
import AdminBooks from './pages/admin/Books'
import Header from './components/Header'

export default function App(){
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-6">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/books" element={<BookList/>} />
          <Route path="/books/:id" element={<BookDetail/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/admin" element={<AdminDashboard/>} />
          <Route path="/admin/books" element={<AdminBooks/>} />
        </Routes>
      </main>
    </div>
  )
}
