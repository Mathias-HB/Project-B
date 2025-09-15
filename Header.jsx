import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'

const NavItem = ({to, children})=> (
  <NavLink to={to} className={({isActive}) => isActive ? 'text-blue-600 font-semibold' : 'text-gray-700 hover:text-blue-600'}>{children}</NavLink>
)

export default function Header(){
  const navigate = useNavigate()
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button onClick={() => navigate('/')} className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold">PB</div>
            <div className="hidden sm:block">
              <div className="text-lg font-bold">Project B</div>
              <div className="text-xs text-gray-500">Fodbold & Bookmakere</div>
            </div>
          </button>
        </div>

        <nav className="flex items-center gap-6">
          <NavItem to="/tv">TV</NavItem>
          <NavItem to="/tips">Tips</NavItem>
          <NavItem to="/forum">Forum</NavItem>
          <NavItem to="/bookmakere">Bookmakere</NavItem>
          <NavItem to="/nyhedsbrev">Nyhedsbrev</NavItem>
          <Link to="/login" className="ml-2 inline-block bg-black text-white px-4 py-2 rounded-md">Log ind</Link>
        </nav>
      </div>
    </header>
  )
}
