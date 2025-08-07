import React from 'react';
import { Link } from 'react-router-dom';

const Item = (props) => {
  return (
    <div className="w-full sm:w-[250px] md:w-[280px] lg:w-[300px] md:max-w-lg hover:scale-105 transition-all duration-300 ease-in-out bg-white rounded-xl shadow-md overflow-hidden m-2">
      <Link to={`/product/${props.id}`} onClick={() => window.scrollTo(0, 0)}>
        <img
          src={props.image}
          alt="Item"
          className="w-full h-[220px] sm:h-[250px] object-cover rounded-t-xl"
        />
        
      </Link>

      <div className="p-4 flex flex-col gap-2">
        <p className="text-base sm:text-lg font-medium text-gray-800 truncate">{props.name}</p>

        <div className="flex items-center gap-3">
          <span className="text-emerald-600 text-lg font-bold">
            ${props.new_price}
          </span>
          <span className="text-gray-400 line-through text-sm sm:text-base">
            ${props.old_price}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Item;
