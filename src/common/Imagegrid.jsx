import React, { useState } from 'react';
import { TbPhotoSearch } from 'react-icons/tb';
import { AiOutlineLeft, AiOutlineRight, AiOutlineClose } from 'react-icons/ai';

const images = [
  { id: 1, src: 'https://www.themezaa.com/html/leadgen/demo/cafe/images/agency-work-13.jpg', alt: 'Bread Image 1' },
  { id: 2, src: 'https://www.themezaa.com/html/leadgen/demo/cafe/images/agency-work-01.jpg', alt: 'Bread Image 2' },
  { id: 3, src: 'https://www.themezaa.com/html/leadgen/demo/cafe/images/agency-work-14.jpg', alt: 'Croissant' },
  { id: 4, src: 'https://www.themezaa.com/html/leadgen/demo/cafe/images/agency-work-08.jpg', alt: 'Coffee' },
  { id: 5, src: 'https://www.themezaa.com/html/leadgen/demo/cafe/images/agency-work-15.jpg', alt: 'Pastry Image 1' },
  { id: 6, src: 'https://www.themezaa.com/html/leadgen/demo/cafe/images/agency-work-04.jpg', alt: 'Sauce' },
  { id: 7, src: 'https://www.themezaa.com/html/leadgen/demo/cafe/images/agency-work-02.jpg', alt: 'Croissant with chocolate' },
  { id: 8, src: 'https://www.themezaa.com/html/leadgen/demo/cafe/images/agency-work-06.jpg', alt: 'Cheese and Crackers' },
];

const ImageGrid = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (index) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const showNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const showPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <>
      <div className="grid grid-cols-1  md:grid-cols-4 md:gap-2 gap-0.5  w-full">
        {images.map((image, index) => (
          <div
            key={image.id}
            className="relative group overflow-hidden cursor-pointer"
            onClick={() => openModal(index)}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            {/* Overlay with icons */}
            <div className="absolute inset-0 hover:bg-black hover:bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
              <TbPhotoSearch className="text-white text-2xl md:text-3xl cursor-pointer hover:text-[#d0ae5e]" />
            </div>
          </div>
        ))}
      </div>

      {/* Full-Screen Image Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-transparent  flex items-center justify-center z-50 bg-white">
          {/* Close Button */}
          <button
            className="absolute top-0 right-0 text-white text-xl p-3 bg-gray-800 hover:bg-gray-700 "
            onClick={closeModal}
          >
            <AiOutlineClose />
          </button>

          {/* Image */}
          <div className="relative w-full">
          <div className='w-full flex justify-center items-center'>
            <img src={images[currentIndex].src} alt={images[currentIndex].alt} className="max-h-[80vh] max-w-[80vw] cursor-pointer" onClick={showNext} />
          </div>

            {/* Navigation Buttons */}
            <button
              className="absolute top-1/2 left-5 transform -translate-y-1/2 text-black text-4xl p-2 bg-transparent rounded-full"
              onClick={showPrev}
            >
              <AiOutlineLeft />
            </button>
            <button
              className="absolute top-1/2 right-5 transform -translate-y-1/2 text-black text-4xl p-2 bg-transparent rounded-full"
              onClick={showNext}
            >
              <AiOutlineRight />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ImageGrid;
