import React, { useContext } from 'react';
import { ShopContext } from '../../Context/ShopContext';
import remove_icon from '../Assets/remove_icon.png';

const CartItems = () => {
  const { getTotalCartAmount, all_products, cartItems, addToCart, removeFromCart } = useContext(ShopContext);

  return (
    <div className="w-full px-4 sm:px-6 py-8">
      <h2 className="text-center text-2xl font-bold text-gray-800 mb-8">Your Cart</h2>

      <div className="w-full overflow-x-auto">
        <div className="hidden sm:grid grid-cols-6 gap-4 px-4 py-2 font-semibold bg-gray-100 text-gray-700 border-b border-gray-300">
          <p>Product</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>

        {all_products.map((e) => {
          if (cartItems[e.id] > 0) {
            return (
              <div key={e.id} className="border-b border-gray-200 px-4 py-4 sm:grid sm:grid-cols-6 sm:gap-4 flex flex-col sm:flex-row items-center">
                <img src={e.image} alt={e.name} className="w-16 h-16 object-contain mb-2 sm:mb-0" />
                <p className="text-gray-700 sm:col-span-1">{e.name}</p>
                <p className="text-gray-600">${e.new_price}</p>
                <div className="flex items-center gap-2">
                  <span className="bg-gray-200 px-3 py-1 rounded text-sm font-medium">
                    {cartItems[e.id]}
                  </span>
                </div>
                <p className="text-gray-700 font-medium">
                  ${e.new_price * cartItems[e.id]}
                </p>
                <img
                  src={remove_icon}
                  onClick={() => removeFromCart(e.id)}
                  alt="remove"
                  className="w-5 h-5 cursor-pointer"
                />
              </div>
            );
          }
          return null;
        })}
      </div>

      {/* Cart Summary & Discount Code */}
      <div className="w-full mt-10 flex flex-col lg:flex-row gap-10">
        {/* Cart Totals Section */}
        <div className="w-full lg:w-1/2 bg-white shadow-md rounded-lg p-6">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Cart Totals</h3>
          <div className="flex flex-col gap-4">
            <div className="flex justify-between text-gray-700">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr className="border-gray-300" />
            <div className="flex justify-between text-gray-700">
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr className="border-gray-300" />
            <div className="flex justify-between font-bold text-lg text-gray-800">
              <h3>Total</h3>
              <h3>${getTotalCartAmount()}</h3>
            </div>
          </div>

          <button className="mt-6 w-full bg-green-600 text-white py-3 rounded-md text-lg font-semibold hover:bg-green-700 transition duration-300">
            PROCEED TO CHECKOUT
          </button>
        </div>

        {/* Discount Code Section */}
        <div className="w-full lg:w-1/2 bg-white shadow-md rounded-lg p-6">
          <p className="mb-4 text-gray-700">
            If you have a discount code, please enter it below.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <input
              type="text"
              placeholder="Enter your discount code"
              className="w-full border border-gray-300 rounded-md p-3 text-gray-700 text-base focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <button className="w-full sm:w-[45%] bg-green-500 text-white text-lg font-semibold py-3 px-4 rounded-full hover:bg-green-600 transition duration-300">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
