import { useState } from "react";
import ImageModal from "./ImageModal";

const ImageGallery = () => {
  const images = [
    "https://www.signatureprojects.co.in/signature-deluxe-dxp/assets/images/plans/3bhk.webp",
    "https://www.signatureprojects.co.in/signature-deluxe-dxp/assets/images/plans/3-5bhk.webp",
    "https://www.signatureprojects.co.in/signature-deluxe-dxp/assets/images/plans/4-5bhk.webp",
    "https://www.signatureprojects.co.in/signature-deluxe-dxp/assets/images/plans/location.webp",
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Function to open modal
  const openModal = (index) => {
    setCurrentImageIndex(index);
    setIsModalOpen(true);
  };

  // Function to close modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {/* Image Row */}
      <div className="flex space-x-4">
        {images.map((image, index) => (
          <div
            key={index}
            className="cursor-pointer transition-transform hover:scale-105"
            onClick={() => openModal(index)}
          >
            <img
              src={image}
              alt={`Image ${index + 1}`}
              className="w-60 h-40 object-cover"
            />
          </div>
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <ImageModal
          images={images}
          currentIndex={currentImageIndex}
          setCurrentIndex={setCurrentImageIndex}
          closeModal={closeModal}
        />
      )}
    </>
  );
};

export default ImageGallery;
