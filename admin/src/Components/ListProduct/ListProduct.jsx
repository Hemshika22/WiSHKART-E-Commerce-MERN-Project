import React, { useEffect, useState } from 'react';
import cross_icon from '../../assets/cross_icon.png';

const ListProduct = () => {
  const [allProducts, setAllProducts] = useState([]);

  const fetchInfo = async () => {
    await fetch('http://localhost:4000/allproducts')
      .then((res) => res.json())
      .then((data) => {
        setAllProducts(data);
      });
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  const remove_product = async (id) => {
    await fetch('http://localhost:4000/removeproduct', {
        method: "POST",
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({id: id}),
    });

    await fetchInfo();
  };

  return (
    <div className="min-h-screen p-4 bg-gray-100">
      <h1 className="text-2xl md:text-3xl font-bold mb-6 text-center text-gray-800">All Products</h1>

      <div className="hidden md:grid grid-cols-6 gap-4 font-semibold text-gray-700 bg-white p-3 rounded shadow">
        <p>Image</p>
        <p>Name</p>
        <p>Old Price</p>
        <p>New Price</p>
        <p>Category</p>
        <p>Action</p>
      </div>

      <div className="mt-4 space-y-4">
        {allProducts.map((product, index) => { return <><div key={index} className="grid md:grid-cols-6 grid-cols-1 gap-4 items-center bg-white p-4 rounded shadow-md">
            <img src={product.image} alt={product.name} className="w-24 h-24 object-cover rounded" />
            <p className="font-medium">{product.name}</p>
            <p className="text-gray-600">${product.old_price}</p>
            <p className="text-green-600">${product.new_price}</p>
            <p className="capitalize">{product.category}</p>
            <button className="flex items-center space-x-2 text-red-600 hover:text-red-800 transition">
              <img onClick={() => {remove_product(product.id)}} src={cross_icon} alt="Remove" className="w-5 h-5" />
              <span>Remove</span>
            </button>
          </div>
          <hr />
          </>
        })}
      </div>
    </div>
  );
};

export default ListProduct;
