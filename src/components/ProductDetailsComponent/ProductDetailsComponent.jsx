import React, { useState } from "react";
import QtyBox from "../QtyBox/QtyBox";
import { IoCartOutline } from "react-icons/io5";
import Button from "@mui/material/Button";
import Rating from "@mui/material/Rating";

const ProductDetailsComponent = (props) => {
  const [productActionIndex, setProductActionIndex] = useState(null);
  return (
    <>
      <h1 className="text-[24px] font-[500] mb-2">{props?.item?.name}</h1>
      <div className="flex items-center gap-3 text-[13px]">
        <span className="text-gray-500">
          Brands :{" "}
          <span className="font-[500] text-black opacity-75">
            {props?.item?.brand}
          </span>
        </span>
        <Rating name="size-small" defaultValue={4} size="small" readOnly />
        <span className="text-[13px] cursor-pointer" onClick={props.gotoReviews}>Review ({props.reviewsCount})</span>
      </div>
      <div className="flex items-center gap-4 mt-4">
        <span className="oldPrice line-through text-gray-500 text-[18px] font-[500]">
          &#x20b9; {props?.item?.oldPrice}
        </span>
        <span className="price text-[#ff5252] text-[18px] font-[600]">
          &#x20b9; {props?.item?.price}
        </span>
        <span className="text-[14px]">
          Available in Stock:{" "}
          <span className="text-green-500 text-[14px] font-medium">
            {props?.item?.countInStock}
          </span>
        </span>
      </div>
      <p className="mt-3 mb-5">{props?.item?.description}</p>

      {props?.item?.productRam?.length !== 0 && (
        <div className="flex items-center gap-3 actions">
          <span className="text-[16px]">RAM:</span>
          <div className="flex items-center gap-1">
            {props?.item?.productRam?.map((item, index) => {
              return (
                <Button
                  className={`${
                    productActionIndex === index ? "!bg-[#ff5252] !text-white" : ""
                  }`}
                  onClick={() => setProductActionIndex(index)}
                >
                  {item}
                </Button>
              );
            })}
          </div>
        </div>
      )}

      {props?.item?.size?.length !== 0 && (
        <div className="flex items-center gap-3 actions">
          <span className="text-[16px]">Size:</span>
          <div className="flex items-center gap-1">
            {props?.item?.size?.map((item, index) => {
              return (
                <Button
                  className={`${
                    productActionIndex === index ? "!bg-[#ff5252] !text-white" : ""
                  }`}
                  onClick={() => setProductActionIndex(index)}
                >
                  {item}
                </Button>
              );
            })}
          </div>
        </div>
      )}
      {props?.item?.productWeight?.length !== 0 && (
        <div className="flex items-center gap-3 actions">
          <span className="text-[16px]">Weight:</span>
          <div className="flex items-center gap-1">
            {props?.item?.productWeight?.map((item, index) => {
              return (
                <Button
                  className={`${
                    productActionIndex === index ? "!bg-[#ff5252] !text-white" : ""
                  }`}
                  onClick={() => setProductActionIndex(index)}
                >
                  {item}
                </Button>
              );
            })}
          </div>
        </div>
      )}

      <p className="text-[14px] mt-5 mb-2 text-[#000]">
        Free Shipping (Est. Delivery Time 2-3 Days)
      </p>
      <div className="flex items-center mt-4 gap-4 ">
        <div className="qtyBoxWrapper w-[70px]">
          <QtyBox />
        </div>
        <Button className="btn-org flex gap-2">
          <IoCartOutline size={24} />
          Add to Cart
        </Button>
      </div>
    </>
  );
};

export default ProductDetailsComponent;
