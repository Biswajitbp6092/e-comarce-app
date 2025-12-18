import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { MdDeleteOutline } from "react-icons/md";
import Button from "@mui/material/Button";
import { myContext } from "../../App";
import { deleteData } from "../../utlis/api";

const CartPanel = (props) => {
  const context = useContext(myContext);

  const removeItem = (id) => {
    deleteData(`/api/cart/delete-cart-item/${id}`).then((res) => {
      context.openAlartBox("Sucess", "item removed");
      context?.getCartItems();
    });
  };
  return (
    <>
      <div className="scroll w-full max-h-[500px] overflow-y-scroll overflow-x-hidden py-3 px-4">
        {props?.data?.map((item, index) => {
          return (
            <div
              key={index}
              className="cartItem w-full flex items-center gap-4 border-b border-[rgba(0,0,0,0.1)] pb-4"
            >
              <div className="img w-[25%] overflow-hidden h-[80px] rounded-md mt-4">
                <Link to={`/product/${item?._id}`} className="block group">
                  <img
                    src={item?.image}
                    alt=""
                    className="w-full group-hover:scale-105 transition"
                  />
                </Link>
              </div>
              <div className="info w-[75%] pr-5 relative">
                <h4 className="text-[14px] font-[500]">
                  <Link
                    to={`/product/${item?._id}`}
                    className="link transition-all"
                  >
                    {item?.productTitle?.length > 30
                      ? item.productTitle.substring(0, 30) + " ..."
                      : item?.productTitle}
                  </Link>
                </h4>
                <p className="flex items-center gap-5 mt-2 mb-2">
                  <span>
                    Qty : <span>{item?.quantity}</span>
                  </span>
                  <span className="text-[#ff5252] font-bold">
                    price : &#x20b9; {item?.price}
                  </span>
                </p>
                <MdDeleteOutline
                  size={22}
                  className="absolute top-[10px] -right-[10px] cursor-pointer link transition-all ease-out"
                  onClick={() => removeItem(item?._id)}
                />
              </div>
            </div>
          );
        })}
      </div>

      <br />
      <div className="bottomSection absolute bottom-[0px] left-[0px] w-full overflow-x-hidden bg-[#fcecec] border-t-1 border-[#ff5252]">
        <div className="bottomInfo py-3 px-6 w-full border-t border-[rgba(0,0,0,0.1)] flex items-center justify-between flex-col">
          <div className="flex items-center justify-between w-full">
            <span className="text-[14px] font-[600]">
              {context?.cartData?.length} Item
            </span>
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
          </div>

          {/* <div className="flex items-center justify-between w-full">
            <span className="text-[14px] font-[600]">Shipping</span>
            <span className="text-[#ff5252] font-bold">$8.00</span>
          </div> */}
        </div>

        <div className="bottomInfo py-3 px-6 w-full border-t border-[rgba(0,0,0,0.1)] flex items-center justify-between flex-col">
          <div className="flex items-center justify-between w-full">
            <span className="text-[14px] font-[600]">Total (Tax excl.)</span>
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
          </div>

          {/* <div className="flex items-center justify-between w-full">
            <span className="text-[14px] font-[600]">Total (Tax incl.)</span>
            <span className="text-[#ff5252] font-bold">$8.00</span>
          </div> */}
        </div>
        <br />

        <div className="flex px-6 pb-6 items-center justify-between w-full gap-5">
          <Link to="/cart" className=" w-[50%] d-block" onClick={context.toggleCartPanel(false)}>
            <Button className="btn-org btn-sm w-full">View cart</Button>
          </Link>
          <Link to="/checkout" className=" w-[50%] d-block">
            <Button className="btn-org btn-sm w-full">Checkout</Button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default CartPanel;
