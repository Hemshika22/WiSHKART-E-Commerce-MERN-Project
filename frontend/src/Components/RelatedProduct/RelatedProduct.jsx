import React from 'react';
import Item from '../Item/Item';
import data_product from '../Assets/data_product';

const RelatedProduct = () => {
  return (
    <div className='relatedproducts flex flex-col items-center gap-4 px-4 py-10'>
      <h1 className='text-2xl sm:text-3xl font-bold text-gray-800 text-center'>Related Products</h1>
      <hr className="w-32 sm:w-52 h-1 bg-green-500 rounded-full" />

      <div className='relatedproducts-item mt-6 flex flex-wrap justify-center gap-4 w-full'>
        {data_product.map((item) => (
          <Item
            key={item.id}
            id={item.id}
            name={item.name}
            image={item.image}
            old_price={item.old_price}
            new_price={item.new_price}
          />
        ))}
      </div>
    </div>
  );
};

export default RelatedProduct;
