import React from 'react'

const bookies = [
  {id:'betano', name:'Betano', bonus:'200% op til 1000kr', logo:'https://via.placeholder.com/120x40?text=Betano', env:'VITE_AFF_BETANO'},
  {id:'bet365', name:'Bet365', bonus:'100% op til 500kr', logo:'https://via.placeholder.com/120x40?text=Bet365', env:'VITE_AFF_BET365'},
  {id:'mrgreen', name:'MrGreen', bonus:'Gratis spins', logo:'https://via.placeholder.com/120x40?text=MrGreen', env:'VITE_AFF_MRGREEN'},
]

function getAffiliate(envKey){ return import.meta.env[envKey] || '#' }

export default function Bookmakere(){
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Bookmakere</h1>
      <p className="text-gray-600 mb-6">Sammenlign bookmakere og find bedste velkomstbonus.</p>

      <div className="grid md:grid-cols-3 gap-6">
        {bookies.map(b=> (
          <div key={b.id} className="bg-white p-4 rounded shadow flex flex-col">
            <img src={b.logo} alt={b.name} className="mb-3 h-10 object-contain" />
            <div className="font-semibold">{b.name}</div>
            <div className="text-sm text-gray-600">{b.bonus}</div>
            <div className="mt-4">
              <a href={getAffiliate(b.env)} target="_blank" rel="noopener noreferrer" className="block text-center px-3 py-2 bg-green-600 text-white rounded">Tilmeld / få bonus</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
