import React, { useRef, useState } from "react";
import InnerImageZoom from "react-inner-image-zoom";
import "react-inner-image-zoom/lib/styles.min.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const ProductZoom = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const zoomSliderBig = useRef();
  const zoomSliderSml = useRef();

  const goto = (index) => {
    setSlideIndex(index);
    zoomSliderSml.current.swiper.slideTo(index);
    zoomSliderBig.current.swiper.slideTo(index);
  };

  return (
    <>
      <div className="flex gap-3">
        <div className="slider w-[15%]">
          <Swiper
            ref={zoomSliderSml}
            direction={"vertical"}
            slidesPerView={5}
            spaceBetween={10}
            navigation={true}
            modules={[Navigation]}
            className="zoomProductSliderThums h-[500px] overflow-hidden"
          >
            <SwiperSlide>
              <div
                className={`item rounded-md overflow-hidden cursor-pointer group ${slideIndex===0 ? 'opacity-100':'opacity-35'}`}
                onClick={() => goto(0)}
              >
                <img
                  src="https://api.spicezgold.com/download/file_1734526629721_siril-poly-silk-white-beige-color-saree-with-blouse-piece-product-images-rv2vcdkuly-0-202304220523.webp"
                  alt=""
                  className="w-full transition-all ease-linear group-hover:scale-105"
                />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div
                className={`item rounded-md overflow-hidden cursor-pointer group ${slideIndex===1 ? 'opacity-100':'opacity-35'}`}
                onClick={() => goto(1)}
              >
                <img
                  src="https://api.spicezgold.com/download/file_1734526629721_siril-poly-silk-white-beige-color-saree-with-blouse-piece-product-images-rv2vcdkuly-1-202304220523.webp"
                  alt=""
                  className="w-full transition-all ease-linear group-hover:scale-105"
                />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div
                className={`item rounded-md overflow-hidden cursor-pointer group ${slideIndex===2 ? 'opacity-100':'opacity-35'}`}
                onClick={() => goto(2)}
              >
                <img
                  src="https://serviceapi.spicezgold.com/download/1742462287665_siril-poly-silk-white-beige-color-saree-with-blouse-piece-product-images-rv2vcdkuly-1-202304220523.webp"
                  alt=""
                  className="w-full transition-all ease-linear group-hover:scale-105"
                />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div
                className={`item rounded-md overflow-hidden cursor-pointer group ${slideIndex===3 ? 'opacity-100':'opacity-35'}`}
                onClick={() => goto(3)}
              >
                <img
                  src="https://serviceapi.spicezgold.com/download/1742462287664_siril-poly-silk-white-beige-color-saree-with-blouse-piece-product-images-rv2vcdkuly-2-202304220523.webp"
                  alt=""
                  className="w-full transition-all ease-linear group-hover:scale-105"
                />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div
                className={`item rounded-md overflow-hidden cursor-pointer group ${slideIndex===4 ? 'opacity-100':'opacity-35'}`}
                onClick={() => goto(4)}
              >
                <img
                  src="https://serviceapi.spicezgold.com/download/1742452096039_thth3.jpg"
                  alt=""
                  className="w-full transition-all ease-linear group-hover:scale-105"
                />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div
                className={`item rounded-md overflow-hidden cursor-pointer group ${slideIndex===5 ? 'opacity-100':'opacity-35'}`}
                onClick={() => goto(5)}
              >
                <img
                  src="https://serviceapi.spicezgold.com/download/1742452096038_thth1.jpg"
                  alt=""
                  className="w-full transition-all ease-linear group-hover:scale-105"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide></SwiperSlide>
          </Swiper>
        </div>

        <div className="zoomContainer w-[85%] h-[500px] overflow-hidden">
          <Swiper
            ref={zoomSliderBig}
            slidesPerView={1}
            spaceBetween={0}
            navigation={false}
          >
            <SwiperSlide>
              <InnerImageZoom
                zoomType="hover"
                zoomScale={1}
                src="https://api.spicezgold.com/download/file_1734526629721_siril-poly-silk-white-beige-color-saree-with-blouse-piece-product-images-rv2vcdkuly-0-202304220523.webp"
              />
            </SwiperSlide>

            <SwiperSlide>
              <InnerImageZoom
                zoomType="hover"
                zoomScale={1}
                src={
                  "https://api.spicezgold.com/download/file_1734526629721_siril-poly-silk-white-beige-color-saree-with-blouse-piece-product-images-rv2vcdkuly-1-202304220523.webp"
                }
              />
            </SwiperSlide>

            <SwiperSlide>
              <InnerImageZoom
                zoomType="hover"
                zoomScale={1}
                src="https://serviceapi.spicezgold.com/download/1742462287665_siril-poly-silk-white-beige-color-saree-with-blouse-piece-product-images-rv2vcdkuly-1-202304220523.webp"
              />
            </SwiperSlide>

            <SwiperSlide>
              <InnerImageZoom
                zoomType="hover"
                zoomScale={1}
                src="https://serviceapi.spicezgold.com/download/1742462287665_siril-poly-silk-white-beige-color-saree-with-blouse-piece-product-images-rv2vcdkuly-1-202304220523.webp"
              />
            </SwiperSlide>

            <SwiperSlide>
              <InnerImageZoom
                zoomType="hover"
                zoomScale={1}
                src="https://serviceapi.spicezgold.com/download/1742452096039_thth3.jpg"
              />
            </SwiperSlide>

            <SwiperSlide>
              <InnerImageZoom
                zoomType="hover"
                zoomScale={1}
                src="https://serviceapi.spicezgold.com/download/1742452096038_thth1.jpg"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default ProductZoom;
