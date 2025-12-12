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
import { postData } from "../../utlis/api";

const ProductListing = () => {
  const [itemView, setItemView] = useState("grid");
  const [anchorEl, setAnchorEl] = React.useState(null);

  const [productsData, setProductsData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const [selectedShortVal, setSelectedShortVal] = useState("Name, A to Z");

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handelSortBy = (name, order, products, value) => {
    setSelectedShortVal(value);
    postData(`/api/product/shortBy`, {
      products: products,
      sortBy: name,
      order: order,
    }).then((res) => {
      setProductsData(res);
      setAnchorEl(null);
    });
  };

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
          <div className="sideBarWrapper w-[20%]  bg-white">
            <SideBar
              productsData={productsData}
              setProductsData={setProductsData}
              isLoading={isLoading}
              setIsLoading={setIsLoading}
              page={page}
              setTotalPages={setTotalPages}
            />
          </div>

          <div className="rightContent w-[80%] py-3">
            <div className="bg-[#f1f1f1] w-full mb-4 rounded-md flex items-center justify-between sticky top-[155px] z-40 ">
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
                  There are{" "}
                  {productsData?.products?.length !== 0 ? productsData?.products?.length : 0}{" "}
                  Products
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
                  className="!w-[150px] !text-left !pl-0 !ml-3 !bg-white !text-[13px] !text-[#000] !capitalize !border-1 !border-[rgba(162,162,162,0.5)]"
                >
                  {selectedShortVal}
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
                  <MenuItem
                    onClick={() =>
                      handelSortBy("name", "asc", productsData, "Name, A to Z")
                    }
                    className="!text-[13px] !text-[#000] !capitalize"
                  >
                    Name, A to Z
                  </MenuItem>
                  <MenuItem
                    onClick={() =>
                      handelSortBy("name", "desc", productsData, "Name, Z to A")
                    }
                    className="!text-[13px] !text-[#000] !capitalize"
                  >
                    Name, Z to A
                  </MenuItem>
                  <MenuItem
                    onClick={() =>
                      handelSortBy("price", "asc", productsData, "Price low to high")
                    }
                    className="!text-[13px] !text-[#000] !capitalize"
                  >
                    Price low to high
                  </MenuItem>
                  <MenuItem
                    onClick={() =>
                      handelSortBy("price", "desc", productsData, "Price high to low")
                    }
                    className="!text-[13px] !text-[#000] !capitalize"
                  >
                    Price high to low
                  </MenuItem>
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
                  {productsData?.products?.length !== 0 &&
                    productsData?.products?.map((item, index) => {
                      return <ProductsItems key={index} item={item} />;
                    })}
                </>
              ) : (
                <>
                  {productsData?.products?.length !== 0 &&
                    productsData?.products?.map((item, index) => {
                      return <ProductsItemsListView key={index} item={item} />;
                    })}
                </>
              )}
            </div>
            {totalPages > 1 && (
              <div className="flex items-center justify-center mt-10">
                <Pagination
                  showFirstButton
                  showLastButton
                  count={totalPages}
                  page={page}
                  onChange={(e, value) => setPage(value)}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductListing;
