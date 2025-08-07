import React from 'react';

const NewsLetter = () => {
  return (
    <div className="w-[95%] max-w-4xl mx-auto my-12 px-4 sm:px-6 py-10 bg-gradient-to-r from-white to-gray-100 rounded-xl shadow-2xl text-center">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-700">
        Get Exclusive Offers On Your Email
      </h1>
      <p className="text-sm sm:text-base text-gray-600 mt-4 mb-6">
        Subscribe to our newsletter and stay updated on the latest deals and collections.
      </p>

      <div className="flex flex-col sm:flex-row items-center gap-4 w-full">
        <input
          type="email"
          placeholder="Enter your email"
          className="flex-1 w-full px-4 py-3 text-base text-gray-700 border border-gray-300 rounded-full outline-none"
        />
        <button className="w-full sm:w-auto px-6 py-3 bg-green-500 text-white font-bold rounded-full hover:bg-green-600 transition">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default NewsLetter;
