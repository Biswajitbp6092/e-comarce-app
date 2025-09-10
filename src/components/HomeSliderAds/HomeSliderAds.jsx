import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { EffectFade, Navigation, Pagination } from "swiper/modules";
import Button from "@mui/material/Button";

const HomeSliderAds = () => {
  return (
    <Swiper
      spaceBetween={30}
      effect={"fade"}
      navigation={true}
      pagination={{
        clickable: true,
      }}
      modules={[EffectFade, Navigation, Pagination]}
      loop={true}
      className="homeSliderAds"
    >
      <SwiperSlide>
        <div className="items w-full rounded-md overflow-hidden relative">
          <img src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/modules/cz_imageslider/views/img/sample-1.jpg" />
          <div className="info absolute top-0 -right-0 w-[50%] h-full z-50 p-8 flex flex-col items-center justify-center">
            <h4 className="text-[18px] font-[500] w-full text-left mb-4">
              Big Saving Days Sale
            </h4>
            <h2 className="text-[40px] font-[700] w-full text-left">
              Women Solid Round Green T-Shirt
            </h2>
            <h3 className="flex items-center gap-3 text-[18px] font-[500] w-full text-left mb-4 mt-3">
              Starting At Only{" "}
              <span className="text-[40px] text-[#ff5252] font-[600]">
                $59.00
              </span>
            </h3>
            <div className="w-full">
              <Button className="btn-org">Shop Now</Button>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="items w-full rounded-md overflow-hidden relative">
          <img src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/modules/cz_imageslider/views/img/sample-2.jpg" />
          <div className="info absolute top-0 right-0 w-[50%] h-full z-50 p-8 flex flex-col items-center justify-center">
            <h4 className="text-[18px] font-[500] w-full text-left mb-4">
              Big Saving Days Sale
            </h4>
            <h2 className="text-[40px] font-[700] w-full text-left">
              Buy Modern Chair In Black Color
            </h2>
            <h3 className="flex items-center gap-3 text-[18px] font-[500] w-full text-left mb-4 mt-3">
              Starting At Only{" "}
              <span className="text-[40px] text-[#ff5252] font-[600]">
                $99.00
              </span>
            </h3>
            <div className="w-full">
              <Button className="btn-org">Shop Now</Button>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default HomeSliderAds;
