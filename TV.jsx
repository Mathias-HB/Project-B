import React from 'react'

const schedule = [
  {id:1, match:'FC København vs Brøndby', time:'18:00', channel:'TV3 Sport'},
  {id:2, match:'Manchester United vs Liverpool', time:'20:30', channel:'Viaplay'},
  {id:3, match:'Real Madrid vs Barcelona', time:'21:00', channel:'TV2 Sport'},
]

export default function TV(){
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">TV</h1>
      <p className="text-gray-600 mb-6">Dagens vigtigste kampe og hvor du kan se dem.</p>

      <div className="space-y-4">
        {schedule.map(s=> (
          <div key={s.id} className="bg-white p-4 rounded shadow flex justify-between items-center">
            <div>
              <div className="font-semibold">{s.match}</div>
              <div className="text-sm text-gray-500">{s.time} — {s.channel}</div>
            </div>
            <div>
              <a className="px-3 py-1 border rounded" href="#">Se på {s.channel}</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
