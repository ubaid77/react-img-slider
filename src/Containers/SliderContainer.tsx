import React, { useState, useCallback } from "react";
import Navigation from "../Components/Navigation";
import Slides from "../Components/Slides";
import { useSlider } from "../Utils/useSlider";
import Sound from "react-sound";
import audioClip from "../Audio/bg-audio.mp3";

const SliderContainer = () => {
  const slidesData = useSlider();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, SetisPalying] = useState(false);
  const length = slidesData.length;

  const nextSlide = useCallback(() => {
    setCurrentSlide((curr) => (curr === length - 1 ? 0 : curr + 1));
  }, [length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((curr) => (curr === 0 ? length - 1 : curr - 1));
  }, [length]);

  const togglePlay = useCallback(() => {
    SetisPalying((prev) => !prev);
  }, []);

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
      <Sound
        url={audioClip}
        playStatus={isPlaying ? "PLAYING" : "PAUSED"}
        playFromPosition={0}
      />
    </>
  );
};

export default SliderContainer;
