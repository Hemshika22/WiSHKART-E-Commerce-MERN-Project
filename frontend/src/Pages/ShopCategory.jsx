import React from 'react';
import dropdown_img from '../Components/Assets/dropdown_img.png';
import Item from '../Components/Item/Item.jsx';
import all_products from '../Components/Assets/all_products.js';

const ShopCategory = (props) => {
  return (
    <div className="w-full flex flex-col items-center">
      {/* Banner Image */}
      <img
        className="w-full max-h-[60vh] sm:max-h-[80vh] object-cover"
        src={props.banner}
        alt="Category Banner"
      />

      {/* Filter Section */}
      <div className="flex flex-col md:flex-row justify-between items-center w-[90%] mt-6 mb-8 gap-4">
        <p className="text-sm sm:text-base">
          <span className="font-bold">Showing 1–12</span> out of 36 products
        </p>
        <div className="px-3 py-2 border border-gray-300 rounded-md flex items-center gap-2 cursor-pointer text-sm sm:text-base">
          Sort by
          <img className="w-4 h-4 sm:w-5 sm:h-5" src={dropdown_img} alt="Sort Icon" />
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-6 w-[90%]">
        {all_products.map((item) => {
          if (props.category === item.category) {
            return (
              <Item
                key={item.id}
                id={item.id}
                name={item.name}
                image={item.image}
                old_price={item.old_price}
                new_price={item.new_price}
              />
            );
          } else {
            return null;
          }
        })}
      </div>

      {/* Explore More Button */}
      <div className="flex justify-center items-center w-40 h-10 rounded-full font-bold mt-10 mb-10 bg-amber-400 text-white cursor-pointer border-2 border-gray-500 hover:bg-gray-200 hover:text-amber-500 transition-all duration-300">
        Explore More
      </div>
    </div>
  );
};

export default ShopCategory;
