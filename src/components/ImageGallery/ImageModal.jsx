const ImageModal = ({ images, currentIndex, setCurrentIndex, closeModal }) => {
  // Function to go to the next image
  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Function to go to the previous image
  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/70 z-50">
      <div className="relative w-[80vw] h-[80vh]">
        {/* Close Button */}
        <button
          onClick={closeModal}
          className="absolute top-4 right-4 p-2 bg-white text-black rounded-full"
        >
          ✕
        </button>

        {/* Previous Button */}
        <button
          onClick={prevImage}
          className="absolute top-1/2 left-4 -translate-y-1/2 p-3 bg-gray-800 text-white rounded-full hover:bg-gray-900"
        >
          &#8592;
        </button>

        {/* Next Button */}
        <button
          onClick={nextImage}
          className="absolute top-1/2 right-4 -translate-y-1/2 p-3 bg-gray-800 text-white rounded-full hover:bg-gray-900"
        >
          &#8594;
        </button>

        {/* Image */}
        <div className="w-full h-full">
          <img
            src={images[currentIndex]}
            alt={`Image ${currentIndex + 1}`}
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default ImageModal;
