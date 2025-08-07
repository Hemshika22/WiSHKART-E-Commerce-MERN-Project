import React from 'react'
import navlogo from '../../assets/logo.jpeg'
import navprofile from '../../assets/navprofile.svg'

const Navbar = () => {
  return (
    <div className="flex flex-wrap items-center justify-between px-4 py-3 bg-white shadow-md sm:px-6 md:px-8">
      {/* Logo and Titles */}
      <div className="flex items-center gap-3">
        <img
          src={navlogo}
          alt="WishKart Logo"
          className="h-10 w-10 sm:h-12 sm:w-12 rounded-full object-cover"
        />
        <div className="flex flex-col">
          <h1 className="text-lg sm:text-xl font-bold text-gray-800">WiSHKART</h1>
          <p className="text-sm sm:text-base text-gray-500 -mt-1">Admin Panel</p>
        </div>
      </div>

      {/* Profile Icon - right side */}
      <div className="mt-3 sm:mt-0">
        <img
          src={navprofile}
          alt="Profile"
          className="h-9 w-9 sm:h-10 sm:w-10 rounded-full cursor-pointer hover:ring-2 hover:ring-blue-500 transition-all duration-200"
        />
      </div>
    </div>
  )
}

export default Navbar
