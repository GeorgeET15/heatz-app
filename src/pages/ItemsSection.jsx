import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/24/outline";
import CardComponent from "../components/CardComponent";

import h1 from "../assets/hb7_1 2.png";
import h2 from "../assets/hb7_1 3.png";
import h3 from "../assets/hb9_1 1.png";
import h4 from "../assets/ZG27_6 3.png";

const ItemsSection = () => {
  const [activeTab, setActiveTab] = useState("Headset");
  const [sliderStyle, setSliderStyle] = useState({});
  const tabRefs = useRef({});
  const navigate = useNavigate();

  const handleViewAll = () => {
    navigate("/product-page");
  };

  const items = {
    Headset: [
      {
        image: h1,
        title: "Gaming Headset Pro",
        description: "Immersive sound with noise cancellation",
        price: 4999,
      },
      {
        image: h2,
        title: "Wireless Headset",
        description: "Comfortable fit with long battery life",
        price: 3999,
      },
      {
        image: h3,
        title: "Gaming Headset Pro",
        description: "Immersive sound with noise cancellation",
        price: 4999,
      },
      {
        image: h4,
        title: "Wireless Headset",
        description: "Comfortable fit with long battery life",
        price: 3999,
      },
      {
        image: h1,
        title: "Gaming Headset Pro",
        description: "Immersive sound with noise cancellation",
        price: 4999,
      },
      {
        image: h2,
        title: "Wireless Headset",
        description: "Comfortable fit with long battery life",
        price: 3999,
      },
      {
        image: h3,
        title: "Gaming Headset Pro",
        description: "Immersive sound with noise cancellation",
        price: 4999,
      },
      {
        image: h4,
        title: "Wireless Headset",
        description: "Comfortable fit with long battery life",
        price: 3999,
      },
    ],
    Mouse: [
      {
        image: h1,
        title: "Gaming Mouse X",
        description: "High precision with customizable buttons",
        price: 2999,
      },
      {
        image: h2,
        title: "Ergonomic Mouse",
        description: "Designed for long gaming sessions",
        price: 1999,
      },
      {
        image: h3,
        title: "Gaming Mouse X",
        description: "High precision with customizable buttons",
        price: 2999,
      },
      {
        image: h4,
        title: "Ergonomic Mouse",
        description: "Designed for long gaming sessions",
        price: 1999,
      },
      {
        image: h1,
        title: "Gaming Mouse X",
        description: "High precision with customizable buttons",
        price: 2999,
      },
      {
        image: h2,
        title: "Ergonomic Mouse",
        description: "Designed for long gaming sessions",
        price: 1999,
      },
      {
        image: h3,
        title: "Gaming Mouse X",
        description: "High precision with customizable buttons",
        price: 2999,
      },
      {
        image: h4,
        title: "Ergonomic Mouse",
        description: "Designed for long gaming sessions",
        price: 1999,
      },
    ],
    Keyboard: [
      {
        image: h1,
        title: "Mechanical Keyboard",
        description: "RGB lighting with tactile switches",
        price: 5999,
      },
      {
        image: h2,
        title: "Compact Keyboard",
        description: "Portable design with fast response",
        price: 3999,
      },
      {
        image: h3,
        title: "Mechanical Keyboard",
        description: "RGB lighting with tactile switches",
        price: 5999,
      },
      {
        image: h4,
        title: "Compact Keyboard",
        description: "Portable design with fast response",
        price: 3999,
      },
      {
        image: h1,
        title: "Mechanical Keyboard",
        description: "RGB lighting with tactile switches",
        price: 5999,
      },
      {
        image: h2,
        title: "Compact Keyboard",
        description: "Portable design with fast response",
        price: 3999,
      },
      {
        image: h3,
        title: "Mechanical Keyboard",
        description: "RGB lighting with tactile switches",
        price: 5999,
      },
      {
        image: h4,
        title: "Compact Keyboard",
        description: "Portable design with fast response",
        price: 3999,
      },
    ],
    "10% off": [
      {
        image: h1,
        title: "Bundle Pack",
        description: "Mouse + Keyboard combo",
        price: 7999,
      },
      {
        image: h3,
        title: "Starter Kit",
        description: "Headset + Mouse combo",
        price: 5999,
      },
    ],
  };

  const tabs = ["Headset", "Mouse", "Keyboard", "10% off"];

  useEffect(() => {
    const activeTabRef = tabRefs.current[activeTab];
    if (activeTabRef) {
      setSliderStyle({
        width: `${activeTabRef.offsetWidth}px`,
        transform: `translateX(${activeTabRef.offsetLeft}px)`,
        transition: "transform 0.3s ease",
      });
    }
  }, [activeTab]);

  return (
    <section className="py-12 px-4 md:px-8 bg-black">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
          <div className="relative bg-[#333333] rounded-4xl inline-flex space-x-2 items-stretch p-1 overflow-x-auto w-full sm:w-auto">
            <div
              className="absolute top-1 bottom-1 bg-[#00E489] rounded-4xl"
              style={sliderStyle}
            />
            {tabs.map((tab) => (
              <button
                key={tab}
                ref={(el) => (tabRefs.current[tab] = el)} // Store ref for each tab
                onClick={() => setActiveTab(tab)}
                className={`relative px-6 py-3 rounded-4xl font-bold transition-colors flex items-center z-10 whitespace-nowrap ${
                  activeTab === tab
                    ? "text-black"
                    : "text-[#919191] hover:bg-gray-600"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
          <div
            className="flex items-center space-x-2 cursor-pointer justify-center sm:justify-start"
            onClick={handleViewAll}
          >
            <p className="text-white text-sm hover:text-[#00E489]">
              View all products
            </p>
            <ChevronLeftIcon className="w-5 h-5 text-white transform rotate-180 hover:text-[#00E489]" />
          </div>
        </div>

        <div className="relative">
          <Swiper
            modules={[Navigation]}
            navigation={{
              nextEl: ".card-next",
              prevEl: ".card-prev",
            }}
            slidesPerView={1} // Default to 1 slide
            spaceBetween={20} // Increased base spacing
            breakpoints={{
              0: { slidesPerView: 1, spaceBetween: 20 },
              480: { slidesPerView: 2, spaceBetween: 30 },
              768: { slidesPerView: 3, spaceBetween: 40 },
              1024: { slidesPerView: 4, spaceBetween: 50 },
            }}
            className="w-full"
          >
            {items[activeTab].map((item, index) => (
              <SwiperSlide key={index} className="flex justify-center">
                <CardComponent
                  image={item.image}
                  title={item.title}
                  description={item.description}
                  price={item.price}
                />
              </SwiperSlide>
            ))}
          </Swiper>

          <button className="card-prev absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-4 text-white p-2 z-10">
            <ChevronLeftIcon className="w-8 h-8" color="gray" />
          </button>
          <button className="card-next absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-4 text-white p-2 z-10">
            <ChevronRightIcon className="w-8 h-8" color="gray" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ItemsSection;
