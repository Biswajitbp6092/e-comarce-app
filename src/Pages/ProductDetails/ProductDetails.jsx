import React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { Link } from "react-router-dom";
import ProductZoom from "../../components/ProductZoom/ProductZoom";
import Rating from "@mui/material/Rating";

const ProductDetails = () => {
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
              Croped Satin Bomber Jacket
            </Link>
          </Breadcrumbs>
        </div>
      </div>
      <section className="bg-white py-5">
        <div className="container flex gap-8">
          <div className="productZoomContainer w-[40%]">
            <ProductZoom />
          </div>
          <div className="productContain w-[60%]">
            <h1 className="text-[22px] font-[500] mb-2">
              Embellished Sequinned Ready to Wear Saree
            </h1>
            <div className="flex items-center gap-3 text-[13px]">
              <span className="text-gray-500">
                Brands :{" "}
                <span className="font-[500] text-black opacity-75">
                  Tikhi Imli
                </span>
              </span>
              <Rating
                name="size-small"
                defaultValue={4}
                size="small"
                readOnly
              />
              <span className="text-[13px] cursor-pointer">Review</span>
            </div>
            <div className="flex items-center gap-4 mt-4">
              <span className="oldPrice line-through text-gray-500 text-[18px] font-[500]">
                $58.00
              </span>
              <span className="price text-[#ff5252] text-[18px] font-[600]">
                $58.00
              </span>
            </div>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum
              perferendis rerum ratione ut consectetur inventore! Animi nisi, a
              eligendi deserunt non ab dolores quos, temporibus ipsam error
              atque suscipit magni?
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetails;
