import React, { useContext } from "react";
import "./ProductsItems.css";
import { Link } from "react-router-dom";
import Rating from "@mui/material/Rating";
import Button from "@mui/material/Button";
import { FaRegHeart } from "react-icons/fa";
import { GoGitCompare } from "react-icons/go";
import { MdOutlineShoppingCart, MdOutlineZoomOutMap } from "react-icons/md";
import { myContext } from "../../App";

const ProductsItems = (props) => {
  const context = useContext(myContext);
  return (
    <div className="productsItems shadow-lg rounded-md overflow-hidden">
      <div className="group imgWrapper w-[100%] overflow-hidden rounded-md relative">
        <Link to={`/product/${props?.item?._id}`}>
          <div className="img h-[220px] overflow-hidden">
            <img
              src={props?.item?.images[0]}
              alt="Product Img"
              className="w-full"
            />
            <img
              src={props?.item?.images[1]}
              alt="Product Img"
              className="w-full absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-linear group-hover:scale-105"
            />
          </div>
        </Link>
        <span className="discount flex items-center absolute top-[10px] left-[10px] z-5 bg-[#ff5252] text-white rounded-lg p-1 text-[12px] font-[500]">
          {props?.item?.discount}%
        </span>

        <div className="actions absolute top-[-15px] right-[5px] z-5 flex items-center gap-2 flex-col w-[50px] transition-all duration-300 group-hover:top-[15px] opacity-0 group-hover:opacity-100">
          <Button
            onClick={() =>
              context.handleOpenProductDetailsModal(true, props?.item)
            }
            className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !text-black !bg-white hover:!bg-[#ff5252] hover:!text-white transition-all duration-300 ease-in"
          >
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

      <div className="info p-3 py-5 relative pb-[50px] h-[170px]">
        <h6 className="text-[12px] text-gray-600 font-light capitalize">
          {props?.item?.brand}
        </h6>
        <h3 className="text-[14px] title mt-1 font-[400] mb-1 text-[rgba(30,30,30,0.9)]">
          <Link
            to={`/product/${props?.item?._id}`}
            className="link transition-all block truncate max-w-[200px]"
          >
            {props?.item?.name}
          </Link>
        </h3>
        <Rating
          name="size-small"
          defaultValue={props?.item?.rating}
          size="small"
          readOnly
        />
        <div className="flex items-center gap-4">
          <span className="old-price line-through text-gray-600 text-[15px] font-[500]">
            &#x20b9; {props?.item?.oldPrice}
          </span>
          <span className="price text-[#ff5252] font-[500] text-[15px]">
            &#x20b9; {props?.item?.price}
          </span>
        </div>
        <div className="!absolute bottom-[15px] left-0 pl-3 pr-3 w-full">
          <Button className="btn-org flex w-full btn-sm gap-2" size="small">
            <MdOutlineShoppingCart className="text-[18px]" /> Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductsItems;
