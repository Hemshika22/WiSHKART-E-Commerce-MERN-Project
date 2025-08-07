import React from 'react';
import { Link } from 'react-router-dom';
import right_arrow from '../Assets/right_arrow.png';

const Breadcrums = ({ product }) => {
  return (
    <div className="breadcrum flex flex-wrap items-center gap-2 text-gray-500 font-semibold mt-10 mb-5 px-4 md:px-20 lg:px-40 text-sm sm:text-base capitalize">
      
      {/* Home */}
      <Link to="/" className="hover:text-black transition">
        Home
      </Link>
      <img className="h-4 w-4" src={right_arrow} alt="arrow" />

      {/* Shop */}
      <Link to="/shop" className="hover:text-black transition">
        Shop
      </Link>

      {/* Category */}
      {product?.category && (
        <>
          <img className="h-4 w-4" src={right_arrow} alt="arrow" />
          <Link
            to={`/shop/${product.category}`}
            className="hover:text-black transition"
          >
            {product.category}
          </Link>
        </>
      )}

      {/* Product Name (not a link) */}
      {product?.name && (
        <>
          <img className="h-4 w-4" src={right_arrow} alt="arrow" />
          <span className="truncate max-w-[150px] sm:max-w-xs md:max-w-sm lg:max-w-md text-black">
            {product.name}
          </span>
        </>
      )}
    </div>
  );
};

export default Breadcrums;
