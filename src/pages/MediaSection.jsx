import React from "react";
import img1 from "../assets/gaming 1.png";
import vid1 from "../assets/video2.mp4";

const MediaSection = () => {
  return (
    <section className="py-8 px-4 sm:px-6 md:px-8 bg-black">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8">
        <div className="w-full max-w-[450px] sm:max-w-[550px] h-64 sm:h-80 md:h-[550px] flex-shrink-0">
          <img
            src={img1}
            alt="Media Image"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="w-full max-w-[450px] sm:max-w-[550px] h-64 sm:h-80 md:h-[550px] flex-shrink-0">
          <video
            src={vid1}
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
          />
        </div>
      </div>
    </section>
  );
};

export default MediaSection;
