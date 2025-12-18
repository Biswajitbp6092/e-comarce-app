import React, { useEffect, useState } from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { Link, useParams } from "react-router-dom";
import ProductZoom from "../../components/ProductZoom/ProductZoom";

import { AiOutlineHeart } from "react-icons/ai";
import { LuGitCompare } from "react-icons/lu";

import ProdutsSlider from "../../components/ProdutsSlider/ProdutsSlider";
import ProductDetailsComponent from "../../components/ProductDetailsComponent/ProductDetailsComponent";
import { fetchDataFromApi } from "../../utlis/api";
import CircularProgress from "@mui/material/CircularProgress";
import Reviews from "./Reviews";
import { useRef } from "react";

const ProductDetails = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [productData, setProductData] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [reviewsCount, setReviewsCount] = useState(0);
  const [relatedProductData, setRelatedProductData] = useState([]);

  const { id } = useParams();

  const reviewSec = useRef();

  useEffect(() => {
    fetchDataFromApi(`/api/user/getReviews?productId=${id}`).then((res) => {
      if (res?.data?.error === false) {
        setReviewsCount(res?.data?.reviews.length);
      }
    });
  }, [reviewsCount]);

  useEffect(() => {
    setIsLoading(true);
    fetchDataFromApi(`/api/product/${id}`).then((res) => {
      if (res?.data?.error === false) {
        setProductData(res?.data?.product);
        fetchDataFromApi(
          `/api/product/getAllProductBySubCatId/${res?.data?.product?.subCatId}`
        ).then((res) => {
          if (res?.data?.error === false) {
            const filteredData = res?.data?.products?.filter(
              (item) => item._id !== id
            );
            setRelatedProductData(filteredData);
          }
        });
        setTimeout(() => {
          setIsLoading(false);
        }, 400);
      }
    });

    window.scrollTo(0, 0);
  }, [id]);

  const gotoReviews = () => {
    window.scrollTo({
      top: reviewSec?.current.offsetTop - 180,
      behavior: "smooth",
    });
    setActiveTab(1);
  };
  return (
    <>
      <div className="py-5">
        <div className="container">
          <Breadcrumbs aria-label="breadcrumb">
            <Link
              underline="hover"
              color="inherit"
              href="/"
              className="link transition ease-linear"
            >
              Home
            </Link>
            <Link
              underline="hover"
              color="inherit"
              href="/"
              className="link transition ease-linear"
            >
              Fashions
            </Link>

            <Link
              underline="hover"
              color="inherit"
              className="link transition ease-linear"
            >
              {productData?.name}
            </Link>
          </Breadcrumbs>
        </div>
      </div>

      <section className="bg-white py-5">
        {isLoading === true ? (
          <div className="flex items-center justify-center min-h-[300px]">
            <CircularProgress />
          </div>
        ) : (
          <>
            <div className="container flex gap-8 items-center">
              <div className="productZoomContainer w-[40%]">
                <ProductZoom images={productData?.images} />
              </div>

              <div className="productContain w-[60%] pr-10 pl-10">
                <ProductDetailsComponent
                  item={productData}
                  reviewsCount={reviewsCount}
                  gotoReviews={gotoReviews}
                />

                <div className="flex items-center gap-4 mt-6">
                  <span className="flex items-center gap-2 text-[15px] link cursor-pointer font-[500]">
                    <AiOutlineHeart size={22} />
                    Add to Wishlist
                  </span>
                  <span className="flex items-center gap-2 text-[15px] link cursor-pointer font-[500]">
                    <LuGitCompare size={22} />
                    Add to Compare
                  </span>
                </div>
              </div>
            </div>

            <div className="container pt-10">
              <div className="flex items-center gap-8 mb-5">
                <span
                  onClick={() => setActiveTab(0)}
                  className={`link text-[17px] cursor-pointer font-[500] ${
                    activeTab === 0 ? " text-[#ff5252]" : ""
                  }`}
                >
                  Description
                </span>

                <span
                  onClick={() => setActiveTab(1)}
                  ref={reviewSec}
                  className={`link text-[17px] cursor-pointer font-[500] ${
                    activeTab === 2 ? " text-[#ff5252]" : ""
                  }`}
                >
                  Reviews ({reviewsCount})
                </span>
              </div>

              {activeTab === 0 && (
                <div className="shadow-md w-full py-5 px-8 rounded-md">
                  {productData?.description}
                </div>
              )}

              {activeTab === 1 && (
                <div className="shadow-md w-[80%] py-5 px-8 rounded-md">
                  {productData?.length !== 0 && (
                    <Reviews
                      productId={productData?._id}
                      setReviewsCount={setReviewsCount}
                    />
                  )}
                </div>
              )}
            </div>
            {relatedProductData?.length !== 0 && (
              <div className="container pt-10">
                <h2 className="text-[20px] font-600]">Related Products</h2>
                <ProdutsSlider items={6} data={relatedProductData} />
              </div>
            )}
          </>
        )}
      </section>
    </>
  );
};

export default ProductDetails;
