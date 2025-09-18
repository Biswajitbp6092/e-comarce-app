import React, { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import Rating from "@mui/material/Rating";
import Button from "@mui/material/Button";

const MyListItems = (props) => {


  return (
    <div className="cartItem w-full py-3 flex items-center gap-4 pb-5 border-b border-[rgba(0,0,0,0.2)]">
      <div className="img w-[15%] rounded-md overflow-hidden">
        <Link to="/product/857" className="group">
          <img
            src="https://serviceapi.spicezgold.com/download/1753712430060_fireboltt-ninja-call-pro-plus-smart-watch-with-bluetooth-calling-black-digital-o493664720-p597671841-0-202501041659.webp"
            alt=""
            className="w-full group-hover:scale-105 transition-all"
          />
        </Link>
      </div>
      <div className="info w-[85%] relative">
        <IoCloseSharp className="cursor-pointer absolute top-[0px] right-[0px] link transition-all" />
        <span className="text-[13px]"> Tikhi Imli</span>
        <h3 className="font-[16px]">
          <Link to="/product/857" className="link">
            Embellished Sequinned Ready to Wear Saree
          </Link>
        </h3>
        <Rating name="size-small" defaultValue={4} size="small" readOnly />

        

        <div className="flex items-center gap-4 mt-2 mb-2">
          <span className="price text-black text-[14px] font-[600]">$58.00</span>
          <span className="oldPrice line-through text-gray-500 text-[14px] font-[500]">$58.00</span>
          <span className="price text-[#ff5252] text-[14px] font-[600]">55% OFF</span>
        </div>

        <Button className="btn-org btn-sm">Add to Cart</Button>
      </div>
    </div>
  );
};

export default MyListItems;
