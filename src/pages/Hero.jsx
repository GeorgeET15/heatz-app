import videoFile from "../assets/video1.mp4";
import Logobar from "../components/Logobar";

const Hero = () => {
  return (
    <div className="relative h-[130vh] w-full overflow-hidden bg-black">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={videoFile}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-black/20" />
      <Logobar />
    </div>
  );
};

export default Hero;
