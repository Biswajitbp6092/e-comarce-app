import React from "react";
import HomeSlider from "../components/HomeSlider/HomeSlider";
import HomeCatSlider from "../components/HomeCatSlider/HomeCatSlider";
import { LiaShippingFastSolid } from "react-icons/lia";
import AdsBannerSlider from "../components/AdsBannerSlider/AdsBannerSlider";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
// import Box from "@mui/material/Box";
import ProdutsSlider from "../components/ProdutsSlider/ProdutsSlider";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import BlogItem from "../components/BlogItem/BlogItem";

const HomePage = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <HomeSlider />
      <HomeCatSlider />
      <section className="bg-white py-8">
        <div className="container">
          <div className="flex items-center justify-between">
            <div className="leftsec w-[40%]">
              <h3 className="text-[20px] font-[600]">Popular Products</h3>
              <p className="text-[14px] font-[400]">
                Do not miss the current offers until the end of March.
              </p>
            </div>

            <div className="rightsec w-[60%]">
              <Tabs
                value={value}
                onChange={handleChange}
                variant="scrollable"
                scrollButtons="auto"
                aria-label="scrollable auto tabs example"
              >
                <Tab label="Fashion" />
                <Tab label="Electronics" />
                <Tab label="Bags" />
                <Tab label="Footwear" />
                <Tab label="Groceries" />
                <Tab label="Beauty" />
                <Tab label="Wellness" />
                <Tab label="Jewellery" />
              </Tabs>
            </div>
          </div>
          <ProdutsSlider items={6} />
        </div>
      </section>
      <section className="py-4 mt-0 bg-white ">
        <div className="container">
          <div className="freeShipping w-[80%] m-auto py-4 p-4 border border-[#ff5252] flex items-center justify-between rounded-md mb-8">
            <div className="col1 flex items-center gap-4">
              <LiaShippingFastSolid size={50} />
              <span className="text-[24px] font-[600] uppercase">
                Free Shipping
              </span>
            </div>
            <div className="col2">
              <p className="mb-0 font-[500]">
                Free Delivery Now On Your First Order and over $200
              </p>
            </div>
            <div className="col3">
              <p className="text-[25px] font-bold">- Only $200*</p>
            </div>
          </div>

          <AdsBannerSlider items={4} />
        </div>
      </section>
      <section className="py-5 pt-0 bg-white">
        <div className="container">
          <h2 className="text-[20px] font-600]">Latest Products</h2>
          <ProdutsSlider items={6} />
          <AdsBannerSlider items={3} />
        </div>
      </section>
      <section className="py-5 pt-0 bg-white">
        <div className="container">
          <h2 className="text-[20px] font-600]">Featured Products</h2>
          <ProdutsSlider items={6} />
          <AdsBannerSlider items={3} />
        </div>
      </section>
      <section className="py-5 pb-8 pt-0 bg-white blogSection">
        <div className="container">
          <h2 className="text-[20px] font-600] mb-5">From The Blog</h2>
          <Swiper
            slidesPerView={4}
            spaceBetween={10}
            navigation={true}
            modules={[Navigation]}
            className="blogSlider"
          >
            <SwiperSlide><BlogItem/></SwiperSlide>
            <SwiperSlide><BlogItem/></SwiperSlide>
            <SwiperSlide><BlogItem/></SwiperSlide>
            <SwiperSlide><BlogItem/></SwiperSlide>
            <SwiperSlide><BlogItem/></SwiperSlide>
            <SwiperSlide><BlogItem/></SwiperSlide>
            <SwiperSlide><BlogItem/></SwiperSlide>
          </Swiper>
        </div>
      </section>
      <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />{" "}
      <br />
    </>
  );
};

export default HomePage;
