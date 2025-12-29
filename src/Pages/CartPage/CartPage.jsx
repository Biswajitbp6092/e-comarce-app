import React, { useContext, useEffect, useState } from "react";
import Button from "@mui/material/Button";
import { IoBagCheckSharp } from "react-icons/io5";
import CartItems from "./CartItems";
import { myContext } from "../../App";
import { fetchDataFromApi } from "../../utlis/api";
import { Link } from "react-router-dom";

const CartPage = () => {
  const [productSizeData, setProductSizeData] = useState([]);
  const [productRamsData, setProductRamsData] = useState([]);
  const [productWeightData, setProductWeightData] = useState([]);

  const context = useContext(myContext);

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchDataFromApi("/api/product/productSize/Sizelist").then((res) => {
      if (res?.data?.error === false) {
        setProductSizeData(res?.data?.data);
      }
    });

    fetchDataFromApi("/api/product/productRAMS/ramlist").then((res) => {
      if (res?.data?.error === false) {
        setProductRamsData(res?.data?.data);
      }
    });

    fetchDataFromApi("/api/product/productWeight/Weightlist").then((res) => {
      if (res?.data?.error === false) {
        setProductWeightData(res?.data?.data);
      }
    });
  }, []);

  const selectedSize = (item) => {
    if (item?.size !== "") {
      return item?.size;
    }
    if (item?.weight !== "") {
      return item?.weight;
    }
    if (item?.ram !== "") {
      return item?.ram;
    }
  };

  return (
    <section className="section py-10 pb-10">
      <div className="container w-[80%] max-w-[80%] flex gap-5">
        <div className="leftPart w-[70%]">
          <div className="shadow-md rounded-md p-5 bg-white">
            <div className="py-2 px-3 border-b border-[rgba(0,0,0,0.1)]">
              <h2>Your Cart</h2>
              <p className="mt-0">
                There is{" "}
                <span className="font-bold text-[#ff5252]">
                  {context?.cartData?.length}
                </span>{" "}
                Product in your cart
              </p>
            </div>
            {context?.cartData?.length !== 0 ? (
              context?.cartData?.map((item, index) => {
                return (
                  <CartItems
                    selected={() => selectedSize(item)}
                    qty={item?.quantity}
                    item={item}
                    key={index}
                    productSizeData={productSizeData}
                    productRamsData={productRamsData}
                    productWeightData={productWeightData}
                  />
                );
              })
            ) : (
              <>
                <div className="flex items-center justify-center flex-col w-full h-full">
                  <img src="/empty-cart.png" alt="" className="w-[200px]" />
                  <h4 className="text-2xl">Your Cart is empty</h4>
                  <p className="text-center">
                    Looks like you have not added anything to you cart. <br />
                    Go ahead & explore to categoroies
                  </p>
                  <Link to="/">
                    <Button className="btn-org btn-sm">Shopping Now</Button>
                  </Link>
                </div>
              </>
            )}
          </div>
        </div>

        <div className="rightPart w-[30%]">
          <div className="shadow-md rounded-md bg-white p-5 sticky top-[180px]">
            <h3 className="pb-3">Cart Total</h3>
            <hr />
            <p className="flex items-center justify-between">
              <span className="text-[14px] font-[500]">Subtotal</span>
              <span className="text-[#ff5252] font-bold">
                {(context?.cartData?.length !== 0
                  ? context?.cartData
                      ?.map((item) => Number(item.price) * item.quantity)
                      .reduce((total, value) => total + value, 0)
                  : 0
                )?.toLocaleString("en-US", {
                  style: "currency",
                  currency: "INR",
                })}
              </span>
            </p>
            <p className="flex items-center justify-between">
              <span className="text-[14px] font-[500]">Shipping</span>
              <span className="font-bold">Free</span>
            </p>

            <p className="flex items-center justify-between">
              <span className="text-[14px] font-[500]">Estimate for</span>
              <span className="font-bold">Unitide Kingdom</span>
            </p>

            <p className="flex items-center justify-between">
              <span className="text-[14px] font-[500]">Total</span>
              <span className="font-bold">
                {(context?.cartData?.length !== 0
                  ? context?.cartData
                      ?.map((item) => Number(item.price) * item.quantity)
                      .reduce((total, value) => total + value, 0)
                  : 0
                )?.toLocaleString("en-US", {
                  style: "currency",
                  currency: "INR",
                })}
              </span>
            </p>
            <br />
            <Link to="/checkout">
              <Button className="btn-org btn-lg w-full flex items-center gap-2">
                Checkout <IoBagCheckSharp size={20} />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CartPage;
