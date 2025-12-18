import React, { useContext, useState } from "react";
import QtyBox from "../QtyBox/QtyBox";
import { IoCartOutline } from "react-icons/io5";
import Button from "@mui/material/Button";
import Rating from "@mui/material/Rating";
import { myContext } from "../../App";
import CircularProgress from "@mui/material/CircularProgress";
import { postData } from "../../utlis/api";

const ProductDetailsComponent = (props) => {
  const [productActionIndex, setProductActionIndex] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [selectedTabName, setSelectedTabName] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [tabError, setTabError] = useState(false)

  const context = useContext(myContext);

  const handelSelecteQty = (qty) => {
    setQuantity(qty);
  };
  const handelClickActiveTab = (index, name) => {
    setProductActionIndex(index);
    setSelectedTabName(name);
  };

  const addToCart = (product, userId, quantity) => {
    if (userId === undefined) {
      openAlartBox("Error", "You are not Login, please Login Frist");
      return false;
    }
    const productItem = {
      _id: product?._id,
      productTitle: product?.name,
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

    if (selectedTabName !== null) {
      setIsLoading(true);

      postData("/api/cart/add", productItem).then((res) => {
        if (res?.error === false) {
          context?.openAlartBox("Sucess", res?.message);
          context?.getCartItems();
          setTimeout(() => {
            setIsLoading(false);
          }, 500);
        } else {
          context?.openAlartBox("Error", res?.message);
          setTimeout(() => {
            setIsLoading(false);
          }, 500);
        }
      });
    }else{
      setTabError(true)
    }
  };
  return (
    <>
      <h1 className="text-[24px] font-[500] mb-2">{props?.item?.name}</h1>
      <div className="flex items-center gap-3 text-[13px]">
        <span className="text-gray-500">
          Brands :{" "}
          <span className="font-[500] text-black opacity-75">
            {props?.item?.brand}
          </span>
        </span>
        <Rating name="size-small" defaultValue={4} size="small" readOnly />
        <span
          className="text-[13px] cursor-pointer"
          onClick={props.gotoReviews}
        >
          Review ({props.reviewsCount})
        </span>
      </div>
      <div className="flex items-center gap-4 mt-4">
        <span className="oldPrice line-through text-gray-500 text-[18px] font-[500]">
          &#x20b9; {props?.item?.oldPrice}
        </span>
        <span className="price text-[#ff5252] text-[18px] font-[600]">
          &#x20b9; {props?.item?.price}
        </span>
        <span className="text-[14px]">
          Available in Stock:{" "}
          <span className="text-green-500 text-[14px] font-medium">
            {props?.item?.countInStock}
          </span>
        </span>
      </div>
      <p className="mt-3 mb-5">{props?.item?.description}</p>

      {props?.item?.productRam?.length !== 0 && (
        <div className="flex items-center gap-3 actions">
          <span className="text-[16px]">RAM:</span>
          <div className="flex items-center gap-1">
            {props?.item?.productRam?.map((item, index) => {
              return (
                <Button
                  className={`${
                    productActionIndex === index
                      ? "!bg-[#ff5252] !text-white"
                      : ""
                  }`}
                  onClick={() => handelClickActiveTab(index, item)}
                >
                  {item}
                </Button>
              );
            })}
          </div>
        </div>
      )}

      {props?.item?.size?.length !== 0 && (
        <div className="flex items-center gap-3 actions">
          <span className="text-[16px]">Size:</span>
          <div className="flex items-center gap-1">
            {props?.item?.size?.map((item, index) => {
              return (
                <Button
                  className={`${productActionIndex === index ? "!bg-[#ff5252] !text-white" : ""} ${tabError === true && '!border-2 !border-[#ff5252]'}`}
                  onClick={() => handelClickActiveTab(index, item)}
                >
                  {item}
                </Button>
              );
            })}
          </div>
        </div>
      )}
      {props?.item?.productWeight?.length !== 0 && (
        <div className="flex items-center gap-3 actions">
          <span className="text-[16px]">Weight:</span>
          <div className="flex items-center gap-1">
            {props?.item?.productWeight?.map((item, index) => {
              return (
                <Button
                  className={`${
                    productActionIndex === index
                      ? "!bg-[#ff5252] !text-white"
                      : ""
                  }`}
                  onClick={() => handelClickActiveTab(index, item)}
                >
                  {item}
                </Button>
              );
            })}
          </div>
        </div>
      )}

      <p className="text-[14px] mt-5 mb-2 text-[#000]">
        Free Shipping (Est. Delivery Time 2-3 Days)
      </p>
      <div className="flex items-center mt-4 gap-4 ">
        <div className="qtyBoxWrapper w-[70px]">
          <QtyBox handelSelecteQty={handelSelecteQty} />
        </div>
        <Button
          className="btn-org flex gap-2 !min-w-[180px] !max-h-[40px]"
          onClick={() =>
            addToCart(props?.item, context?.userData?._id, quantity)
          }
        >
          {isLoading === true ? (
            <CircularProgress color="inherit" style={{width:'30px', height:'30px'}} />
          ) : (
            <>
              <IoCartOutline size={24} />
              Add to Cart
            </>
          )}
        </Button>
      </div>
    </>
  );
};

export default ProductDetailsComponent;
