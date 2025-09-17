import React, { useContext, useState } from "react";
import { Link} from "react-router-dom";
import Search from "../Search/Search";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import { IoCartOutline } from "react-icons/io5";
import { GoGitCompare } from "react-icons/go";
import Tooltip from "@mui/material/Tooltip";
import Navigation from "./Navigation/Navigation";
import { myContext } from "../../App";
import Button from "@mui/material/Button";
import { FaRegUser } from "react-icons/fa";

import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";
import { BsBagCheck } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { IoIosLogOut } from "react-icons/io";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: 0,
    top: 0,
    border: `2px solid ${(theme.vars ?? theme).palette.background.paper}`,
    padding: "0 4px",
  },
}));

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const Context = useContext(myContext);
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
          <div className="col1 w-[25%]">
            <Link to="/">
              {/* <h2 className="text-[22px] font-bold">ShopMate</h2> */}
              <img src="/logo.jpg" alt="" />
            </Link>
          </div>

          <div className="col2 w-[40%]">
            <Search />
          </div>

          <div className="col3 w-[35%] flex items-center justify-end pl-7">
            <ul className="flex items-center gap-3">
              {Context.isLogin === false ? (
                <li className="list-none text-base">
                  <Link to="/login" className="link transition">
                    Login
                  </Link>
                  &nbsp;/&nbsp;
                  <Link to="/register" className="link transition">
                    Register
                  </Link>
                </li>
              ) : (
                <>
                  <Button
                    onClick={handleClick}
                    className="!text-[#000] myAccountWrap flex items-center gap-3 cursor-pointer"
                  >
                    <Button className="!w-[40px] !h-[40px] !min-w-[40px] !rounded-full !bg-[#f1f1f1]">
                      <FaRegUser size={22} className="text-[rgba(0,0,0,0.7)]" />
                    </Button>
                    <div className="info flex flex-col">
                      <h4 className="leading-3 text-[14px] text-[rgba(0,0,0,0.7)] mb-0 font-[500] capitalize text-left justify-start">
                        Biswajit Biswas
                      </h4>
                      <p className="text-[13px] text-[rgba(0,0,0,0.7)]  !mb-0 !mt-0 font-[400] lowercase text-left justify-start">
                        biswajitbp6092@gmail.com
                      </p>
                    </div>
                  </Button>

                  <Menu
                    anchorEl={anchorEl}
                    id="account-menu"
                    open={open}
                    onClose={handleClose}
                    onClick={handleClose}
                    slotProps={{
                      paper: {
                        elevation: 0,
                        sx: {
                          overflow: "visible",
                          filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                          mt: 1.5,
                          "& .MuiAvatar-root": {
                            width: 32,
                            height: 32,
                            ml: -0.5,
                            mr: 1,
                          },
                          "&::before": {
                            content: '""',
                            display: "block",
                            position: "absolute",
                            top: 0,
                            right: 14,
                            width: 10,
                            height: 10,
                            bgcolor: "background.paper",
                            transform: "translateY(-50%) rotate(45deg)",
                            zIndex: 0,
                          },
                        },
                      },
                    }}
                    transformOrigin={{ horizontal: "right", vertical: "top" }}
                    anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
                  >
                    <Link to="/my-account">
                      <MenuItem
                        onClick={handleClose}
                        className="flex gap-2 !py-3"
                      >
                        <FaRegUser size={18} />{" "}
                        <span className="text-[14px]">My Account</span>
                      </MenuItem>
                    </Link>
                    <Link to="/my-orders">
                      <MenuItem
                        onClick={handleClose}
                        className="flex gap-2 !py-3"
                      >
                        <BsBagCheck size={18} />{" "}
                        <span className="text-[14px]">My Orders</span>
                      </MenuItem>
                    </Link>
                    <Link to="/my-list">
                      <MenuItem
                        onClick={handleClose}
                        className="flex gap-2 !py-3"
                      >
                        <FaRegHeart size={18} />{" "}
                        <span className="text-[14px]"> my List</span>
                      </MenuItem>
                    </Link>
                    <MenuItem
                      onClick={handleClose}
                      className="flex gap-2 !py-3"
                    >
                      <IoIosLogOut size={18} />{" "}
                      <span className="text-[14px]">Logout</span>
                    </MenuItem>
                    <Divider />
                  </Menu>
                </>
              )}
              <li>
                <Tooltip title="Compare">
                  <IconButton aria-label="cart">
                    <StyledBadge badgeContent={4} color="secondary">
                      <GoGitCompare />
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
                <Tooltip title="Cart">
                  <IconButton
                    aria-label="cart"
                    onClick={() => Context.setOpenCartPanel(true)}
                  >
                    <StyledBadge badgeContent={4} color="secondary">
                      <IoCartOutline size={30} />
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
