import { useState, useEffect } from "react";

const Slider = () => {
  const images = [
    "https://www.signatureprojects.co.in/signature-deluxe-dxp/assets/images/slider/slider.webp",
    "https://www.signatureprojects.co.in/signature-deluxe-dxp/assets/images/slider/slider-deluxe-dxp.webp",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(handleNext, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[100vh] overflow-hidden">
      <div
        className="relative w-full h-full flex transition-transform duration-700"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {images.map((image, index) => (
          <div key={index} className="flex-shrink-0 w-full h-full">
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white bg-black/50">
        <div className="border border-black/50 bg-black/50 p-6">
          <h1 className="text-lg font-bold md:text-2xl">
            Signature Deluxe DXP
          </h1>
          <p className="mt-1 text-sm md:text-base">
            3 & 4 BHK Luxury Flats in Gurgaon
          </p>
        </div>
      </div>

      <button
        onClick={handlePrev}
        className="absolute top-1/2 left-4 -translate-y-1/2 p-3 bg-gray-800 text-white rounded-full shadow-lg hover:bg-gray-900 transition"
      >
        &#8592;
      </button>
      <button
        onClick={handleNext}
        className="absolute top-1/2 right-4 -translate-y-1/2 p-3 bg-gray-800 text-white rounded-full shadow-lg hover:bg-gray-900 transition"
      >
        &#8594;
      </button>

      <div className="absolute bottom-4 w-full flex justify-center space-x-2">
        {images.map((_, index) => (
          <span
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`cursor-pointer w-3 h-3 rounded-full ${currentIndex === index ? "bg-white" : "bg-gray-400"
              }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;