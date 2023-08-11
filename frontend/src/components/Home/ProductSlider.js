import React from 'react';
import { Carousel } from 'react-bootstrap';
//import apple from '../../images/apple1.jpg';

export default function ProductSlider({ images }) {
  return (
    <Carousel>
      {images?.map((el) => (
        <Carousel.Item>
          <img src={`/${el}`} alt="" className="w-100" height={400} />
        </Carousel.Item>
      ))}
    </Carousel>
  );
}
