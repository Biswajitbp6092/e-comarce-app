import React from "react";
import "./BannerBoxAds.css";
import { Link } from "react-router-dom";

const BannerBoxAds = (props) => {
  return (
    <div className="bannerBoxAds w-full overflow-hidden rounded-md group relative">
      <img
        src={props.images}
        alt=""
        className="w-full transition ease-linear duration-150 group-hover:scale-105"
      />
      <div
        className={`info absolute p-5 top-0 ${
          props.info === "left" ? "left-0" : "right-0"
        } w-[50%] h-[100%] z-50 flex items-center justify-center flex-col gap-2`}
      >
        <h2 className="text-[20px] font-[600]">Samsung Gear VR Camera</h2>
        <span className="text-[25px] font-[600] text-[#ff5252] w-full">
          $129.00
        </span>
        <div className="w-full">
          <Link to="/" className="text-[16px] font-[600] link underline transition ease-linear duration-150">SHOP NOw</Link>
        </div>
      </div>
    </div>
  );
};

export default BannerBoxAds;
