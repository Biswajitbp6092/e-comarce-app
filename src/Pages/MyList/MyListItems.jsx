import React, { useContext } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import Rating from "@mui/material/Rating";
import { myContext } from "../../App";
import { deleteData } from "../../utlis/api";

const MyListItems = (props) => {
  const context = useContext(myContext);

  const removeItem = (id) => {
    deleteData(`/api/mylist/${id}`).then((res) => {
      context?.openAlartBox("Sucess","the item remove form My List");
      context?.getMyListData();
    });
  };

  return (
    <div className="cartItem w-full py-3 flex items-center gap-4 pb-5 border-b border-[rgba(0,0,0,0.2)]">
      <div className="img w-[15%] h-[150px] rounded-md overflow-hidden">
        <Link to={`/product/${props?.item?.productId}`} className="group">
          <img
            src={props?.item?.image}
            alt=""
            className="w-full group-hover:scale-105 transition-all"
          />
        </Link>
      </div>
      <div className="info w-[85%] relative">
        <IoCloseSharp size={22}
          className="cursor-pointer absolute top-[0px] right-[0px] link transition-all"
          onClick={() => removeItem(props?.item?._id)}
        />
        <span className="text-[13px]"> {props?.item?.brand}</span>
        <h3 className="font-[16px]">
          <Link to={`/product/${props?.item?.productId}`} className="link">
            {props?.item?.productTitle?.length > 80
              ? props?.item?.productTitle.slice(0, 80) + "..."
              : props?.item?.productTitle}
          </Link>
        </h3>
        <Rating
          name="size-small"
          value={props?.item?.rating}
          size="small"
          readOnly
        />

        <div className="flex items-center gap-4 mt-2 mb-2">
          <span className="price text-black text-[14px] font-[600]">
            &#x20b9;{props?.item?.price}.00
          </span>
          <span className="oldPrice line-through text-gray-500 text-[14px] font-[500]">
            &#x20b9;{props?.item?.oldPrice}.00
          </span>
          <span className="price text-[#ff5252] text-[14px] font-[600]">
            {props?.item?.discount}% OFF
          </span>
        </div>
      </div>
    </div>
  );
};

export default MyListItems;
