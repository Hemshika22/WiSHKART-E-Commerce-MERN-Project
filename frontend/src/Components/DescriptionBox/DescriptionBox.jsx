import React from 'react';

const DescriptionBox = () => {
  return (
    <div className='descriptionbox mt-10 mb-7 px-4 sm:px-6 md:px-10 lg:px-20 xl:px-40'>
      {/* Navigation Tabs */}
      <div className='descriptionbox-navigator flex flex-wrap gap-2 mb-4'>
        <div className='descriptionbox-nav-box flex-1 sm:flex-none sm:w-auto px-4 py-2 font-semibold border border-gray-300 text-center cursor-pointer'>
          Description
        </div>
        <div className='descriptionbox-nav-box fade flex-1 sm:flex-none sm:w-auto px-4 py-2 font-semibold border border-gray-300 text-gray-400 bg-gray-100 text-center cursor-pointer'>
          Reviews (122)
        </div>
      </div>

      {/* Description Content */}
      <div className='descriptionbox-description flex flex-col gap-4 border border-gray-300 p-4 sm:p-6 md:p-8 lg:p-10'>
        <p className='text-sm sm:text-base'>
          Welcome to WishKart, your one-stop destination for the latest trends in fashion and lifestyle.
          From stylish men’s and women’s clothing to adorable kids' wear, we bring you handpicked collections
          that blend comfort, quality, and style. Whether you're updating your wardrobe or shopping for someone special,
          explore our wide range of products crafted to suit every mood and moment. With easy navigation, secure checkout,
          and fast delivery, shopping online has never been this effortless or enjoyable. Step into a seamless shopping experience —
          because at WishKart, style meets simplicity.
        </p>
        <p className='text-sm sm:text-base'>
          E-commerce websites typically display products or services that can be purchased online,
          but WishKart goes beyond that by offering a unique and personalized shopping experience.
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
