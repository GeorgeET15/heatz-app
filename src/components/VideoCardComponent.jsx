import React from "react";

const VideoCardComponent = ({ videoSrc }) => {
  return (
    <div className="w-64 h-[450px] flex-shrink-0 overflow-hidden">
      <video
        src={videoSrc}
        className="w-full h-full object-cover"
        autoPlay
        muted
        loop
      />
    </div>
  );
};

export default VideoCardComponent;
