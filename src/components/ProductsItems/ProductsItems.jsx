import React, { useContext } from "react";
import "./ProductsItems.css";
import { Link } from "react-router-dom";
import Rating from "@mui/material/Rating";
import Button from "@mui/material/Button";
import { FaRegHeart } from "react-icons/fa";
import { GoGitCompare } from "react-icons/go";
import {
  MdClose,
  MdOutlineShoppingCart,
  MdOutlineZoomOutMap,
} from "react-icons/md";
import { myContext } from "../../App";
import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa6";
import { useEffect } from "react";
import { deleteData, editData, postData } from "../../utlis/api";
import CircularProgress from "@mui/material/CircularProgress";
import { IoMdHeart } from "react-icons/io";

const ProductsItems = (props) => {
  const [quantity, setQuantity] = useState(1);
  const [isAdded, setIsAdded] = useState(false);
  const [isAddedInMyList, setIsAddedInMyList] = useState(false);
  const [cartItem, setCartItem] = useState([]);
  const [activeTab, setActiveTab] = useState(null);
  const [isShowTabs, setIsShowTabs] = useState(false);
  const [selectedTabName, setSelectedTabName] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const context = useContext(myContext);

  const addToCart = (product, userId, quantity) => {
    const productItem = {
      _id: product?._id,
      name: product?.name,
      image: product?.images[0],
      rating: product?.rating,
      price: product?.price,
      oldPrice: product?.oldPrice,
      quantity: quantity,
      subTotal: parseInt(product?.price * quantity),
      productId: product?._id,
      countInStock: product?.countInStock,
      userId: userId,
      brand: product?.brand,
      discount: product?.discount,
      size: props?.item?.size?.length !== 0 ? selectedTabName : "",
      weight: props?.item?.productWeight?.length !== 0 ? selectedTabName : "",
      ram: props?.item?.productRam?.length !== 0 ? selectedTabName : "",
    };
    setIsLoading(true);
    if (
      props?.item?.size?.length !== 0 ||
      props?.item?.productWeight?.length !== 0 ||
      props?.item?.productRam?.length !== 0
    ) {
      setIsShowTabs(true);
    } else {
      context.addToCart(productItem, userId, quantity);
      setIsAdded(true);
      setIsShowTabs(false);
      setTimeout(() => {
        setIsLoading(false);
      }, 500);
    }

    if (activeTab !== null) {
      context.addToCart(productItem, userId, quantity);
      setIsAdded(true);
      setIsShowTabs(false);
      setTimeout(() => {
        setIsLoading(false);
      }, 500);
    }
  };

  const handelClickActiveTab = (index, name) => {
    setActiveTab(index);
    setSelectedTabName(name);
  };

  useEffect(() => {
    const item = context?.cartData?.filter((cartItem) =>
      cartItem.productId.includes(props?.item?._id)
    );
    const myListItem = context?.myListData?.filter((item) =>
      item.productId.includes(props?.item?._id)
    );

    if (item?.length !== 0) {
      setCartItem(item);
      setIsAdded(true);
      setQuantity(item[0]?.quantity);
    } else {
      setQuantity(1);
    }

    if (myListItem?.length !== 0) {
      setIsAddedInMyList(true);
    } else {
      setIsAddedInMyList(false);
    }
  }, [context?.cartData]);

  const minusQty = () => {
    if (quantity !== 1 && quantity > 1) {
      setQuantity(quantity - 1);
    } else {
      setQuantity(1);
    }
    if (quantity === 1) {
      deleteData(`/api/cart/delete-cart-item/${cartItem[0]?._id}`).then(
        (res) => {
          setIsAdded(false);
          context.openAlartBox("Sucess", "item removed");
          context?.getCartItems();
          setIsShowTabs(false);
          setActiveTab(null);
        }
      );
    } else {
      const obj = {
        _id: cartItem[0]?._id,
        qty: quantity - 1,
        subTotal: props?.item?.price * (quantity - 1),
      };
      editData(`/api/cart/update-qty`, obj).then((res) => {
        context.openAlartBox("Sucess", res?.data?.message);
        context?.getCartItems();
      });
    }
  };
  const addQty = () => {
    setQuantity(quantity + 1);
    const obj = {
      _id: cartItem[0]?._id,
      qty: quantity + 1,
      subTotal: props?.item?.price * (quantity + 1),
    };
    editData(`/api/cart/update-qty`, obj).then((res) => {
      context.openAlartBox("Sucess", res?.data?.message);
      context?.getCartItems();
    });
  };

  const handelAddToMyList = (item) => {
    if (context?.userData === null) {
      context?.openAlartBox("Error", "You are not Login, please Login Frist");
      return false;
    } else {
      const obj = {
        productId: item?._id,
        userId: context?.userData?._id,
        productTitle: item?.name,
        image: item?.images[0],
        rating: item?.rating,
        price: item?.price,
        oldPrice: item?.oldPrice,
        brand: item?.brand,
        discount: item?.discount,
      };
      postData("/api/mylist/add", obj).then((res) => {
        if (res?.error === false) {
          context?.openAlartBox("Sucess", res?.message);
          setIsAddedInMyList(true);
          context?.getMyListData();
        } else {
          context?.openAlartBox("Error", res?.message);
        }
      });
    }
  };
  return (
    <div className="productsItems shadow-lg rounded-md overflow-hidden">
      <div className="group imgWrapper w-[100%] overflow-hidden rounded-md relative">
        <Link to={`/product/${props?.item?._id}`}>
          <div className="img h-[220px] overflow-hidden">
            <img
              src={props?.item?.images[0]}
              alt="Product Img"
              className="w-full"
            />
            <img
              src={props?.item?.images[1]}
              alt="Product Img"
              className="w-full absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-linear group-hover:scale-105"
            />
          </div>
        </Link>
        {isShowTabs === true && (
          <div className="flex items-center justify-center absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.7)] z-[30] p-3 gap-2">
            <Button
              onClick={() => setIsShowTabs(false)}
              className="!absolute top-[10px] right-[10px] !min-w-[35px] !min-h-[35px] !w-[35px] !h-[35px] !rounded-full !bg-[rgba(255,255,255,1)] !text-[#ff5252]"
            >
              <MdClose className=" !text-[#ff5252] text-[25px]" />
            </Button>
            {props?.item?.size?.length !== 0 &&
              props?.item?.size?.map((item, index) => {
                return (
                  <span
                    key={index}
                    className={`flex items-center justify-center py-1 px-2 bg-[rgba(255,555,255,0.8)] max-w-[30px] h-[25px] rounded-sm cursor-pointer hover:bg-white ${
                      activeTab === index && "!bg-[#ff5252] text-white"
                    }`}
                    onClick={() => handelClickActiveTab(index, item)}
                  >
                    {item}
                  </span>
                );
              })}

            {props?.item?.productRam?.length !== 0 &&
              props?.item?.productRam?.map((item, index) => {
                return (
                  <span
                    key={index}
                    className={`flex items-center justify-center py-1 px-2 bg-[rgba(255,555,255,0.8)] max-w-[45px] h-[25px] rounded-sm cursor-pointer hover:bg-white ${
                      activeTab === index && "!bg-[#ff5252] text-white"
                    }`}
                    onClick={() => handelClickActiveTab(index, item)}
                  >
                    {item}
                  </span>
                );
              })}

            {props?.item?.productWeight?.length !== 0 &&
              props?.item?.productWeight?.map((item, index) => {
                return (
                  <span
                    key={index}
                    className={`flex items-center justify-center py-1 px-2 bg-[rgba(255,555,255,0.8)] max-w-[30px] h-[25px] rounded-sm cursor-pointer hover:bg-white ${
                      activeTab === index && "!bg-[#ff5252] text-white"
                    }`}
                    onClick={() => handelClickActiveTab(index, item)}
                  >
                    {item}
                  </span>
                );
              })}
          </div>
        )}

        <span className="discount flex items-center absolute top-[10px] left-[10px] z-5 bg-[#ff5252] text-white rounded-lg p-1 text-[12px] font-[500]">
          {props?.item?.discount}%
        </span>

        <div className="actions absolute top-[-15px] right-[5px] z-5 flex items-center gap-2 flex-col w-[50px] transition-all duration-300 group-hover:top-[15px] opacity-0 group-hover:opacity-100">
          <Button
            onClick={() =>
              context.handleOpenProductDetailsModal(true, props?.item)
            }
            className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !text-black !bg-white hover:!bg-[#ff5252] hover:!text-white transition-all duration-300 ease-in"
          >
            <MdOutlineZoomOutMap size={18} />
          </Button>
          <Button className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !text-black !bg-white hover:!bg-[#ff5252] hover:!text-white transition-all duration-300 ease-in">
            <GoGitCompare size={18} />
          </Button>
          <Button
            className={`!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !text-black !bg-white hover:!bg-[#ff5252] hover:!text-white group: transition-all duration-300 ease-in `}
            onClick={() => handelAddToMyList(props?.item)}
          >
            {isAddedInMyList === true ? (
              <IoMdHeart
                size={26}
                className="text-red-600 group-hover:text-red-600 hover:!text-white"
              />
            ) : (
              <FaRegHeart size={18} />
            )}
          </Button>
        </div>
      </div>

      <div className="info p-3 py-5 relative pb-[50px] h-[170px]">
        <h6 className="text-[12px] text-gray-600 font-light capitalize">
          {props?.item?.brand}
        </h6>
        <h3 className="text-[14px] title mt-1 font-[400] mb-1 text-[rgba(30,30,30,0.9)]">
          <Link
            to={`/product/${props?.item?._id}`}
            className="link transition-all block truncate max-w-[200px]"
          >
            {props?.item?.name}
          </Link>
        </h3>
        <Rating
          name="size-small"
          defaultValue={props?.item?.rating}
          size="small"
          readOnly
        />
        <div className="flex items-center gap-4">
          <span className="old-price line-through text-gray-600 text-[15px] font-[500]">
            &#x20b9; {props?.item?.oldPrice}
          </span>
          <span className="price text-[#ff5252] font-[500] text-[15px]">
            &#x20b9; {props?.item?.price}
          </span>
        </div>
        <div className="!absolute bottom-[15px] left-0 pl-3 pr-3 w-full">
          {isAdded === false ? (
            <Button
              className="btn-org btn-sm btn-border  flex w-full  gap-2"
              size="small"
              onClick={() =>
                addToCart(props?.item, context?.userData?._id, quantity)
              }
            >
              <MdOutlineShoppingCart className="text-[18px]" /> Add to Cart
            </Button>
          ) : (
            <>
              {isLoading === true ? (
                <Button
                  className="btn-org flex w-full btn-sm gap-2"
                  size="small"
                  onClick={() =>
                    addToCart(props?.item, context?.userData?._id, quantity)
                  }
                >
                  <CircularProgress
                    color="inherit"
                    style={{ width: "20px", height: "20px" }}
                  />
                </Button>
              ) : (
                <div className="flex items-center justify-between overflow-hidden rounded-full border border-[rgba(0,0,0,0.1)]">
                  <Button
                    onClick={minusQty}
                    className="!min-w-[40px] !w-[40px] !bg-[#7a7a7a] !rounded-none"
                  >
                    <FaMinus className="text-white" />
                  </Button>

                  <span>{quantity}</span>

                  <Button
                    onClick={addQty}
                    className="!min-w-[40px] !w-[40px] !bg-[#ff5252] !rounded-none"
                  >
                    <FaPlus className="text-white" />
                  </Button>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductsItems;
