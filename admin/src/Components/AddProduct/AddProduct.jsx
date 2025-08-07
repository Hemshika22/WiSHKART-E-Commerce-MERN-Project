import React, { useState } from 'react';
import upload_area from '../../assets/upload_area.png';

const AddProduct = () => {
  const [image, setImage] = useState(false);
  const [productDetails, setProductDetails] = useState({
    name:"",
    image:"",
    category:"women",
    old_price:"",
    new_price:""
  });

  const imageHandler = (e) => {
    setImage(e.target.files[0]);
  };

  const changeHandler = (e) => {
    setProductDetails({
        ...productDetails,
        [e.target.name]: e.target.value
    })
  }

  const Add_Product = async () => {
    console.log(productDetails);
    let responseData;
    let product = productDetails;

    let formData = new FormData();
    formData.append('product', image);

    await fetch("http://localhost:4000/upload", {
        method: "POST",
        headers: {
            Accept: 'application/json',
        },
        body: formData,
    }).then((resp) => resp.json()).then((data)=>{responseData = data});


    if(responseData.success) 
    {
        product.image = responseData.image_url;
        console.log(product);
        await fetch("http://localhost:4000/addproduct", {
            method: "POST",
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(product),
        }).then((resp) => resp.json()).then((data)=>{
            data.success?alert("Product Added"):alert("Failed")
        });
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white shadow-lg rounded-xl p-6 md:p-10 w-full max-w-3xl">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Add New Product</h2>

        {/* Product Title */}
        <div className="mb-4">
          <p className="mb-1 font-medium">Product Title</p>
          <input
            value={productDetails.name}
            onChange={changeHandler}
            type="text"
            name="name"
            placeholder="Type Here"
            className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Price & Offer Price */}
        <div className="flex flex-col md:flex-row gap-4 mb-4">
          <div className="w-full">
            <p className="mb-1 font-medium">Price</p>
            <input
              value={productDetails.old_price}
              onChange={changeHandler}
              type="text"
              name="old_price"
              placeholder="Type Here"
              className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div className="w-full">
            <p className="mb-1 font-medium">New Price</p>
            <input
              value={productDetails.new_price}
              onChange={changeHandler}
              type="text"
              name="new_price"
              placeholder="Type Here"
              className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
        </div>

        {/* Category Dropdown */}
        <div className="mb-4">
          <p className="mb-1 font-medium">Product Category</p>
          <select
            value={productDetails.category}
            onChange={changeHandler}
            name="category"
            id="category"
            className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="">Select Category</option>
            <option value="women">Women</option>
            <option value="men">Men</option>
            <option value="kid">Kid</option>
          </select>
        </div>

        {/* Upload Area */}
        <div className="mb-4">
          <label htmlFor="fileinput" className="cursor-pointer block">
            <img
              src={image ? URL.createObjectURL(image) : upload_area}
              alt="Upload"
              className="w-40 h-40 object-cover mx-auto border border-dashed border-gray-400 rounded hover:border-blue-500 transition"
            />
          </label>
          <input onChange={imageHandler} type="file" name="file" id="fileinput" hidden />
        </div>

        {/* Submit Button */}
        <button
          onClick={()=>{Add_Product()}}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded text-lg transition"
        >
          ADD
        </button>
      </div>
    </div>
  );
};

export default AddProduct;
