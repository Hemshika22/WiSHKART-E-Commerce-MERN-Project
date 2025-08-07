import React, { useContext } from 'react'
import star_icon from '../Assets/star_icon.png'
import dull_star_icon from '../Assets/dull_star_icon.png'
import { ShopContext } from '../../Context/ShopContext';

const ProductDisplay = (props) => {
  const { product } = props;

  const { addToCart } = useContext(ShopContext);

  if (!product) {
    return <div className="text-center mt-10 text-red-600 font-bold">Product not found.</div>;
  }

  return (
    <div className="productdisplay flex flex-col lg:flex-row gap-8 px-6 md:px-10 lg:px-20 py-10">
      {/* Left Section */}
      <div className="productdisplay-left flex flex-col md:flex-row gap-6">
        {/* Image List */}
        <div className="productdisplay-img-list flex md:flex-col gap-3">
          {[...Array(4)].map((_, i) => (
            <img
              key={i}
              className="h-20 w-16 object-contain border rounded-md"
              src={product.image}
              alt={`Product thumbnail ${i}`}
            />
          ))}
        </div>
        {/* Main Image */}
        <div className="productdisplay-img">
          <img
            className="productdisplay-img-main h-[300px] md:h-[400px] lg:h-[500px] w-full object-contain border rounded-lg"
            src={product.image}
            alt={product.name}
          />
        </div>
      </div>

      {/* Right Section */}
      <div className="productdisplay-right flex flex-col gap-4 w-full lg:w-1/2">
        <h1 className="text-gray-700 text-2xl md:text-3xl font-bold">{product.name}</h1>

        {/* Rating */}
        <div className="flex items-center gap-1 text-gray-500 text-sm">
          {[...Array(4)].map((_, i) => (
            <img key={i} className="h-4 w-4" src={star_icon} alt="Star" />
          ))}
          <img className="h-4 w-4" src={dull_star_icon} alt="Star" />
          <p>(122)</p>
        </div>

        {/* Price */}
        <div className="flex gap-4 text-lg">
          <div className="line-through text-gray-500">${product.old_price}</div>
          <div className="text-red-600 font-bold">${product.new_price}</div>
        </div>

        {/* Description */}
        <p className="text-gray-600 text-sm md:text-base">{product.description}</p>

        {/* Size Selector */}
        <div className="flex flex-col gap-2 mt-2">
          <h2 className="text-gray-700 font-semibold">Select Size</h2>
          <div className="flex gap-2 flex-wrap">
            {['S', 'M', 'L', 'XL', 'XXL'].map((size) => (
              <div
                key={size}
                className="px-4 py-2 bg-gray-100 border border-gray-300 rounded-md cursor-pointer hover:bg-gray-200"
              >
                {size}
              </div>
            ))}
          </div>
        </div>

        {/* Add to Cart Button */}
        <button
          onClick={() => addToCart(product.id)}
          className="mt-4 px-4 py-2 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-md"
        >
          ADD TO CART
        </button>

        {/* Categories */}
        <p className="mt-2 text-sm text-gray-600">
          <span className="font-medium text-gray-700">Category:</span> Women, T-shirts, Crop Top
        </p>
        <p className="text-sm text-gray-600">
          <span className="font-medium text-gray-700">Style:</span> Modern, Casual
        </p>
      </div>
    </div>
  );
};

export default ProductDisplay;
