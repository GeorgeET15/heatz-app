import React from "react";

const NavCard = ({ img, subtitle, price }) => {
  return (
    <div className="w-40 h-44 bg-[#EEEEEE] rounded-3xl flex flex-col items-start justify-center shadow-md px-4">
      <img src={img} alt="Small 1" className="w-[80%] h-[80%] object-contain" />
      <p className="text-xs text-black mt-2">{subtitle}</p>
      <p className="text-xs text-black font-bold mb-2">{price}</p>
    </div>
  );
};

export default NavCard;
