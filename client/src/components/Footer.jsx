import React from 'react'
import { Link } from 'react-router-dom'
import { Footer } from 'flowbite-react'

export default function FooterComp() {
  return (
    <Footer container className="border-t-2 border-gray-200 !bg-white py-4 px-8">
      <div className="w-full flex flex-col sm:flex-row justify-between items-center gap-6">
        
        {/* Logo */}
        <Link
          to="/"
          className="whitespace-nowrap text-gray-800 text-base sm:text-lg font-semibold"
        >
          <span className="px-3 py-1.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-md text-white mr-2">
            Uvindu&apos;s
          </span>
          Blog
        </Link>

        {/* Links */}
        <div className="grid grid-cols-2 gap-8 sm:flex sm:gap-10 text-gray-600">
          
          <div className="space-y-1">
            <h2 className="text-sm font-semibold text-gray-900">
              About
            </h2>
            <a
              href="https://www.karalliyaddaone.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm hover:text-indigo-600 transition-colors"
            >
              Portfolio
            </a>
          </div>

          <div className="space-y-1">
            <h2 className="text-sm font-semibold text-gray-900">
              Proof
            </h2>
            <a
              href="https://www.karalliyaddaone.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm hover:text-indigo-600 transition-colors"
            >
              GitHub
            </a>
          </div>

        </div>
      </div>
    </Footer>
  )
}