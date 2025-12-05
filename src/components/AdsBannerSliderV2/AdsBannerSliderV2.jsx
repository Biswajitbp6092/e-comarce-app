import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import BannerBoxAds from "../BannerBoxAds/BannerBoxAds";

const AdsBannerSliderV2 = (props) => {
  return (
    <div className="py-5 w-full">
      <Swiper
        slidesPerView={props.items}
        spaceBetween={10}
        navigation={true}
        modules={[Navigation]}
        className="smallBtn"
      >
        {props?.data?.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <BannerBoxAds info={item?.alignInfo} item={item} images={item?.images[0]} link={"/"}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default AdsBannerSliderV2;
