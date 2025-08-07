import React, { useEffect, useState } from 'react';
import Item from '../Item/Item';

const NewCollections = () => {

  const [new_collections, setNew_Collections] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/newcollection')
      .then((response) => response.json())
      .then((data) => {
        setNew_Collections(data);
      });
  }, []);

  return (
    <div className="w-full px-4 sm:px-6 md:px-10 lg:px-20 py-12 flex flex-col items-center">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 text-center mb-3">
        NEW COLLECTIONS
      </h1>
      <div className="w-20 h-1 bg-green-500 mb-8 rounded-full" />

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full max-w-7xl">
        {new_collections.map((item, i) => (
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

export default NewCollections;
