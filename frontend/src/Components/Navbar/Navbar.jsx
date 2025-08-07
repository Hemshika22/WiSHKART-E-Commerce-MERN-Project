import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';

import logo from '../Assets/logo.jpeg';
import cart_icon from '../Assets/cart_icon.png';
import { FaBars, FaTimes } from 'react-icons/fa'; // icons for hamburger

const Navbar = () => {
  const [menu, setMenu] = useState('shop');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { getTotalCartItems } = useContext(ShopContext);

  const toggleMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  return (
    <div className="w-full bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src={logo} alt="logo" className="h-12 w-12 object-contain" />
          <p className="text-xl sm:text-2xl font-bold text-green-500">WISHKART</p>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 items-center text-gray-600 font-semibold">
          {['shop', 'mens', 'womens', 'kids'].map((item) => (
            <li
              key={item}
              onClick={() => setMenu(item)}
              className="flex flex-col items-center cursor-pointer"
            >
              <Link to={item === 'shop' ? '/' : `/${item}`}>{item.charAt(0).toUpperCase() + item.slice(1)}</Link>
              {menu === item && (
                <hr className="w-[80%] h-1 bg-green-500 border-none rounded-md mt-1" />
              )}
            </li>
          ))}
        </ul>

        {/* Right Section (Login + Cart) */}
        <div className="flex items-center gap-4">
        {localStorage.getItem('auth-token')
        ?<button onClick={() => {localStorage.removeItem('auth-token'); window.location.replace("/");}} className="bg-rose-500 text-white px-3 py-2 rounded-md font-semibold hover:bg-rose-600 text-sm sm:text-base">Logout</button>
        :<Link to="/login">
            <button className="bg-green-500 text-white px-3 py-2 rounded-md font-semibold hover:bg-green-600 text-sm sm:text-base">
              Login
            </button>
          </Link>}
          <Link to="/cart" className="relative">
            <img src={cart_icon} className="h-6 w-6" alt="cart" />
            <div className="absolute -top-2 -right-2 w-5 h-5 flex items-center justify-center bg-green-500 text-white text-xs rounded-full">
              {getTotalCartItems()}
            </div>
          </Link>

          {/* Hamburger Icon */}
          <button className="md:hidden ml-2" onClick={toggleMenu}>
            {mobileMenuOpen ? (
              <FaTimes className="text-xl text-gray-700 cursor-pointer" />
            ) : (
              <FaBars className="text-xl text-gray-700 cursor-pointer" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <ul className="md:hidden flex flex-col items-center gap-6 pb-6 text-gray-700 font-medium bg-white border-t border-gray-200">
          {['shop', 'mens', 'womens', 'kids'].map((item) => (
            <li
              key={item}
              onClick={() => {
                setMenu(item);
                toggleMenu();
              }}
              className="w-full text-center py-2"
            >
              <Link to={item === 'shop' ? '/' : `/${item}`}>{item.charAt(0).toUpperCase() + item.slice(1)}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navbar;
