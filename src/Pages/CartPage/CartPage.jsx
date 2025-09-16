import React, { useState } from "react";
import Button from "@mui/material/Button";
import { IoBagCheckSharp } from "react-icons/io5";
import CartItems from "./CartItems";

const CartPage = () => {
  return (
    <section className="section py-10 pb-10">
      <div className="container w-[80%] max-w-[80%] flex gap-5">
        <div className="leftPart w-[70%]">
          <div className="shadow-md rounded-md p-5 bg-white">
            <div className="py-2 px-3 border-b border-[rgba(0,0,0,0.1)]">
              <h2>Your Cart</h2>
              <p className="mt-0">
                There is <span className="font-bold text-[#ff5252]">2</span>{" "}
                Product in your cart
              </p>
            </div>
            <CartItems size='S' qty={1}/>
            <CartItems size='S' qty={1}/>
            <CartItems size='S' qty={1}/>
            <CartItems size='S' qty={1}/>
            <CartItems size='S' qty={1}/>
            <CartItems size='S' qty={1}/>
            <CartItems size='S' qty={1}/>
            <CartItems size='S' qty={1}/>
            <CartItems size='S' qty={1}/>
            <CartItems size='S' qty={1}/>
            <CartItems size='S' qty={1}/>
            <CartItems size='S' qty={1}/>
            <CartItems size='S' qty={1}/>
            <CartItems size='S' qty={1}/>
            <CartItems size='S' qty={1}/>
            <CartItems size='S' qty={1}/>

          
          </div>
        </div>

        <div className="rightPart w-[30%]">
          <div className="shadow-md rounded-md bg-white p-5">
            <h3 className="pb-3">Cart Total</h3>
            <hr />
            <p className="flex items-center justify-between">
              <span className="text-[14px] font-[500]">Subtotal</span>
              <span className="text-[#ff5252] font-bold">$100.00</span>
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
              <span className="font-bold">$100.00</span>
            </p>
            <br />
            <Button className="btn-org btn-lg w-full flex items-center gap-2">
              Checkout <IoBagCheckSharp size={20} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CartPage;
