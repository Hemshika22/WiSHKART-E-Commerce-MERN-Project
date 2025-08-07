import React from 'react';
import bgImage from '../Assets/bg-image.jpeg';
import hero3 from '../Assets/hero3.png';

const Hero = () => {
  return (
    <div
      className="w-full bg-cover bg-center flex flex-col-reverse md:flex-row items-center justify-between px-6 sm:px-10 md:px-16 lg:px-24 py-10 lg:py-20 gap-8"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Left Content */}
      <div className="flex-1 flex flex-col justify-center gap-4 text-white text-center md:text-left">
        <h2 className="text-sm sm:text-base md:text-lg font-semibold text-gray-600 tracking-widest">
          Exclusive Styles Just for You
        </h2>

        <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-black">
          Elevate Your Wardrobe
        </p>

        <p className="uppercase text-sm sm:text-base tracking-wide text-gray-200">
          Trendy. Comfortable. Affordable.
        </p>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-gray-700">
          Shop the Latest Fashion Picks
        </h1>

        <p className="text-sm sm:text-base max-w-xl text-gray-800 mx-auto md:mx-0">
          Discover the freshest arrivals tailored to your unique style.
        </p>

        <div className="mt-4">
          <button className="px-6 py-3 bg-emerald-500 hover:bg-emerald-600 rounded-full text-white text-sm sm:text-base font-medium shadow-lg transition duration-300">
            Explore Now
          </button>
        </div>
      </div>

      {/* Hero Image - hidden below 640px, adjusted sizing */}
      <div className="flex-1 flex items-center justify-center sm:flex">
        <img
          src={hero3}
          alt="hero"
          className="w-[280px] sm:w-[360px] md:w-[420px] lg:w-[500px] object-contain rounded-lg drop-shadow-2xl"
        />
      </div>
    </div>
  );
};

export default Hero;
