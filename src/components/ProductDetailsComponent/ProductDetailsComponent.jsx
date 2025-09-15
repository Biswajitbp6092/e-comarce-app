import React, { useState } from "react";
import QtyBox from "../QtyBox/QtyBox";
import { IoCartOutline } from "react-icons/io5";
import Button from "@mui/material/Button";
import Rating from "@mui/material/Rating";

const ProductDetailsComponent = () => {
  const [productActionIndex, setProductActionIndex] = useState(null);
  return (
    <>
      <h1 className="text-[24px] font-[500] mb-2">
        Embellished Sequinned Ready to Wear Saree Embellished Sequinned Ready to
        Wear Saree
      </h1>
      <div className="flex items-center gap-3 text-[13px]">
        <span className="text-gray-500">
          Brands :{" "}
          <span className="font-[500] text-black opacity-75">Tikhi Imli</span>
        </span>
        <Rating name="size-small" defaultValue={4} size="small" readOnly />
        <span className="text-[13px] cursor-pointer">Review</span>
      </div>
      <div className="flex items-center gap-4 mt-4">
        <span className="oldPrice line-through text-gray-500 text-[18px] font-[500]">
          $58.00
        </span>
        <span className="price text-[#ff5252] text-[18px] font-[600]">
          $58.00
        </span>
        <span className="text-[14px]">
          Available in Stock:{" "}
          <span className="text-green-500 text-[14px] font-medium">
            147 Items
          </span>
        </span>
      </div>
      <p className="mt-3 mb-5">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum
        perferendis rerum ratione ut consectetur inventore! Animi nisi, a
        eligendi deserunt non ab dolores quos, temporibus ipsam error atque
        suscipit magni?
      </p>

      <div className="flex items-center gap-3 actions">
        <span className="text-[16px]">size:</span>
        <div className="flex items-center gap-1">
          <Button
            className={`${
              productActionIndex === 0 ? "!bg-[#ff5252] !text-white" : ""
            }`}
            onClick={() => setProductActionIndex(0)}
          >
            S
          </Button>
          <Button
            className={`${
              productActionIndex === 1 ? "!bg-[#ff5252] !text-white" : ""
            }`}
            onClick={() => setProductActionIndex(1)}
          >
            M
          </Button>
          <Button
            className={`${
              productActionIndex === 2 ? "!bg-[#ff5252] !text-white" : ""
            }`}
            onClick={() => setProductActionIndex(2)}
          >
            L
          </Button>
          <Button
            className={`${
              productActionIndex === 3 ? "!bg-[#ff5252] !text-white" : ""
            }`}
            onClick={() => setProductActionIndex(3)}
          >
            XL
          </Button>
        </div>
      </div>
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
