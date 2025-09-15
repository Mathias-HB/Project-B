import React from 'react'
export default function Footer(){
  return (
    <footer className="bg-white border-t mt-8">
      <div className="container mx-auto px-4 py-6 text-sm text-gray-600">
        <div className="flex flex-col sm:flex-row justify-between">
          <div>© {new Date().getFullYear()} Project B — Affiliate site. Spil ansvarligt.</div>
          <div className="mt-2 sm:mt-0">Kontakt: <a href="mailto:kontakt@projectb.example" className="underline">kontakt@projectb.example</a></div>
        </div>
      </div>
    </footer>
  )
}
