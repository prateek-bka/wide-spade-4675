import React from "react";
import { Carousel } from "react-bootstrap";

const SkinCarousel = () => {
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://files.myglamm.com/site-images/original/popxo1920x527.gif"
            alt="Fourth slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://files.myglamm.com/site-images/original/Homepage-desktop---1920-x-527.png"
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://files.myglamm.com/site-images/original/Manish1920x527.jpg"
            alt="Fifth slide"
          />
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default SkinCarousel;
