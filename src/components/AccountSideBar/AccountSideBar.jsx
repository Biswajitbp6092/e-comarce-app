import React from "react";
import { FaRegUser } from "react-icons/fa";
import { BsBagCheck } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { IoIosLogOut } from "react-icons/io";
import { NavLink } from "react-router-dom";
import { FaCloudUploadAlt } from "react-icons/fa";
import Button from "@mui/material/Button";

const AccountSideBar = () => {
  return (
    <div className="card bg-white shadow-md rounded-md sticky top-[10px]">
      <div className="w-full p-5 flex items-center justify-center flex-col">
        <div className="w-[100px] h-[100px] rounded-full overflow-hidden mb-4 relative group">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCzK6DKnIE7MM_7cuaQAJlpxUHYs8yKDT3yg&s"
            alt=""
            className="w-full h-full object-cover"
          />

          <div className="overlay w-[100%] h-[100%] absolute top-0 left-0 z-50 bg-[rgba(0,0,0,0.7)] flex items-center justify-center cursor-pointer opacity-0 transition-all ease-linear group-hover:opacity-100">
            <FaCloudUploadAlt className="text-[#fff] text-[25px]" />
            <input
              type="file"
              className="absolute top-0 lrft-0 w-full h-full opacity-0"
            />
          </div>
        </div>
        <h3>Biswajit Biswas</h3>
        <h6 className="text-[13px] font-[500]">biswajitbp6092@gmail.com</h6>
      </div>

      <ul className="list-none pb-5 space-y-1 myAccountTabs">
        <li className="w-full">
          <NavLink to="/my-account" exact={true} activeClassName="isActive">
            <Button className="w-full !text-left !px-5 !justify-start !text-[rgba(0,0,0,0.8)] !capitalize !rounded-none flex items-center gap-2">
              <FaRegUser className="text-[17px]" />
              My Profile
            </Button>
          </NavLink>
        </li>

        <li className="w-full">
          <NavLink to="/my-list" exact={true} activeClassName="isActive">
            <Button className="w-full !text-left !px-5 !justify-start !text-[rgba(0,0,0,0.8)] !capitalize !rounded-none flex items-center gap-2">
              <FaRegHeart className="text-[17px]" />
              My List
            </Button>
          </NavLink>
        </li>

        <li className="w-full">
          <NavLink to="/my-orders" exact={true} activeClassName="isActive">
            <Button className="w-full !text-left !px-5 !justify-start !text-[rgba(0,0,0,0.8)] !capitalize !rounded-none flex items-center gap-2">
              <BsBagCheck className="text-[17px]" />
              My orders
            </Button>
          </NavLink>
        </li>

        <li className="w-full">
          <Button className="w-full !text-left !px-5 !justify-start !text-[rgba(0,0,0,0.8)] !capitalize !rounded-none flex items-center gap-2">
            <IoIosLogOut className="text-[20px]" />
            Logout
          </Button>
        </li>
      </ul>
    </div>
    
  );
};

export default AccountSideBar;
