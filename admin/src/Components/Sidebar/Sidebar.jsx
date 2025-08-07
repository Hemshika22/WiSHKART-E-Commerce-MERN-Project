import React from 'react'
import { Link } from 'react-router-dom'
import add_product from '../../assets/add-product.png'
import product_list from '../../assets/pick-list.png'

const Sidebar = () => {
  return (
    <div className="w-full sm:w-60 h-auto sm:h-screen bg-[#f6f6f6] shadow-md p-4 flex sm:flex-col flex-row sm:items-start items-center sm:gap-6 gap-4 sm:pt-10 sticky top-0 z-10">
      
      {/* Add Product */}
      <Link
        to="/addproduct"
        className="w-full sm:w-auto"
      >
        <div className="flex items-center sm:justify-start justify-center px-6 py-4 bg-white rounded-xl hover:bg-blue-100 transition duration-200 gap-3">
          <img src={add_product} alt="Add Product" className="w-8 h-8" />
          <p className="text-sm font-semibold text-gray-700">Add Product</p>
        </div>
      </Link>

      {/* Product List */}
      <Link
        to="/listproduct"
        className="w-full sm:w-auto"
      >
        <div className="flex items-center sm:justify-start justify-center px-6 py-4 bg-white rounded-xl hover:bg-blue-100 transition duration-200 gap-3">
          <img src={product_list} alt="Product List" className="w-8 h-8" />
          <p className="text-sm font-semibold text-gray-700">Product List</p>
        </div>
      </Link>
    </div>
  )
}

export default Sidebar
