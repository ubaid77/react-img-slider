import React, { useState, useCallback } from "react";
import Navigation from "../Components/Navigation";
import Slides from "../Components/Slides";
import { useSlider } from "../Utils/useSlider";

interface PropTypes {
  togglePlay: Function;
  isPlaying: boolean;
}
const SliderContainer = (props: PropTypes) => {
  const { togglePlay, isPlaying } = props;
  const slidesData = useSlider();
  const [currentSlide, setCurrentSlide] = useState(0);

  const length = slidesData.length;

  const nextSlide = useCallback(() => {
    setCurrentSlide((curr) => (curr === length - 1 ? 0 : curr + 1));
  }, [length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((curr) => (curr === 0 ? length - 1 : curr - 1));
  }, [length]);

  return (
    <>
      <div className="container">
        {slidesData.map((slide, index) => (
          <>
            {index === currentSlide && (
              <Slides
                img={slide.img}
                title={slide.title}
                current={currentSlide}
                index={index}
              />
            )}
          </>
        ))}
        <Navigation
          nextSlide={nextSlide}
          prevSlide={prevSlide}
          togglePlay={togglePlay}
          isPlaying={isPlaying}
        />
      </div>
    </>
  );
};

export default SliderContainer;
