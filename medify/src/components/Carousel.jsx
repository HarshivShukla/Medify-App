import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import "../styles/Carousel.css";

const Carousel = ({ items }) => {
  return (
    <Swiper
      spaceBetween={30}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      modules={[Navigation, Pagination]}
      className="custom-carousel"
    >
      {items.map((item, index) => (
        <SwiperSlide key={index}>
          <img src={item.image} alt={item.alt} className="carousel-image" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;
