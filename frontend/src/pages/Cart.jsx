import React, { useEffect, useState } from 'react'
import { getCart, removeItem, clearCart } from '../services/cart'
import API from '../services/api'

export default function Cart(){
  const [items,setItems] = useState([])
  useEffect(()=> setItems(getCart()), [])
  const total = items.reduce((s,i)=> s + (i.price || 0) * (i.qty||1), 0)
  const handleCheckout = async ()=>{
    try{
      const res = await API.post('/payments/checkout',{ items });
      if (res.data?.url) window.location.href = res.data.url;
    }catch(err){ alert('Checkout failed') }
  }
  return (
    <div className="max-w-3xl mx-auto bg-white p-6 rounded shadow">
      <h2 className="text-xl font-semibold mb-4">Your cart</h2>
      {items.length===0 && <div>Your cart is empty.</div>}
      <div className="space-y-3">
        {items.map(it=> (
          <div key={it.book} className="flex items-center justify-between">
            <div>{it.book} × {it.qty}</div>
            <div className="space-x-2">
              <button onClick={()=>{ removeItem(it.book); setItems(getCart()); }} className="text-red-600">Remove</button>
            </div>
          </div>
        ))}
      </div>
      {items.length>0 && (
        <div className="mt-4">
          <div className="font-bold">Total: ৳{total}</div>
          <div className="mt-3 flex space-x-2">
            <button onClick={handleCheckout} className="bg-indigo-600 text-white px-4 py-2 rounded">Checkout</button>
            <button onClick={()=>{ clearCart(); setItems([]); }} className="px-4 py-2 border rounded">Clear</button>
          </div>
        </div>
      )}
    </div>
  )
}
