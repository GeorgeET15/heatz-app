import React, { useRef } from "react";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/24/outline";
import VideoCardComponent from "../components/VideoCardComponent";
import vid1 from "../assets/video2.mp4";
import vid2 from "../assets/video1.mp4";

const HorizontalVideoSection = () => {
  const videos = [vid1, vid2, vid1, vid2, vid1, vid2, vid1, vid2, vid1];
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      const cardWidth =
        scrollRef.current.querySelector(".snap-start").offsetWidth || 256; // Fallback to 256px
      scrollRef.current.scrollBy({ left: -cardWidth, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      const cardWidth =
        scrollRef.current.querySelector(".snap-start").offsetWidth || 256; // Fallback to 256px
      scrollRef.current.scrollBy({ left: cardWidth, behavior: "smooth" });
    }
  };

  return (
    <section className="py-12 px-4 md:px-8 bg-black">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row md:space-x-40 mb-25">
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white">
              Trending Products
            </h2>
          </div>
          <div className="w-full md:w-1/2 mt-4 md:mt-0">
            <p className="text-white text-xs">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
              <br /> Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, <br />
              when an unknown printer
            </p>
          </div>
        </div>
      </div>

      <div className="relative px-4 sm:px-6 md:px-8">
        <div
          ref={scrollRef}
          className="video-scroll-container flex overflow-x-auto scrollbar-hide snap-x snap-mandatory space-x-2 sm:space-x-4"
        >
          {videos.map((video, index) => (
            <div key={index} className="snap-start flex-shrink-0 w-60 sm:w-64">
              <VideoCardComponent videoSrc={video} />
            </div>
          ))}
        </div>

        <button
          onClick={scrollLeft}
          className="video-prev hidden sm:block absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-4 text-white p-2 z-10"
        >
          <ChevronLeftIcon className="w-8 h-8" color="gray" />
        </button>
        <button
          onClick={scrollRight}
          className="video-next hidden sm:block absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-4 text-white p-2 z-10"
        >
          <ChevronRightIcon className="w-8 h-8" color="gray" />
        </button>
      </div>
    </section>
  );
};

export default HorizontalVideoSection;
