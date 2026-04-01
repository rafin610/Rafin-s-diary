import React, { useState } from 'react'
import API from '../services/api'
import { useNavigate } from 'react-router-dom'

export default function Register(){
  const [name,setName]=useState('')
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const nav = useNavigate()
  const submit = async e => { e.preventDefault(); try{ const r = await API.post('/auth/register',{ name, email, password }); localStorage.setItem('token', r.data.token); nav('/'); }catch(err){ alert('Register failed') } }
  return (
    <form onSubmit={submit} className="max-w-md mx-auto bg-white p-6 rounded shadow">
      <h2 className="text-xl font-semibold mb-4">Register</h2>
      <input value={name} onChange={e=>setName(e.target.value)} className="w-full p-2 mb-3 border rounded" placeholder="Full name" />
      <input value={email} onChange={e=>setEmail(e.target.value)} className="w-full p-2 mb-3 border rounded" placeholder="Email" />
      <input type="password" value={password} onChange={e=>setPassword(e.target.value)} className="w-full p-2 mb-3 border rounded" placeholder="Password" />
      <button className="w-full bg-indigo-600 text-white p-2 rounded">Create account</button>
    </form>
  )
}
