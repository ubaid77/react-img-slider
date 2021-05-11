import React from "react";
import { AiOutlinePauseCircle } from "react-icons/ai";
import { FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";
import { BsMusicNote } from "react-icons/bs";

interface PropTypes {
  nextSlide: Function;
  prevSlide: Function;
  togglePlay: Function;
  isPlaying: boolean;
}
const Navigation = (props: PropTypes) => {
  const { nextSlide, prevSlide, togglePlay, isPlaying } = props;
  return (
    <div className="navigation">
      <div className="play" onClick={() => togglePlay()}>
        {isPlaying ? <AiOutlinePauseCircle /> : <BsMusicNote />}
      </div>
      <FiArrowLeftCircle className="arrows" onClick={() => prevSlide()} />
      <FiArrowRightCircle className="arrows" onClick={() => nextSlide()} />
    </div>
  );
};

export default Navigation;
