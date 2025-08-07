import React from 'react';
import footer_logo from '../Assets/logo.jpeg';
import facebook_icon from '../Assets/facebook_icon.png';
import instagram_icon from '../Assets/instagram_icon.png';

const Footer = () => {
  return (
    <div className="bg-gray-100 w-full px-6 sm:px-10 py-10 text-gray-700">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">

        {/* Logo Section */}
        <div className="flex items-center gap-4">
          <img src={footer_logo} alt="Logo" className="w-12 h-12 object-contain" />
          <p className="text-xl font-bold">WiSHKART</p>
        </div>

        {/* Navigation Links */}
        <ul className="flex flex-wrap justify-center md:justify-start gap-6 text-base font-medium">
          <li className="cursor-pointer hover:text-green-600">Company</li>
          <li className="cursor-pointer hover:text-green-600">Products</li>
          <li className="cursor-pointer hover:text-green-600">Offices</li>
          <li className="cursor-pointer hover:text-green-600">About</li>
          <li className="cursor-pointer hover:text-green-600">Contacts</li>
        </ul>

        {/* Social Icons */}
        <div className="flex gap-4">
          <img src={facebook_icon} alt="Facebook" className="w-8 h-8 cursor-pointer hover:scale-110 transition-transform" />
          <img src={instagram_icon} alt="Instagram" className="w-8 h-8 cursor-pointer hover:scale-110 transition-transform" />
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-300 my-6"></div>

      {/* Copyright */}
      <div className="text-center text-sm text-gray-500">
        © 2025 WiSHKART. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
