import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useState } from "react";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/24/outline";

const BoostSection = () => {
  const images = [
    "https://cdn.shopify.com/s/files/1/0012/4957/4961/files/gaming_mouse_wireless_cheap.jpg?v=1657006550",
    "https://vertux.com/cdn/shop/files/Vertux-Ammolite-banner_1980x.jpg?v=1667285354",
    "https://redragonshop.com/cdn/shop/collections/febleibanner.png?v=1638177527",
  ];

  const [currentIndex, setCurrentIndex] = useState(1);

  return (
    <section className="py-12 px-4 md:px-8 bg-black">
      <div className="max-w-5xl mx-auto h-[100vh]">
        {/* Heading and Paragraph */}
        <div className="flex flex-col md:flex-row md:space-x-8 mb-8">
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Boost up your <br /> Gaming experience.
            </h2>
          </div>
          <div className="md:w-1/2 mt-4 md:mt-0">
            <p className=" text-white text-xs">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
              <br /> Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, <br />
              when an unknown printer
            </p>
          </div>
        </div>

        {/* Image Carousel */}
        <div className="relative w-full max-w-5xl mx-auto">
          <Swiper
            modules={[Navigation, Autoplay, Pagination]}
            navigation={{
              nextEl: ".custom-next",
              prevEl: ".custom-prev",
            }}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }}
            loop={true}
            onSlideChange={(swiper) => setCurrentIndex(swiper.realIndex + 1)}
            className="w-full"
          >
            {images.map((image, index) => (
              <SwiperSlide key={index} className="relative">
                <img
                  src={image}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-64 md:h-[500px] object-cover"
                />
                {/* Overlay Text and Button */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                  <h3 className="text-3xl md:text-4xl font-bold mb-6 ">
                    {" "}
                    Boost up your <br /> Audio experience
                  </h3>
                  <button className="border-2 border-white text-white px-8 py-2 rounded-4xl text-lg hover:bg-white hover:text-black transition-colors">
                    Learn More
                  </button>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <button className="custom-prev absolute top-1/2 left-4 transform -translate-y-1/2 text-white p-2 text-4xl z-10">
            <ChevronLeftIcon className="w-10 h-10" color="gray" />
          </button>
          <button className="custom-next absolute top-1/2 right-4 transform -translate-y-1/2 text-white p-2 text-4xl z-10">
            <ChevronRightIcon className="w-10 h-10" color="gray" />
          </button>

          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 text-white px-4 py-1 rounded-md z-10">
            {currentIndex} / {images.length}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BoostSection;
