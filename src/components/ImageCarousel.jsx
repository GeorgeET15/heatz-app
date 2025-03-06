import React from "react";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/24/outline";

import img1 from "../assets/Insta_1.png";
import img2 from "../assets/Insta_2.png";
import img3 from "../assets/Insta_3.png";
import img4 from "../assets/Insta_4.png";
import img5 from "../assets/Insta_5.png";
import img6 from "../assets/Insta_1.png";
import img7 from "../assets/Insta_2.png";
import img8 from "../assets/Insta_3.png";
import img9 from "../assets/Insta_4.png";
import img10 from "../assets/Insta_5.png";

const carouselImages = [
  { src: img1, alt: "Headphone 1" },
  { src: img2, alt: "Headphone 2" },
  { src: img3, alt: "Headphone 3" },
  { src: img4, alt: "Headphone 4" },
  { src: img5, alt: "Headphone 5" },
  { src: img6, alt: "Headphone 1" },
  { src: img7, alt: "Headphone 2" },
  { src: img8, alt: "Headphone 3" },
  { src: img9, alt: "Headphone 4" },
  { src: img10, alt: "Headphone 5" },
];

const ImageCarousel = () => {
  const scrollRef = React.useRef(null);

  const scrollLeft = () =>
    scrollRef.current.scrollBy({ left: -256, behavior: "smooth" });
  const scrollRight = () =>
    scrollRef.current.scrollBy({ left: 256, behavior: "smooth" });

  return (
    <section className="py-12 px-4 md:px-8 bg-black mt-6">
      <div className="w-full mx-auto">
        <div className="relative">
          <button
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 transform -translate-y-1/2z-10"
          >
            <ChevronLeftIcon className="w-6 h-6 text-[#EEEEEE] hover:text-white" />
          </button>

          <div
            ref={scrollRef}
            className="flex flex-row justify-start gap-0 overflow-x-auto"
          >
            {carouselImages.map((image, index) => (
              <div key={index} className="flex-shrink-0 w-64 h-64">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-contain"
                />
              </div>
            ))}
          </div>

          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 transform -translate-y-1/2   z-10"
          >
            <ChevronRightIcon className="w-6 h-6 text-[#EEEEEE] hover:text-white" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ImageCarousel;
