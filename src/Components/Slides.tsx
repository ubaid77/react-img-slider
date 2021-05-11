import React from "react";

interface PropTypes {
  img: string;
  title: string;
  current: number;
  index: number;
}

const Slides = (props: PropTypes) => {
  const { img, title, current, index } = props;
  return (
    <div className={index === current ? "slides active" : "slides"}>
      <img src={img} alt={title} />
      <div className="overlay">
        <h1 className="title">{title}</h1>
      </div>
    </div>
  );
};

export default Slides;
