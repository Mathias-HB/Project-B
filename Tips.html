import React, {useState} from 'react'

const sampleTips = [
  {id:1, league:'Superligaen', tip:'Over 2.5 mål i Hobro vs AaB', confidence: 'Medium', odds: 1.85},
  {id:2, league:'Premier League', tip:'Manchester City vinder', confidence: 'High', odds: 1.45}
]

const bookmakers = [
  {id:'betano', name:'Betano', env:'VITE_AFF_BETANO'},
  {id:'bet365', name:'Bet365', env:'VITE_AFF_BET365'},
]

function getAffiliateUrl(envKey, fallback){
  return import.meta.env[envKey] || fallback || '#'
}

export default function Tips(){
  const [query, setQuery] = useState('')

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Tips</h1>
      <p className="text-gray-600 mb-6">Analyser fra eksperter og AI. Sammenlign odds fra bookmakere for at finde bedste værdi.</p>

      <div className="mb-4">
        <input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Søg i tips..." className="w-full p-2 border rounded" />
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <h2 className="font-semibold mb-3">Seneste tips</h2>
          {sampleTips.map(t=> (
            <div key={t.id} className="bg-white p-4 rounded shadow mb-4">
              <div className="text-sm text-gray-500">{t.league}</div>
              <div className="font-bold text-lg mt-1">{t.tip}</div>
              <div className="mt-2">Odds (eks): <span className="font-semibold">{t.odds}</span></div>
              <div className="mt-2 text-sm text-gray-600">Confidence: {t.confidence}</div>
              <div className="mt-3 flex gap-2">
                {bookmakers.map(b => (
                  <a key={b.id} href={getAffiliateUrl(b.env, '#')} target="_blank" rel="noopener noreferrer" className="px-3 py-1 bg-gray-100 rounded border">{b.name}</a>
                ))}
              </div>
            </div>
          ))}
        </div>

        <aside>
          <h3 className="font-semibold mb-3">Odds-sammenligning (eksempel)</h3>
          <div className="bg-white p-4 rounded shadow">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left text-gray-500">
                  <th>Bookmaker</th>
                  <th>Odds</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Betano</td>
                  <td>1.88</td>
                  <td><a className="underline" href={getAffiliateUrl('VITE_AFF_BETANO','#')}>Gå til</a></td>
                </tr>
                <tr>
                  <td>Bet365</td>
                  <td>1.85</td>
                  <td><a className="underline" href={getAffiliateUrl('VITE_AFF_BET365','#')}>Gå til</a></td>
                </tr>
              </tbody>
            </table>
            <p className="text-xs text-gray-500 mt-3">Bemærk: dette er eksempeldata. Kobl en odds-API for live-odds.</p>
          </div>
        </aside>
      </div>
    </div>
  )
}
