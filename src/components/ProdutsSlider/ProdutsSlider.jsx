import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import ProductsItems from "../ProductsItems/ProductsItems";

const ProdutsSlider = (props) => {
  return (
    <div className="produtsSlider py-6">
      <Swiper
        slidesPerView={props.items}
        spaceBetween={10}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><ProductsItems/></SwiperSlide>
        <SwiperSlide><ProductsItems/></SwiperSlide>
        <SwiperSlide><ProductsItems/></SwiperSlide>
        <SwiperSlide><ProductsItems/></SwiperSlide>
        <SwiperSlide><ProductsItems/></SwiperSlide>
        <SwiperSlide><ProductsItems/></SwiperSlide>
        <SwiperSlide><ProductsItems/></SwiperSlide>
        <SwiperSlide><ProductsItems/></SwiperSlide>
        <SwiperSlide><ProductsItems/></SwiperSlide>
        <SwiperSlide><ProductsItems/></SwiperSlide>
        <SwiperSlide><ProductsItems/></SwiperSlide>

      </Swiper>
    </div>
  );
};

export default ProdutsSlider;
