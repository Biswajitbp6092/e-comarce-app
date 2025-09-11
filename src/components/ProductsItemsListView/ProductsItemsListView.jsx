import React from "react";
import "./ProductsItems.css";
import { Link } from "react-router-dom";
import Rating from "@mui/material/Rating";
import Button from "@mui/material/Button";
import { FaRegHeart } from "react-icons/fa";
import { GoGitCompare } from "react-icons/go";
import { MdOutlineZoomOutMap } from "react-icons/md";
import { MdShoppingCart } from "react-icons/md";



const ProductsItemsListView = () => {
  return (
    <div className="productsItems shadow-lg rounded-md overflow-hidden  flex items-center">
      <div className="group imgWrapper w-[25%] overflow-hidden rounded-md relative">
        <Link to="/">
          <div className="img h-[200px] overflow-hidden">
            <img
              src="https://serviceapi.spicezgold.com/download/1753722939206_125c18d6-592d-4082-84e5-49707ae9a4fd1749366193911-Flying-Machine-Women-Wide-Leg-High-Rise-Light-Fade-Stretchab-1.jpg"
              alt="Product Img"
              className="w-full"
            />
            <img
              src="https://serviceapi.spicezgold.com/download/1753722939207_5107b7b1-ba6d-473c-9195-8576a6a0a9611749366193848-Flying-Machine-Women-Wide-Leg-High-Rise-Light-Fade-Stretchab-3.jpg"
              alt="Product Img"
              className="w-full absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-linear group-hover:scale-105"
            />
          </div>
        </Link>
        <span className="discount flex items-center absolute top-[10px] left-[10px] z-5 bg-[#ff5252] text-white rounded-lg p-1 text-[12px] font-[500]">
          10%
        </span>

        <div className="actions absolute top-[-15px] right-[5px] z-5 flex items-center gap-2 flex-col w-[50px] transition-all duration-300 group-hover:top-[15px] opacity-0 group-hover:opacity-100">
          <Button className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !text-black !bg-white hover:!bg-[#ff5252] hover:!text-white transition-all duration-300 ease-in">
            <MdOutlineZoomOutMap size={18} />
          </Button>
          <Button className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !text-black !bg-white hover:!bg-[#ff5252] hover:!text-white transition-all duration-300 ease-in">
            <GoGitCompare size={18} />
          </Button>
          <Button className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !text-black !bg-white hover:!bg-[#ff5252] hover:!text-white transition-all duration-300 ease-in">
            <FaRegHeart size={18} />
          </Button>
        </div>
      </div>
      <div className="info px-8 p-3 py-5 w-[75%]">
        <h6 className="text-[15px]">
          <Link to="/" className="link transition-all">
            Flying Machine
          </Link>
        </h6>
        <h3 className="text-[18px] title mt-3 font-[500] mb-3 text-[rgba(0,0,0,0.9)]">
          <Link to="/" className="link transition-all">
            Women Wide Leg High-Rise ...
          </Link>
        </h3>
        <p className="text-[14px] mb-3">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
        <Rating name="size-small" defaultValue={4} size="small" readOnly />
        <div className="flex items-center gap-4">
          <span className="old-price line-through text-gray-600 text-[15px] font-[500]">
            $58.00
          </span>
          <span className="price text-[#ff5252] font-[500] text-[15px]">
            $58.00
          </span>
        </div>
        <div className="mt-3">
          <Button className="btn-org flex gap-2"><MdShoppingCart size={22}/>Add to Cart</Button>
        </div>
      </div>
    </div>
  );
};

export default ProductsItemsListView;
