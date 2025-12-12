import React from "react";
import { IoMdTime } from "react-icons/io";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";

const BlogItem = (props) => {
  const stripHtml = (html) => {
    let div = document.createElement("div");
    div.innerHTML = html;
    return div.textContent || div.innerText || "";
  };
  return (
    <div className="blogItem group ">
      <div className="imgWrapper w-full overflow-hidden rounded-md cursor-pointer relative">
        <img
          src={props?.item?.images[0]}
          alt="Blog img"
          className="w-full h-[170px] transition-all group-hover:scale-105 group-hover:rotate-1"
        />
        <span className="flex items-center justify-center text-white absolute bottom-[15px] right-[15px] z-50 bg-[#ff5252] rounded-md p-1 text-[11px] font-[500] gap-1">
          <IoMdTime size={16} />{props?.item?.createdAt?.split("T")[0]}
        </span>
      </div>
      <div className="info py-4">
        <h2 className="text-[16px] font-[500] text-black truncate w-[300px]">
          <Link to="/" className="link">
            {props?.item?.title}
          </Link>
        </h2>
        <p className="text-[15px] font-[400] text-[rgba(0,0,0,0.8)] mb-4">
          {stripHtml(props?.item?.description)?.substring(0, 200)}...
        </p>
        <Link className="link font-[500] text-[14px] flex items-center gap-1">
          Read more <FaArrowRight />
        </Link>
      </div>
    </div>
  );
};

export default BlogItem;
