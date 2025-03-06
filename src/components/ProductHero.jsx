// ProductHero.jsx
import React from "react";
import heroImage from "../assets/4 1.png"; // Foreground center image
import backgroundImage from "../assets/ZG29.png"; // Background image
import heroVideo from "../assets/video2.mp4"; // Replace with your small video

const ProductHero = () => {
  return (
    <section
      className="py-8 px-4 sm:px-6 md:px-8 min-h-screen flex items-center"
      style={{
        background:
          "linear-gradient(to bottom, #2c2c2c 0%, #161616 50%, #262626 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center gap-8 sm:gap-12 md:gap-20 mt-5 relative">
        {/* Left Side - Text, Price, and Button */}
        <div className="w-full md:w-1/3 text-white mb-6 sm:mb-8 md:mb-0 relative z-10 text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl mb-4 mt-9">
            Stylish & <br />
            Durable
          </h1>
          <p className="text-xs sm:text-sm text-[#565656] mb-6">
            Experience crystal-clear <br /> audio and deep bass
          </p>
          <p className="text-lg sm:text-xl font-bold mb-6">₹1999</p>
          <button className="px-4 sm:px-6 py-2 border-2 border-white text-white rounded-3xl hover:bg-white hover:text-black transition-colors">
            Add to Cart
          </button>
        </div>

        {/* Center - Foreground Image with Background */}
        <div className="w-full relative flex justify-center mt-9">
          <img
            src={backgroundImage}
            alt="Background"
            className="absolute top-1/2 left-1/2 w-full max-w-[600px] sm:max-w-[1000px] h-auto object-contain transform -translate-x-1/2 -translate-y-1/2 z-0"
          />
          <img
            src={heroImage}
            alt="Hero Product"
            className="relative w-full max-w-[400px] sm:max-w-[500px] md:max-w-[500px] h-auto object-contain z-20"
          />
        </div>

        {/* Right Side - Small Video */}
        <div className="w-full md:w-1/3 flex justify-center md:justify-end relative z-10">
          <video
            src={heroVideo}
            className="w-48 h-36 object-cover rounded-4xl"
            autoPlay
            muted
            loop
          />
        </div>
      </div>
    </section>
  );
};

export default ProductHero;
