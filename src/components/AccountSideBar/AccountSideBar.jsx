import React, { useContext, useEffect, useState } from "react";
import { FaRegUser } from "react-icons/fa";
import { BsBagCheck } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { IoIosLogOut } from "react-icons/io";
import { NavLink } from "react-router-dom";
import { FaCloudUploadAlt } from "react-icons/fa";
import Button from "@mui/material/Button";
import { myContext } from "../../App";
import CircularProgress from "@mui/material/CircularProgress";
import { uploadImage } from "../../utlis/api";
import { LuMapPinPlusInside } from "react-icons/lu";

const AccountSideBar = () => {
  const [previews, setPreviews] = useState([]);
  const [uploading, setUploading] = useState(false);

  const context = useContext(myContext);

  useEffect(() => {
    const userAvatar = [];
    if (
      context?.userData?.avatar !== "" &&
      context?.userData?.avatar !== undefined
    ) {
      userAvatar.push(context?.userData?.avatar);
      setPreviews(userAvatar);
    }
  }, [context?.userData]);

  let selectedImages = [];

  const formData = new FormData();

  const onChangeFile = async (e, apiEndpoint) => {
    try {
      setPreviews([]);
      const files = e.target.files;
      setUploading(true);

      for (let i = 0; i < files.length; i++) {
        if (
          files[i] &&
          (files[i].type === "image/jpeg" ||
            files[i].type === "image/jpg" ||
            files[i].type === "image/png" ||
            files[i].type === "image/webp")
        ) {
          const file = files[i];
          selectedImages.push(file);
          formData.append("avatar", file);
        } else {
          context.openAlartBox(
            "Error",
            "please select a valid JPG,PNG or webp image file"
          );
          setUploading(false);
          return false;
        }

        uploadImage("/api/user/user-avatar", formData).then((res) => {
          setUploading(false);
          let avatar = [];

          avatar.push(res?.data?.avatar);
          setPreviews(avatar);
          
        });
      }
    } catch (error) {
     
    }
  };

  return (
    <div className="card bg-white shadow-md rounded-md sticky top-[165px]">
      <div className="w-full p-5 flex items-center justify-center flex-col">
        <div className="w-[100px] h-[100px] rounded-full overflow-hidden mb-4 relative group flex items-center justify-center bg-gray-200">
          {uploading === true ? (
            <CircularProgress color="inherit" />
          ) : (
            <>
              {previews?.length !== 0 ? (
                previews?.map((img, index) => (
                  <img
                    src={img}
                    key={index}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                ))
              ) : (
                <img
                  src="/user.svg"
                  alt="default avatar"
                  className="w-full h-full object-cover"
                />
              )}
            </>
          )}

          <div className="overlay w-[100%] h-[100%] absolute top-0 left-0 z-50 bg-[rgba(0,0,0,0.7)] flex items-center justify-center cursor-pointer opacity-0 transition-all ease-linear group-hover:opacity-100">
            <FaCloudUploadAlt className="text-[#fff] text-[25px]" />
            <input
              type="file"
              className="absolute top-0 lrft-0 w-full h-full opacity-0"
              accept="image/*"
              onChange={(e) => onChangeFile(e, "/api/user/user-avatar")}
              name="avatar"
            />
          </div>
        </div>
        <h3>{context?.userData?.name}</h3>
        <h6 className="text-[13px] font-[500]">{context?.userData?.email}</h6>
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
          <NavLink to="/address" exact={true} activeClassName="isActive">
            <Button className="w-full !text-left !px-5 !justify-start !text-[rgba(0,0,0,0.8)] !capitalize !rounded-none flex items-center gap-2">
              <LuMapPinPlusInside className="text-[18px]" />
              Address
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
