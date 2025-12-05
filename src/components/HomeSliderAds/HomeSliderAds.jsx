import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { EffectFade, Navigation, Pagination, Autoplay } from "swiper/modules";
import Button from "@mui/material/Button";

const HomeSliderAds = (props) => {
  return (
    <Swiper
      spaceBetween={30}
      effect={"fade"}
      navigation={true}
      pagination={{
        clickable: true,
      }}
      modules={[EffectFade, Navigation, Pagination, Autoplay]}
      loop={true}
      autoplay={{
        delay: 6000,
        disableOnInteraction: false,
      }}
      className="homeSliderAds"
    >
      {props?.data?.map((item, index) => {
        if (item?.isDisplayOnHomeBanner === true) {
          return (
            <SwiperSlide>
              <div className="items w-full rounded-md overflow-hidden relative">
                <img src={item?.bannerimages[0]} />
                <div className="info absolute top-0 -right-[10%] opacity-0 w-[50%] h-full z-50 p-8 flex flex-col items-center justify-center transition-all duration-700">
                  <h4 className="text-[18px] font-[500] w-full text-left mb-4 -right-[15%] opacity-0">
                   {item?.bannerTitlename}
                  </h4>
                  <h2 className="text-[40px] font-[700] w-full text-left -right-[15%] opacity-0">
                    {item?.name}
                  </h2>
                  <h3 className="flex items-center gap-3 text-[18px] font-[500] w-full text-left mb-4 mt-3 -right-[15%] opacity-0">
                    Starting At Only{" "}
                    <span className="text-[40px] text-[#ff5252] font-[600] ">
                     &#x20b9;{item?.price}
                    </span>
                  </h3>
                  <div className="w-full">
                    <Button className="btn-org">Shop Now</Button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        }
      })}

      
    </Swiper>
  );
};

export default HomeSliderAds;
