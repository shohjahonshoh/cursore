import React, { useState } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { images } from "./data";

function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  };

  const nextSlide = () => {
    setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
  };

  return (
    <div className="slider-container">
      <AiOutlineLeft onClick={prevSlide} className="slider-icon left" />
      <img
        src={images[currentIndex].url}
        alt="Slider Image"
        className="slider-image"
      />
      <AiOutlineRight onClick={nextSlide} className="slider-icon right" />
    </div>
  );
}

export default Home;
