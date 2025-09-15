import React, {useEffect, useState} from 'react'

function loadPosts(){
  try{ return JSON.parse(localStorage.getItem('pb_forum')||'[]') } catch(e){ return [] }
}

export default function Forum(){
  const [posts, setPosts] = useState(loadPosts)
  const [text, setText] = useState('')
  const [name, setName] = useState('Gæst')

  useEffect(()=>{ localStorage.setItem('pb_forum', JSON.stringify(posts)) }, [posts])

  function addPost(){
    if(!text.trim()) return
    const p = {id:Date.now(), name: name||'Gæst', text, time: new Date().toISOString()}
    setPosts([p, ...posts])
    setText('')
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Forum</h1>
      <p className="text-gray-600 mb-6">Snak om tips, kampe, odds og resultater. Dette er en simpel klient-side demo.</p>

      <div className="bg-white p-4 rounded shadow mb-6">
        <div className="mb-2"><input placeholder="Dit navn" value={name} onChange={e=>setName(e.target.value)} className="w-full p-2 border rounded"/></div>
        <textarea placeholder="Skriv et indlæg..." value={text} onChange={e=>setText(e.target.value)} className="w-full p-2 border rounded h-24"></textarea>
        <div className="mt-2 flex justify-end">
          <button onClick={addPost} className="px-4 py-2 bg-blue-600 text-white rounded">Post</button>
        </div>
      </div>

      <div className="space-y-4">
        {posts.length===0 && <div className="text-gray-500">Ingen indlæg endnu — vær den første!</div>}
        {posts.map(p=> (
          <div key={p.id} className="bg-white p-3 rounded shadow">
            <div className="flex justify-between">
              <div className="font-semibold">{p.name}</div>
              <div className="text-xs text-gray-500">{new Date(p.time).toLocaleString('da-DK')}</div>
            </div>
            <div className="mt-2">{p.text}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
