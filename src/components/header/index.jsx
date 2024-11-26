

import React from 'react'

function Header() {
  return (
    
    <header className="sticky top-0 z-50 bg-white shadow-md">
  <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
    <div className="flex items-center justify-between h-16">
      {/* Logo Section */}
      <div className="flex-shrink-0">
        <a href="/" className="flex items-center">
          <img
            src="/cart-logo.png"
            alt="Logo"
            className="w-20 h-20"
          />
          <span className="ml-2 text-2xl font-bold text-gray-800">
            ShopCart
          </span>
        </a>
      </div>

      {/* Navigation Section */}
      <nav className="hidden space-x-8 md:flex">
        <a
          href="/products"
          className="font-medium text-gray-700 transition-colors hover:text-blue-500"
        >
          Products
        </a>
        <a
          href="/cart"
          className="font-medium text-gray-700 transition-colors hover:text-blue-500"
        >
          Cart
        </a>
      </nav>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button
          type="button"
          className="inline-flex items-center justify-center p-2 text-gray-500 rounded-md hover:text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
        >
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>
</header>

  )
}

export default Header
