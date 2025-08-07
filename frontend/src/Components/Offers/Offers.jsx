import React from 'react';
import exclusive_image from '../Assets/exclusive_image.png'; // Ensure the image exists

const Offers = () => {
  return (
    <div className="w-[95%] max-w-7xl mx-auto my-10 px-4 sm:px-6 lg:px-12 py-8 flex flex-col md:flex-row items-center justify-between bg-gradient-to-r from-white to-gray-100 rounded-xl shadow-2xl">
      
      {/* Text Content */}
      <div className="flex-1 mb-6 md:mb-0">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-700 mb-2">
          Exclusive
        </h1>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-700 mb-4">
          Offers for you
        </h1>
        <p className="text-sm sm:text-base text-gray-600 font-medium">
          ONLY BEST SELLER PRODUCTS
        </p>
        <button className="mt-6 px-6 py-3 bg-green-500 text-white font-bold rounded-full shadow-md hover:bg-green-600 transition">
          Check Now
        </button>
      </div>

      {/* Image - hidden on very small screens */}
      <div className="flex-1 hidden md:flex items-center justify-center">
        <img
          src={exclusive_image}
          alt="Exclusive Offer"
          className="w-full max-w-md h-auto object-contain"
        />
      </div>
    </div>
  );
};

export default Offers;

