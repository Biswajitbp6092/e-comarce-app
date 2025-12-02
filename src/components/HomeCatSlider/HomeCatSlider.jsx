import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Link } from "react-router-dom";

const HomeCatSlider = (props) => {
  return (
    <div className="home-cat-slider pt-4 py-8">
      <div className="container">
        <Swiper
          slidesPerView={8}
          spaceBetween={10}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper homeCatSlider"
        >
          {props?.data?.map((cat, index) => {
            return (
              <SwiperSlide key={index}>
                <Link to="/">
                  <div className="item py-7 px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col gap-5">
                    <img
                      src={cat?.images[0]}
                      alt="Category"
                      className="w-[60px]"
                    />
                    <h3 className="text-[15px] font-[500]">{cat?.name}</h3>
                  </div>
                </Link>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default HomeCatSlider;
