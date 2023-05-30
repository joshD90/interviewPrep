import { FC, useState } from "react";
import "./slider.css";

type Props = { images: string[] };

const Slider: FC<Props> = ({ images }) => {
  const [imageIndex, setImageIndex] = useState(0);

  const handleClick = (direction: string) => {
    const integerChange = direction === "left" ? -1 : 1;
    if (direction === "left" && imageIndex === 0)
      return setImageIndex(images.length - 1);
    if (direction === "right" && imageIndex === images.length - 1)
      return setImageIndex(0);
    setImageIndex((prev) => prev + integerChange);
  };

  return (
    <div className="container">
      <button className="leftButton" onClick={() => handleClick("left")}>
        Back
      </button>
      <button className="rightButton" onClick={() => handleClick("right")}>
        Forwards
      </button>
      <img
        src={images[imageIndex]}
        alt="slideshow image"
        className="sliderImage"
      />
      <h2>
        {imageIndex}
        {images.length}
      </h2>
    </div>
  );
};

export default Slider;
