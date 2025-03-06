// CardComponent.jsx
import React from "react";

const CardComponent = ({ image, title, description, price }) => {
  return (
    <div className="w-72 h-[460px] flex-shrink-0 bg-[#EEEEEE] rounded-3xl shadow-md overflow-hidden flex flex-col">
      <div className="w-full h-80 flex items-center justify-center">
        <img
          src={image}
          alt={title}
          className="w-[70%] h-[70%] object-contain"
        />
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-lg font-semibold text-black mb-2 line-clamp-1">
          {title}
        </h3>
        <p className="text-sm text-gray-600 mb-4 line-clamp-2 flex-grow">
          {description}
        </p>
        <p className="text-xl font-bold text-black">₹{price}</p>
      </div>
    </div>
  );
};

export default CardComponent;
