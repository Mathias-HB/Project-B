import React, {useState} from 'react'

export default function Nyhedsbrev(){
  const [email, setEmail] = useState('')
  const [ok, setOk] = useState(false)

  function signup(e){
    e.preventDefault()
    if(!email.includes('@')) return alert('Indtast en gyldig e-mail')
    // TODO: kald din e-mail service API her
    setOk(true)
  }

  return (
    <div className="max-w-xl">
      <h1 className="text-3xl font-bold mb-4">Nyhedsbrev</h1>
      <p className="text-gray-600 mb-6">Tilmeld dig vores nyhedsbrev og få de bedste tips direkte i din indbakke.</p>

      {ok ? (
        <div className="bg-green-50 p-4 rounded">Tak! Tjek din mail for bekræftelse.</div>
      ) : (
        <form onSubmit={signup} className="bg-white p-4 rounded shadow">
          <label className="block mb-2">E-mail</label>
          <input className="w-full p-2 border rounded" value={email} onChange={e=>setEmail(e.target.value)} />
          <div className="mt-3 flex justify-end">
            <button className="px-4 py-2 bg-blue-600 text-white rounded">Tilmeld</button>
          </div>
        </form>
      )}
    </div>
  )
}
