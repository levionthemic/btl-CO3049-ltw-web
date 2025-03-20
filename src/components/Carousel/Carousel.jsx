import React, { useState, useEffect } from "react";
import { FaArrowCircleLeft } from "react-icons/fa";
import { FaArrowCircleRight } from "react-icons/fa";

function Carousel({ landscapeSlides, portraitSlides }) {
  const [current, setCurrent] = useState(0); // Ensure it starts at 0
  const [slides, setSlides] = useState([]);

  useEffect(() => {
    if (window.innerWidth > window.innerHeight) {
      setSlides(landscapeSlides); // Landscape mode
    } else {
      setSlides(portraitSlides); // Portrait mode
    }
  });

  useEffect(() => {
    // Auto slide
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3000); //Set time here

    return () => clearInterval(interval);
  }, [slides.length]);

  const previousSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <>
      <div
        className="overflow-hidden relative flex items-center justify-center
      w-full h-[90vh] "
      >
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <img
              key={index}
              src={slide}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover flex-shrink-0 max-h-[80vh]"
            />
          ))}
        </div>
      </div>

      <FaArrowCircleLeft
        className="absolute left-5 top-1/2 transform -translate-y-1/2 text-white text-6xl z-10 bg-black/50 p-2 rounded-full"
        onClick={previousSlide}
      />

      <FaArrowCircleRight
        className="absolute right-5 top-1/2 transform -translate-y-1/2 text-white text-6xl z-10 bg-black/50 p-2 rounded-full"
        onClick={nextSlide}
      />

      <div
        className="flex flex-col
      absolute left-[5vw] lg:left-[10vw] bottom-[20vh] text-2xl md:text-4xl lg:text-6xl font-bold text-white"
      >
        <span>Thư giãn, tận hưởng</span>
        <span>và tạo nên những kỷ niệm đẹp</span>
      </div>
    </>
  );
}

export default Carousel;
