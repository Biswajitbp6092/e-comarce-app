import React from "react";
import { Link } from "react-router-dom";
import { MdDeleteOutline } from "react-icons/md";
import Button from "@mui/material/Button";

const CartPanel = () => {
  return (
    <>
      <div className="scroll w-full max-h-[400px] overflow-y-scroll overflow-x-hidden py-3 px-4">
        <div className="cartItem w-full flex items-center gap-4 border-b border-[rgba(0,0,0,0.1)] pb-4">
          <div className="img w-[25%] overflow-hidden h-[80px] rounded-md mt-4">
            <Link to="/product/2852" className="block group">
              <img
                src="https://serviceapi.spicezgold.com/download/1753711304615_zoom_0-1677748187.jpg"
                alt=""
                className="w-full group-hover:scale-105 transition"
              />
            </Link>
          </div>
          <div className="info w-[75%] pr-5 relative">
            <h4 className="text-[14px] font-[500]">
              <Link to="/product/2548" className="link transition-all">
                mandarin collar printed anarkali kurta{" "}
              </Link>
            </h4>
            <p className="flex items-center gap-5 mt-2 mb-2">
              <span>
                Qty : <span>2</span>
              </span>
              <span className="text-[#ff5252] font-bold">price : $25.00</span>
            </p>
            <MdDeleteOutline
              size={22}
              className="absolute top-[10px] -right-[10px] cursor-pointer link transition-all ease-out"
            />
          </div>
        </div>

        <div className="cartItem w-full flex items-center gap-4 border-b border-[rgba(0,0,0,0.1)] pb-4">
          <div className="img w-[25%] overflow-hidden h-[80px] rounded-md mt-4">
            <Link to="/product/2852" className="block group">
              <img
                src="https://serviceapi.spicezgold.com/download/1753711304615_zoom_0-1677748187.jpg"
                alt=""
                className="w-full group-hover:scale-105 transition"
              />
            </Link>
          </div>
          <div className="info w-[75%] pr-5 relative">
            <h4 className="text-[14px] font-[500]">
              <Link to="/product/2548" className="link transition-all">
                mandarin collar printed anarkali kurta{" "}
              </Link>
            </h4>
            <p className="flex items-center gap-5 mt-2 mb-2">
              <span>
                Qty : <span>2</span>
              </span>
              <span className="text-[#ff5252] font-bold">price : $25.00</span>
            </p>
            <MdDeleteOutline
              size={22}
              className="absolute top-[10px] -right-[10px] cursor-pointer link transition-all ease-out"
            />
          </div>
        </div>


        <div className="cartItem w-full flex items-center gap-4 border-b border-[rgba(0,0,0,0.1)] pb-4">
          <div className="img w-[25%] overflow-hidden h-[80px] rounded-md mt-4">
            <Link to="/product/2852" className="block group">
              <img
                src="https://serviceapi.spicezgold.com/download/1753711304615_zoom_0-1677748187.jpg"
                alt=""
                className="w-full group-hover:scale-105 transition"
              />
            </Link>
          </div>
          <div className="info w-[75%] pr-5 relative">
            <h4 className="text-[14px] font-[500]">
              <Link to="/product/2548" className="link transition-all">
                mandarin collar printed anarkali kurta{" "}
              </Link>
            </h4>
            <p className="flex items-center gap-5 mt-2 mb-2">
              <span>
                Qty : <span>2</span>
              </span>
              <span className="text-[#ff5252] font-bold">price : $25.00</span>
            </p>
            <MdDeleteOutline
              size={22}
              className="absolute top-[10px] -right-[10px] cursor-pointer link transition-all ease-out"
            />
          </div>
        </div>

        <div className="cartItem w-full flex items-center gap-4 border-b border-[rgba(0,0,0,0.1)] pb-4">
          <div className="img w-[25%] overflow-hidden h-[80px] rounded-md mt-4">
            <Link to="/product/2852" className="block group">
              <img
                src="https://serviceapi.spicezgold.com/download/1753711304615_zoom_0-1677748187.jpg"
                alt=""
                className="w-full group-hover:scale-105 transition"
              />
            </Link>
          </div>
          <div className="info w-[75%] pr-5 relative">
            <h4 className="text-[14px] font-[500]">
              <Link to="/product/2548" className="link transition-all">
                mandarin collar printed anarkali kurta{" "}
              </Link>
            </h4>
            <p className="flex items-center gap-5 mt-2 mb-2">
              <span>
                Qty : <span>2</span>
              </span>
              <span className="text-[#ff5252] font-bold">price : $25.00</span>
            </p>
            <MdDeleteOutline
              size={22}
              className="absolute top-[10px] -right-[10px] cursor-pointer link transition-all ease-out"
            />
          </div>
        </div>


        <div className="cartItem w-full flex items-center gap-4 border-b border-[rgba(0,0,0,0.1)] pb-4">
          <div className="img w-[25%] overflow-hidden h-[80px] rounded-md mt-4">
            <Link to="/product/2852" className="block group">
              <img
                src="https://serviceapi.spicezgold.com/download/1753711304615_zoom_0-1677748187.jpg"
                alt=""
                className="w-full group-hover:scale-105 transition"
              />
            </Link>
          </div>
          <div className="info w-[75%] pr-5 relative">
            <h4 className="text-[14px] font-[500]">
              <Link to="/product/2548" className="link transition-all">
                mandarin collar printed anarkali kurta{" "}
              </Link>
            </h4>
            <p className="flex items-center gap-5 mt-2 mb-2">
              <span>
                Qty : <span>2</span>
              </span>
              <span className="text-[#ff5252] font-bold">price : $25.00</span>
            </p>
            <MdDeleteOutline
              size={22}
              className="absolute top-[10px] -right-[10px] cursor-pointer link transition-all ease-out"
            />
          </div>
        </div>
      </div>

      <br />
      <div className="bottomSection absolute bottom-[10px] left-[10px] w-full overflow-x-hidden pr-5">
        <div className="bottomInfo py-3 px-4 w-full border-t border-[rgba(0,0,0,0.1)] flex items-center justify-between flex-col">
          <div className="flex items-center justify-between w-full">
            <span className="text-[14px] font-[600]">1 Item</span>
            <span className="text-[#ff5252] font-bold">$25.00</span>
          </div>

          <div className="flex items-center justify-between w-full">
            <span className="text-[14px] font-[600]">Shipping</span>
            <span className="text-[#ff5252] font-bold">$8.00</span>
          </div>
        </div>

        <div className="bottomInfo py-3 px-4 w-full border-t border-[rgba(0,0,0,0.1)] flex items-center justify-between flex-col">
          <div className="flex items-center justify-between w-full">
            <span className="text-[14px] font-[600]">Total (Tax excl.)</span>
            <span className="text-[#ff5252] font-bold">$93.00</span>
          </div>

          <div className="flex items-center justify-between w-full">
            <span className="text-[14px] font-[600]">Total (Tax incl.)</span>
            <span className="text-[#ff5252] font-bold">$8.00</span>
          </div>
        </div>
        <br />

        <div className="flex items-center justify-between w-full gap-5">
          <Link to="/cart" className=" w-[50%] d-block">
            <Button className="btn-org btn-lg w-full">View cart</Button>
          </Link>
          <Link to="/checkout" className=" w-[50%] d-block">
            <Button className="btn-org btn-lg w-full">Checkout</Button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default CartPanel;
