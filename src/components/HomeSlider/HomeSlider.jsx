import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import { Navigation, Autoplay } from "swiper/modules";

const HomeSlider = (props) => {
  return (
    <div className="home-slider py-4">
      <div className="container">
        <Swiper
          spaceBetween={20}
          slidesPerView={"auto"}
          centeredSlides={true}
          navigation={true}
          modules={[Navigation, Autoplay]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          className="sliderHome"
        >
          {props?.data?.length !== 0 &&
            props?.data?.map((item, index) => {
              return (
                <SwiperSlide key={index}>
                  <div className="item rounded-[20px] overflow-hidden">
                    <img
                      src={item?.images[0]}
                      alt="Banner Slider"
                      className="w-full"
                    />
                  </div>
                </SwiperSlide>
              );
            })}
        </Swiper>
      </div>
    </div>
  );
};

export default HomeSlider;
