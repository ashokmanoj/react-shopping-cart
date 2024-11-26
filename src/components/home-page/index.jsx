import React from 'react'

function HomePage() {
  return (
    <div>
      <section
  className="relative h-screen bg-center bg-no-repeat bg-cover"
  style={{ backgroundImage: "url('/shop-cart.jpeg')" }}
>
  <div className="absolute inset-0 bg-black bg-opacity-50"></div>
  <div className="relative flex flex-col items-center justify-center h-full px-4 text-center sm:px-6 lg:px-8">
    <h2 className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
      Welcome to the Shopping Cart
    </h2>
    <p className="mt-4 text-lg text-gray-200 sm:mt-6 sm:text-xl lg:text-2xl">
      Checkout our latest products and get discounts on them.
    </p>
    <button className="px-6 py-3 mt-6 text-lg font-bold text-white bg-blue-500 rounded hover:bg-blue-700" style={{ transition: "background-color 0.3s ease" }} onClick={()=> window.location.href="/products"}>
     Start Shopping
    </button>
  </div>
</section>
    </div>
  )
}

export default HomePage
