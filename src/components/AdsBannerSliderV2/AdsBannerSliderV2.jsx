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
        <SwiperSlide>
          <BannerBoxAds info="left" images={"https://demos.codezeel.com/prestashop/PRS21/PRS210502/img/cms/sub-banner-1.jpg"} link={"/"} />
        </SwiperSlide>
        <SwiperSlide>
          <BannerBoxAds info="right" images={"https://demos.codezeel.com/prestashop/PRS21/PRS210502/img/cms/sub-banner-2.jpg"}   link={"/"} />
        </SwiperSlide>
        <SwiperSlide>
          <BannerBoxAds info="left" images={"https://demos.codezeel.com/prestashop/PRS21/PRS210502/img/cms/sub-banner-1.jpg"} link={"/"} />
        </SwiperSlide>
        <SwiperSlide>
          <BannerBoxAds info="left" images={"https://demos.codezeel.com/prestashop/PRS21/PRS210502/img/cms/sub-banner-1.jpg"} link={"/"} />
        </SwiperSlide>
        <SwiperSlide>
          <BannerBoxAds info="left" images={"https://demos.codezeel.com/prestashop/PRS21/PRS210502/img/cms/sub-banner-1.jpg"} link={"/"} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default AdsBannerSliderV2;
