import React, { useState } from 'react'
import API from '../../services/api'

export default function BookForm({ onSaved }){
  const [title,setTitle]=useState('')
  const [authors,setAuthors]=useState('')
  const [price,setPrice]=useState(0)
  const [stock,setStock]=useState(0)
  const [description,setDescription]=useState('')
  const [files,setFiles]=useState(null)

  const submit = async e => {
    e.preventDefault();
    try{
      const fd = new FormData();
      fd.append('title', title);
      fd.append('authors', JSON.stringify(authors.split(',').map(s=>s.trim())));
      fd.append('price', price);
      fd.append('stock', stock);
      fd.append('description', description);
      if (files) for (let i=0;i<files.length;i++) fd.append('images', files[i]);
      await API.post('/books', fd, { headers: { 'Content-Type': 'multipart/form-data' } });
      setTitle(''); setAuthors(''); setPrice(0); setStock(0); setDescription(''); setFiles(null);
      if (onSaved) onSaved();
      alert('Saved');
    }catch(err){ console.error(err); alert('Save failed') }
  }

  return (
    <form onSubmit={submit} className="bg-white p-4 rounded shadow">
      <h3 className="font-semibold mb-3">Add Book</h3>
      <input value={title} onChange={e=>setTitle(e.target.value)} placeholder="Title" className="w-full p-2 mb-2 border rounded" />
      <input value={authors} onChange={e=>setAuthors(e.target.value)} placeholder="Authors (comma separated)" className="w-full p-2 mb-2 border rounded" />
      <input value={price} onChange={e=>setPrice(e.target.value)} placeholder="Price" type="number" className="w-full p-2 mb-2 border rounded" />
      <input value={stock} onChange={e=>setStock(e.target.value)} placeholder="Stock" type="number" className="w-full p-2 mb-2 border rounded" />
      <textarea value={description} onChange={e=>setDescription(e.target.value)} placeholder="Description" className="w-full p-2 mb-2 border rounded" />
      <input type="file" multiple accept="image/*" onChange={e=>setFiles(e.target.files)} className="mb-3" />
      <button className="w-full bg-indigo-600 text-white p-2 rounded">Save</button>
    </form>
  )
}
