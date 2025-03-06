// SmallCardComponent.jsx
import React from "react";

const SmallCardComponent = ({ image, title, description, price }) => {
  return (
    <div className="w-56 h-[320px] bg-[#EEEEEE] rounded-2xl overflow-hidden flex flex-col">
      <div className="w-full h-60 flex items-center justify-center">
        <img
          src={image}
          alt={title}
          className="w-[70%] h-[70%] object-contain"
        />
      </div>
      <div className="p-3 flex flex-col flex-grow">
        <h3 className="text-md font-semibold text-black mb-1 line-clamp-1">
          {title}
        </h3>
        <p className="text-xs text-gray-600 mb-3 line-clamp-2 flex-grow">
          {description}
        </p>
        <p className="text-lg font-bold text-black">₹{price}</p>
      </div>
    </div>
  );
};

export default SmallCardComponent;
