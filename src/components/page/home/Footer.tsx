import React, { useState } from 'react'
import logo from '../../../../public/logo.png.webp'

const Footer = () => {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter subscription logic here
    console.log('Subscribed with email:', email)
    setEmail('')
  }

  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <div className="flex items-center mb-4">
              <img src={logo} alt="Concinnity Logo" width={180}  />
              
            </div>
            <p className="mb-4 text-sm">
              Our digital marketing agency can provide you with: a solid team that works on your
              campaigns, expertise that helps your brand move forward in the digital landscape, and
              results that define your success.
            </p>
            <form onSubmit={handleSubmit} className="flex">
              <input
                type="email"
                placeholder="Subscribe to our Newsletter"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white text-black px-4 py-2 rounded-l-full w-full"
                required
              />
              <button type="submit" className="bg-orange-500 text-white px-4 py-2 rounded-r-full">
                Subscribe
              </button>
            </form>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Useful Links</h3>
            <ul className="space-y-2 text-xs font-semibold uppercase">
              <li><a href="/" className="hover:text-orange-500">ABOUT</a></li>
              <li><a href="/" className="hover:text-orange-500">BLOG</a></li>
              <li><a href="/" className="hover:text-orange-500">CONTACT</a></li>
              <li><a href="/" className="hover:text-orange-500">TOOLS</a></li>
              <li><a href="/" className="hover:text-orange-500">PRIVACY POLICY</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-xs font-semibold uppercase">
              <li><a href="/" className="hover:text-orange-500">SEO AUDIT</a></li>
              <li><a href="/" className="hover:text-orange-500">ECOMMERCE SEO</a></li>
              <li><a href="/" className="hover:text-orange-500">INTERNATIONAL SEO</a></li>
              <li><a href="/" className="hover:text-orange-500">DATA ANALYSIS</a></li>
              <li><a href="/" className="hover:text-orange-500">DATA ARCHITECTURE</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">&copy; Copyright 2024 Concinnity Limited.</p>
          <div className="mt-4 md:mt-0 bg-white text-black px-4 py-2 rounded-full flex items-center">
            <span className="text-green-500 font-bold mr-2">79</span>
            <span className="text-xs">
              concinnitylimited.com<br />
              is certified by verifiedreviews.org
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer