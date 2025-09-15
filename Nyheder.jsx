import React from 'react'

const sampleArticles = [
  {id:1, league:'Superligaen', title:'FC København sikrer vigtig sejr', excerpt:'Sen scoring sikrer tre point mod rivalen.', time:'2025-09-14'},
  {id:2, league:'Premier League', title:'Manchester United vinder stort', excerpt:'Klar sejr i en målfest.', time:'2025-09-13'},
]

export default function Nyheder(){
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Nyheder</h1>
      <p className="text-gray-600 mb-6">Seneste nyt om fodbold i Danmark og de største ligaer.</p>

      <div className="grid md:grid-cols-2 gap-6">
        {sampleArticles.map(a=> (
          <article key={a.id} className="bg-white p-4 rounded shadow">
            <div className="text-sm text-gray-500">{a.league} — {a.time}</div>
            <h2 className="text-xl font-semibold mt-2">{a.title}</h2>
            <p className="mt-2 text-gray-700">{a.excerpt}</p>
            <div className="mt-4 flex gap-2">
              <button className="px-3 py-1 bg-blue-600 text-white rounded">Læs mere</button>
              <button className="px-3 py-1 border rounded">Del</button>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
