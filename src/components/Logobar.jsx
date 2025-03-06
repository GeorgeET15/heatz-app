import headphoneImage from "../assets/h1.png";

const Logobar = () => {
  const logos = Array(12).fill(null);

  return (
    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-3 sm:mb-5 z-10 backdrop-blur-md bg-gray-400/10 rounded-[30px] max-w-5xl w-[90%] sm:w-[80%] md:w-[80%] py-3 sm:py-5">
      <div className="flex justify-center items-center gap-2 sm:gap-4 md:gap-9 px-4 sm:px-6 overflow-x-auto scrollbar-hide">
        {logos.map((_, index) => (
          <img
            key={index}
            src={headphoneImage}
            alt={`Logo ${index + 1}`}
            className="w-8 h-8 sm:w-10 md:w-12 sm:h-10 md:h-12 flex-shrink-0"
          />
        ))}
      </div>
    </div>
  );
};

export default Logobar;
