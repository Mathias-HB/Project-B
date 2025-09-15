import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Nyheder from './pages/Nyheder'
import TV from './pages/TV'
import Tips from './pages/Tips'
import Forum from './pages/Forum'
import Bookmakere from './pages/Bookmakere'
import Nyhedsbrev from './pages/Nyhedsbrev'
import Login from './pages/Login'

export default function App(){
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-6">
        <Routes>
          <Route path="/" element={<Nyheder/>} />
          <Route path="/tv" element={<TV/>} />
          <Route path="/tips" element={<Tips/>} />
          <Route path="/forum" element={<Forum/>} />
          <Route path="/bookmakere" element={<Bookmakere/>} />
          <Route path="/nyhedsbrev" element={<Nyhedsbrev/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
