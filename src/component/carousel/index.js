import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { StaticImage, Lazy } from "gatsby-plugin-image";

// import required modules
import { Autoplay } from "swiper";
export default function Carousel() {
  return (
    <div>
      {" "}
      <Swiper
        Lazy={true}
        spaceBetween={50}
        slidesPerView={3}
        autoplay={{
          delay: 400,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        breakpoints={{
          640: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
      >
        <SwiperSlide>
          <StaticImage src="../../images/vonmo.svg" />
        </SwiperSlide>
        <SwiperSlide>
          <StaticImage src="../../images/tetra.svg" />
        </SwiperSlide>
        <SwiperSlide>
          <StaticImage src="../../images/proactive.svg" />
        </SwiperSlide>
        <SwiperSlide>
          <StaticImage src="../../images/phasekit.svg" />
        </SwiperSlide>
        <SwiperSlide>
          <StaticImage src="../../images/asuna.svg" />
        </SwiperSlide>
        <SwiperSlide>
          <StaticImage src="../../images/bobcot.svg" />
        </SwiperSlide>
        <SwiperSlide>
          <StaticImage src="../../images/covenant.svg" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
