// Navbar.jsx
import { useState } from "react";
import {
  MagnifyingGlassIcon,
  ShoppingCartIcon,
  HeartIcon,
  UserIcon,
  Bars3Icon,
  XMarkIcon,
  ChevronDoubleRightIcon,
} from "@heroicons/react/24/outline";
import logoImage from "../assets/logo.png";

// Sample images (replace with your actual image paths)
import smallImg1 from "../assets/h1.png";
import smallImg2 from "../assets/hb7_1 2.png";
import smallImg3 from "../assets/hb7_1 3.png";
import smallImg4 from "../assets/hb9_1 1.png";
import smallImg5 from "../assets/hb7_1 3.png";
import smallImg6 from "../assets/hb7_1 2.png";
import bigImg from "../assets/gaming 1.png";
import NavCard from "./NavCard";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredTab, setHoveredTab] = useState(null);

  const toggleMenu = () => setIsOpen(!isOpen);

  const menuItems = [
    { label: "Mobile Acc", content: "Mobile Accessories Content Here" },
    { label: "Computer Acc", content: "Computer Accessories Content Here" },
    { label: "Multimedia", content: "Multimedia Content Here" },
    { label: "Support", content: "Support Content Here" },
  ];

  // Sample data for small cards
  const smallCardData = [
    { img: smallImg1, subtitle: "Headphone A", price: "₹1999" },
    { img: smallImg2, subtitle: "Headphone B", price: "₹2499" },
    { img: smallImg3, subtitle: "Headphone C", price: "₹2999" },
    { img: smallImg4, subtitle: "Headphone D", price: "₹3499" },
    { img: smallImg5, subtitle: "Headphone E", price: "₹3999" },
    { img: smallImg6, subtitle: "Headphone F", price: "₹4499" },
  ];

  return (
    <nav className="absolute top-0 left-1/2 transform -translate-x-1/2 mt-5 z-10 backdrop-blur-md bg-gray-400/10 rounded-[30px] max-w-6xl w-[40%] md:w-[70%] py-3 border border-gray-300/20">
      <div className="px-4 flex items-center justify-between w-full relative">
        {/* Logo (Left) */}
        <div className="text-[#00E489] flex-shrink-0 ml-1">
          <img src={logoImage} alt="Website Logo" className="w-8 h-8" />
        </div>

        {/* Hamburger (Mobile) */}
        <button
          className="md:hidden text-[#00E489] focus:outline-none flex-shrink-0"
          onClick={toggleMenu}
        >
          {isOpen ? (
            <XMarkIcon className="w-6 h-6" />
          ) : (
            <Bars3Icon className="w-6 h-6" />
          )}
        </button>

        {/* Menu Items (Centered) */}
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } md:flex md:items-center absolute md:static top-full left-0 w-full md:w-auto bg-gray-200/90 md:bg-transparent md:space-x-8 text-[#00E489] px-4 py-2 md:p-0 md:flex-1 md:justify-center`}
        >
          {menuItems.map((item, index) => (
            <div
              key={index}
              className="relative"
              onMouseEnter={() => setHoveredTab(index)}
              onMouseLeave={() => setHoveredTab(null)}
            >
              <a
                href="#"
                className="block py-2 md:py-0 hover:underline text-center text-xs font-bold"
              >
                {item.label}
              </a>
            </div>
          ))}
        </div>

        {/* Icons (Right) */}
        <div className="hidden md:flex space-x-4 text-[#00E489] flex-shrink-0 mr-2">
          <MagnifyingGlassIcon className="w-6 h-6" />
          <ShoppingCartIcon className="w-6 h-6" />
          <HeartIcon className="w-6 h-6" />
          <UserIcon className="w-6 h-6" />
        </div>

        {/* Dialog Popup */}
        {hoveredTab !== null && (
          <div
            className="absolute left-0 top-[-1px] mt-9 backdrop-blur-md bg-gray-400/10 rounded-t-none rounded-b-[20px] border border-t-0 border-gray-300/20 min-h-[400px] z-[-1] p-4 text-white text-center"
            style={{ width: "100%" }} // Matches Navbar width
          >
            <div className="flex h-full mt-10 gap-2">
              {/* Left Side: 6 Small Square Image Cards (3 below 3) */}
              <div className="flex flex-col justify-center items-start gap-4">
                <div className="flex gap-2">
                  <NavCard
                    img={smallCardData[0].img}
                    subtitle={smallCardData[0].subtitle}
                    price={smallCardData[0].price}
                  />
                  <NavCard
                    img={smallCardData[1].img}
                    subtitle={smallCardData[1].subtitle}
                    price={smallCardData[1].price}
                  />
                  <NavCard
                    img={smallCardData[2].img}
                    subtitle={smallCardData[2].subtitle}
                    price={smallCardData[2].price}
                  />
                </div>
                <div className="flex gap-2">
                  <NavCard
                    img={smallCardData[4].img}
                    subtitle={smallCardData[4].subtitle}
                    price={smallCardData[4].price}
                  />
                  <NavCard
                    img={smallCardData[5].img}
                    subtitle={smallCardData[5].subtitle}
                    price={smallCardData[5].price}
                  />
                  <NavCard
                    img={smallCardData[0].img}
                    subtitle={smallCardData[0].subtitle}
                    price={smallCardData[0].price}
                  />
                </div>
              </div>

              {/* Right Side: Big Square Image */}
              <div className="flex items-center ml-5">
                <div className="w-91 h-91 flex items-center justify-center">
                  <img
                    src={bigImg}
                    alt="Big Image"
                    className="w-full h-full object-contain  rounded-3xl "
                  />
                </div>
                <ChevronDoubleRightIcon className="text-[#EEEEEE] h-7 w-7 items-center ml-7" />
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
