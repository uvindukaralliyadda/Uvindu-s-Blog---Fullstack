import React, { useState } from 'react'
import {Button, Navbar, TextInput} from 'flowbite-react'
import {Link} from 'react-router-dom'
import {HiOutlineSearch, HiOutlineMoon} from 'react-icons/hi'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Navbar className='border-b-2 border-gray-200 bg-white px-2 py-2.5 dark:bg-gray-900'>
      <div className="flex w-full items-center justify-between">
        {/* Logo - Left side */}
        <Link to="/" className="whitespace-nowrap text-white text-sm sm:text-lg font-semibold dark:text-white">
          <span className='px-2 py-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-sm text-white'>Uvindu's</span>
          Blog
        </Link>

        {/* Desktop Navigation - Center (visible on md and up) */}
        <div className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-gray-700 hover:text-gray-900 dark:text-gray-200 dark:hover:text-white">
            Home
          </Link>
          <Link to="/about" className="text-gray-700 hover:text-gray-900 dark:text-gray-200 dark:hover:text-white">
            About
          </Link>
          <Link to="/projects" className="text-gray-700 hover:text-gray-900 dark:text-gray-200 dark:hover:text-white">
            Projects
          </Link>
        </div>

        {/* Right side items */}
        <div className='flex items-center gap-2'>
          {/* Search form - hidden on mobile */}
          <form className='hidden lg:block'>
            <TextInput
              type='text'
              placeholder='Search...'
              rightIcon={HiOutlineSearch}
            />
          </form>

          {/* Mobile search button */}
          <Button className='w-12 h-10 lg:hidden' color='gray' pill>
            <HiOutlineSearch className="h-5 w-5" />
          </Button>

          {/* Theme toggle button */}
          <Button className='w-12 h-10 hidden sm:inline-flex' color='gray' pill>
            <HiOutlineMoon className="h-5 w-5" />
          </Button>

          {/* Sign In button */}
          <Link to="/sign-in">
            <Button 
              pill
              className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white border-0 hover:from-indigo-600 hover:via-purple-600 hover:to-pink-600" outline={true}  
            >
              Sign In
            </Button>
          </Link>

          {/* Mobile menu toggle button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu (visible only on mobile when open) */}
      {isOpen && (
        <div className="md:hidden mt-4 space-y-2 pb-2">
          <Link 
            to="/" 
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link 
            to="/about" 
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link 
            to="/projects" 
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700"
            onClick={() => setIsOpen(false)}
          >
            Projects
          </Link>
        </div>
      )}
    </Navbar>
  )
}