import React, { useState } from "react";
import SideBar from "../../components/SideBar/SideBar";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import ProductsItems from "../../components/ProductsItems/ProductsItems";
import ProductsItemsListView from "../../components/ProductsItemsListView/ProductsItemsListView";
import Button from "@mui/material/Button";
import { IoGrid } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Pagination from "@mui/material/Pagination";

const ProductListing = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [itemView, setItemView] = useState("grid");
  return (
    <section className="py-5 pb-0">
      <div className="container">
        <Breadcrumbs aria-label="breadcrumb">
          <Link
            underline="hover"
            color="inherit"
            href="/"
            className="link transition ease-linear"
          >
            Home
          </Link>
          <Link
            underline="hover"
            color="inherit"
            href="/"
            className="link transition ease-linear"
          >
            Fashions
          </Link>
        </Breadcrumbs>
      </div>
      <div className="bg-white p-2 mt-4">
        <div className="container flex gap-3">
          <div className="sideBarWrapper w-[20%] h-full bg-white">
            <SideBar />
          </div>

          <div className="rightContent w-[80%] py-3">
            <div className="bg-[#f1f1f1] w-full mb-4 rounded-md flex items-center justify-between">
              <div className="col1 flex items-center itemViewAction">
                <Button
                  className={`!w-[40px] !h-[40px] !min-w-[40px] !rounded-full !text-black ${
                    itemView === "list" && "active"
                  }`}
                  onClick={() => setItemView("list")}
                >
                  <GiHamburgerMenu className="text-[rgba(0,0,0,0.7)]" />
                </Button>
                <Button
                  className={`!w-[40px] !h-[40px] !min-w-[40px] !rounded-full !text-black ${
                    itemView === "grid" && "active"
                  }`}
                  onClick={() => setItemView("grid")}
                >
                  <IoGrid className="text-[rgba(0,0,0,0.7)]" />
                </Button>
                <span className="text-[14px] font-[500] pl-3 text-[rgba(0,0,0,0.7)]">
                  There are 27 Products
                </span>
              </div>

              <div className="col2 ml-auto flex items-center justify-end">
                <span className="text-[14px] font-[500] pl-3 text-[rgba(0,0,0,0.7)]">
                  Short By :
                </span>
                <Button
                  id="basic-button"
                  aria-controls={open ? "basic-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  onClick={handleClick}
                  className="!w-[200px] !text-left !pl-0 !bg-white !text-[16px] !text-[#000] !capitalize !border-1 !border-[rgba(0,0,0,0.5)]"
                >
                  Relevance
                </Button>
                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  slotProps={{
                    list: {
                      "aria-labelledby": "basic-button",
                    },
                  }}
                >
                  <MenuItem onClick={handleClose}>
                    Sales, highest to lowest
                  </MenuItem>
                  <MenuItem onClick={handleClose}>Relevance</MenuItem>
                  <MenuItem onClick={handleClose}>Name, A to Z</MenuItem>
                  <MenuItem onClick={handleClose}>Name, Z to A</MenuItem>
                  <MenuItem onClick={handleClose}>Price, Low to High</MenuItem>
                  <MenuItem onClick={handleClose}>Price, High to Low</MenuItem>
                </Menu>
              </div>
            </div>
            <div
              className={`grid ${
                itemView === "grid"
                  ? "grid-cols-4 md:grid-cols-4"
                  : "grid-cols-1 md:grid-cols-1"
              }  gap-4`}
            >
              {itemView === "grid" ? (
                <>
                  <ProductsItems />
                  <ProductsItems />
                  <ProductsItems />
                  <ProductsItems />
                  <ProductsItems />
                  <ProductsItems />
                  <ProductsItems />
                  <ProductsItems />
                </>
              ) : (
                <>
                  <ProductsItemsListView />
                  <ProductsItemsListView />
                  <ProductsItemsListView />
                  <ProductsItemsListView />
                  <ProductsItemsListView />
                  <ProductsItemsListView />
                  <ProductsItemsListView />
                  <ProductsItemsListView />
                </>
              )}
            </div>
            <div className="flex items-center justify-center mt-10">
              <Pagination count={10} showFirstButton showLastButton />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductListing;
