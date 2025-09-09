import React from "react";
import { IoMdTime } from "react-icons/io";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";

const BlogItem = () => {
  return (
    <div className="blogItem group ">
      <div className="imgWrapper w-full overflow-hidden rounded-md cursor-pointer relative">
        <img
          src="https://serviceapi.spicezgold.com/download/1750304462017_1000005912.jpg"
          alt="Blog img"
          className="w-full transition-all group-hover:scale-105 group-hover:rotate-1"
        />
        <span className="flex items-center justify-center text-white absolute bottom-[15px] right-[15px] z-50 bg-[#ff5252] rounded-md p-1 text-[11px] font-[500] gap-1">
          <IoMdTime size={16} />5 April 2025
        </span>
      </div>
      <div className="info py-4">
        <h2 className="text-[16px] font-[500] text-black">
         <Link to="/" className="link">Turpis at eleifend Aenean porta</Link>
        </h2>
        <p className="text-[13px] font-[400] text-[rgba(0,0,0,0.8)] mb-4">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum
          consequatur ducimus vitae. Perferendis provident illo labore placeat.
        </p>
        <Link className="link font-[500] text-[14px] flex items-center gap-1">Read more <FaArrowRight/></Link>
      </div>
    </div>
  );
};

export default BlogItem;
