import React, { useContext, useEffect, useState } from "react";
import HomeSlider from "../../components/HomeSlider/HomeSlider";
import HomeCatSlider from "../../components/HomeCatSlider/HomeCatSlider";
import { LiaShippingFastSolid } from "react-icons/lia";
import AdsBannerSlider from "../../components/AdsBannerSlider/AdsBannerSlider";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
// import Box from "@mui/material/Box";
import ProdutsSlider from "../../components/ProdutsSlider/ProdutsSlider";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import BlogItem from "../../components/BlogItem/BlogItem";

import HomeSliderAds from "../../components/HomeSliderAds/HomeSliderAds";
import BannerBoxAds from "../../components/BannerBoxAds/BannerBoxAds";
import AdsBannerSliderV2 from "../../components/AdsBannerSliderV2/AdsBannerSliderV2";
import { myContext } from "../../App";
import { fetchDataFromApi } from "../../utlis/api";

const HomePage = () => {
  const [value, setValue] = useState(0);
  // const [homeSlidesData, setHomeSlidesData] = useState([]);
  const [popularProductsData, setPopularProductsData] = useState([]);
  const [productData, setAllProductData] = useState([]);
  const [featuredProduct, setFeaturedProduct] = useState([]);

  const context = useContext(myContext);

  useEffect(() => {
    // fetchDataFromApi("/api/homeSlides").then((res)=>{
    //   setHomeSlidesData(res?.data?.data)
    // })
    fetchDataFromApi("/api/product/getAllProducts").then((res)=>{
      if(res?.data?.error === false){
        setAllProductData(res?.data?.products)
      }
    })
    fetchDataFromApi("/api/product/getAllFeaturedProduct").then((res)=>{
      if(res?.data?.error === false){
        setFeaturedProduct(res?.data?.products)
      }
    })

   
  });

  useEffect(()=>{
    fetchDataFromApi(`/api/product/getAllProductByCatId/${context?.catData[0]?._id}`).then((res) => {     
      if (res?.data?.error === false) {
        setPopularProductsData(res?.data?.products);
      }
    });

  },[context?.catData])

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const filterByCatId = (id) => {
    fetchDataFromApi(`/api/product/getAllProductByCatId/${id}`).then((res) => {     
      if (res?.data?.error === false) {
        setPopularProductsData(res?.data?.products);
      }
    });
  };

  return (
    <>
      <HomeSlider />
      <section className="py-6">
        <div className="container flex gap-5">
          <div className="part1 w-[70%] overflow-hidden">
            <HomeSliderAds />
          </div>
          <div className="part2 w-[30%] flex items-center gap-5 justify-between flex-col">
            <BannerBoxAds
              info="left"
              images={
                "https://demos.codezeel.com/prestashop/PRS21/PRS210502/img/cms/sub-banner-1.jpg"
              }
            />
            <BannerBoxAds
              info="right"
              images={
                "https://demos.codezeel.com/prestashop/PRS21/PRS210502/img/cms/sub-banner-2.jpg"
              }
            />
          </div>
        </div>
      </section>
      {context?.catData?.length !== 0 && (
        <HomeCatSlider data={context?.catData} />
      )}

      <section className="bg-white py-8">
        <div className="container">
          <div className="flex items-center justify-between">
            <div className="leftsec w-[40%]">
              <h3 className="text-[20px] font-[600]">Popular Products</h3>
              <p className="text-[14px] font-[400] mt-0 mb-0">
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
                {context?.catData?.length !== 0 && context?.catData?.map((cat, index) => {
                    return (
                      <Tab
                        label={cat?.name}
                        onClick={() => filterByCatId(cat?._id)}
                      />
                    );
                  })}
              </Tabs>
            </div>
          </div>
          {
            popularProductsData?.length !== 0 && <ProdutsSlider items={6} data={popularProductsData} />
          }
         
          
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

          <AdsBannerSliderV2 items={4} />
        </div>
      </section>
      <section className="py-5 pt-0 bg-white">
        <div className="container">
          <h2 className="text-[20px] font-600]">Latest Products</h2>
          {
            productData?.length !== 0 && <ProdutsSlider items={6} data={productData} />
          }
         
          <AdsBannerSlider items={3} />
        </div>
      </section>
      <section className="py-5 pt-0 bg-white">
        <div className="container">
          <h2 className="text-[20px] font-600]">Featured Products</h2>
          {
            featuredProduct?.length !== 0 && <ProdutsSlider items={6} data={featuredProduct}/>
          }
          
          <AdsBannerSlider items={3} />
        </div>
      </section>
      <section className="py-5 pb-8 pt-0 bg-white blogSection">
        <div className="container">
          <h2 className="text-[20px] font-600] mb-5">From The Blog</h2>
          <Swiper
            slidesPerView={4}
            spaceBetween={15}
            navigation={true}
            modules={[Navigation]}
            className="blogSlider"
          >
            <SwiperSlide>
              <BlogItem />
            </SwiperSlide>
            <SwiperSlide>
              <BlogItem />
            </SwiperSlide>
            <SwiperSlide>
              <BlogItem />
            </SwiperSlide>
            <SwiperSlide>
              <BlogItem />
            </SwiperSlide>
            <SwiperSlide>
              <BlogItem />
            </SwiperSlide>
            <SwiperSlide>
              <BlogItem />
            </SwiperSlide>
            <SwiperSlide>
              <BlogItem />
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default HomePage;
