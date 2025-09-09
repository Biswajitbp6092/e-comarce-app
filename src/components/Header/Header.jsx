import React from "react";
import { Link } from "react-router-dom";
import Search from "../Search/Search";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import { IoCartOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { GoGitCompare } from "react-icons/go";
import Tooltip from "@mui/material/Tooltip";
import Navigation from "./Navigation/Navigation";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: 0,
    top: 0,
    border: `2px solid ${(theme.vars ?? theme).palette.background.paper}`,
    padding: "0 4px",
  },
}));

const Header = () => {
  return (
    <header className="header-section bg-white">
      <div className="top-strip py-2 border-t-2 border-b-2 border-gray-200">
        <div className="container">
          <div className="flex items-center justify-between">
            <div className="col1 w-[50%]">
              <p className="text-[14px]">
                Get up to 50% off new season styles, limited time only
              </p>
            </div>
            <div className="col2 flex items-center justify-end ">
              <ul className="flex items-center gap-4 text-gray-600">
                <li className="list-none">
                  <Link
                    to="/help-center"
                    className="text-[14px] link font-[500] transition"
                  >
                    Help Center
                  </Link>
                </li>
                |
                <li className="list-none">
                  <Link
                    to="/order-tracking"
                    className="text-[14px] link font-[500] transition"
                  >
                    Order Tracking
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="header py-4 border-b-2 border-gray-200">
        <div className="container flex items-center justify-between">
          <div className="col1 w-[30%]">
            <Link to="/">
              {/* <h2 className="text-[22px] font-bold">ShopMate</h2> */}
              <img src="/logo.jpg" alt="" />
            </Link>
          </div>
          <div className="col2 w-[40%]">
            <Search />
          </div>

          <div className="col3 w-[30%] flex items-center justify-end">
            <ul className="flex items-center gap-3">
              <li className="list-none text-base">
                <Link to="/login" className="link transition">
                  Login
                </Link>
                &nbsp;/&nbsp;
                <Link to="/register" className="link transition">
                  Register
                </Link>
              </li>
              <li>
                <Tooltip title="Cart">
                  <IconButton aria-label="cart">
                    <StyledBadge badgeContent={4} color="secondary">
                      <IoCartOutline size={30} />
                    </StyledBadge>
                  </IconButton>
                </Tooltip>
              </li>
              <li>
                 <Tooltip title="Wishlist">
                <IconButton aria-label="Wishlist">
                  <StyledBadge badgeContent={4} color="secondary">
                    <FaRegHeart />
                  </StyledBadge>
                </IconButton>
                </Tooltip>
              </li>
              <li>
                 <Tooltip title="Compare">
                <IconButton aria-label="cart">
                  <StyledBadge badgeContent={4} color="secondary">
                    <GoGitCompare />
                  </StyledBadge>
                </IconButton>
                </Tooltip>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Navigation />
    </header>
  );
};

export default Header;
