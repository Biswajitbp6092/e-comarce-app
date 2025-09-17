import React from "react";
import { FaCloudUploadAlt } from "react-icons/fa";
import Button from "@mui/material/Button";
import { FaRegUser } from "react-icons/fa";
import { BsBagCheck } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { IoIosLogOut } from "react-icons/io";
import { NavLink } from "react-router-dom";
import TextField from "@mui/material/TextField";

const MyAccount = () => {
  return (
    <section className="py-10 w-full">
      <div className="container flex gap-5">
        <div className="col1 w-[20%]">
          <div className="card bg-white shadow-md rounded-md">
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
              <h6 className="text-[13px] font-[500]">
                biswajitbp6092@gmail.com
              </h6>
            </div>

            <ul className="list-none pb-5 space-y-1 myAccountTabs">
              <li className="w-full">
                <NavLink
                  to="/my-account"
                  exact={true}
                  activeClassName="isActive"
                >
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
                <NavLink
                  to="/my-orders"
                  exact={true}
                  activeClassName="isActive"
                >
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
        </div>

        <div className="col2 w-[50%]">
          <div className="card bg-white p-5 shadow-md rounded-md">
            <h2 className="pb-3">My Profile</h2>
            <hr />
            <form action="" className="mt-5">
              <div className="flex items-center gap-5">
                <div className="w-[50%]">
                  <TextField
                    label="Full Name"
                    variant="outlined"
                    size="small"
                    className="w-full"
                  />
                </div>

                <div className="w-[50%]">
                  <TextField
                    label="E-mail"
                    variant="outlined"
                    size="small"
                    className="w-full"
                  />
                </div>
              </div>

              <div className="flex items-center mt-4 gap-5">
                <div className="w-[50%]">
                  <TextField
                    label="Phone Number"
                    variant="outlined"
                    size="small"
                    className="w-full"
                  />
                </div>
              </div>
              <br />
              <div className="flex items-center gap-4">
                <Button className="btn-org btn-lg w-[100px]">Save</Button>
                <Button className="btn-border w-[100px]">Cancel</Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyAccount;
