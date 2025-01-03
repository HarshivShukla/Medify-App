import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "../styles/Carousel.css";

const Carousel = ({ items }) => {
  return (
    <Swiper spaceBetween={50} slidesPerView={1}>
      {items.map((item, index) => (
        <SwiperSlide key={index}>
          <img src={item.image} alt={item.alt} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;