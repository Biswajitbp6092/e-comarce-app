import React, { useContext, useEffect, useState } from "react";
import Button from "@mui/material/Button";
import { BsBagCheckFill } from "react-icons/bs";
import { myContext } from "../../App";
import { FaPlus } from "react-icons/fa6";
import Radio from "@mui/material/Radio";

const CheckOut = () => {
  const [isChecked, setIsChecked] = useState(0);

  const context = useContext(myContext);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const editAddress = (id) => {
    context?.setOpenAddressPanel(true);
    context?.setAddressMode("edit");
    context?.setAddressId(id);
  };
  const handelChange = (e, index) => {
    if (e.target.checked) {
      setIsChecked(index);
    }
  };

  return (
    <section className="py-10">
      <div className="w-[70%] m-auto flex gap-[30px]">
        <div className="leftCol w-[60%]">
          <div className="cart bg-white shadow-md p-5 rounded-md w-full">
            <div className="flex items-center justify-between">
              <h2>Select Delivery Address</h2>
              <Button
                className="flex items-center gap-2"
                variant="outlined"
                onClick={() => {
                  context?.setOpenAddressPanel(true);
                  context?.setAddressMode("add");
                }}
              >
                <FaPlus />
                Add New Address
              </Button>
            </div>
            <br />

            <div className="flex flex-col gap-4">
              {context?.userData?.address_details?.length !== 0 ? (
                context?.userData?.address_details
                  ?.slice()
                  ?.reverse()
                  ?.map((address, index) => {
                    return (
                      <label
                        key={index}
                        className={`flex gap-3 p-4 border border-[rgba(0,0,0,0.2)] rounded-md relative cursor-pointer ${
                          isChecked === index && "bg-[#ffe3e3]"
                        }`}
                      >
                        <div>
                          <Radio
                            size="small"
                            onChange={(e) => handelChange(e, index)}
                            checked={isChecked == index}
                          />
                        </div>
                        <div className="info">
                          <span
                            className={`inline-block capitalize text-[13px] font-medium px-3 py-1 rounded-md ${
                              isChecked === index
                                ? "bg-[#ffffff]"
                                : "bg-[#ffecec]"
                            }`}
                          >
                            {address?.addresType}
                          </span>
                          <h3 className="text-[17px]">
                            {context?.userData?.name}
                          </h3>
                          <p className="!mt-0 !mb-0">
                            {address?.address_line}, {address?.city},{" "}
                            {address?.country},{address?.state},{" "}
                            {address?.landmark}
                          </p>
                          <p className="!mb-0 font-[500]">+{address?.mobile}</p>
                        </div>

                        <Button
                          className="!absolute top-[10px] right-[10px]"
                          onClick={() => editAddress(address?._id)}
                        >
                          EDIT
                        </Button>
                      </label>
                    );
                  })
              ) : (
                <>
                  <div className="flex items-center mt-5 justify-between flex-col p-5">
                    <img
                      src="/maps-and-location.png"
                      alt=""
                      className="w-[150px]"
                    />
                    <h2 className="text-center">
                      Address not found in your account
                    </h2>
                    <p className="!mt-0">Add a delivery address</p>
                    <Button
                      className="btn-org btn-sm flex items-center gap-2"
                      onClick={() => {
                        context?.setOpenAddressPanel(true);
                        context?.setAddressMode("add");
                      }}
                    >
                      <FaPlus size={16} />
                      Add New Address
                    </Button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>

        <div className="rightcol w-[40%]">
          <div className="card shadow-md bg-white p-5 rounded-md">
            <h2 className="mb-4">Your Order</h2>
            <div className="flex items-center justify-between py-3 border-t border-b border-[rgba(0,0,0,0.1)]">
              <span className="text-[14px] font-[600]">Product</span>
              <span className="text-[14px] font-[600] pr-5">Subtotal</span>
            </div>

            <div className="mb-5 scroll max-h-[300px] overflow-y-scroll overflow-x-hidden pr-2">
              {context?.cartData?.length !== 0 &&
                context?.cartData?.map((item, index) => {
                  return (
                    <div
                      className="flex items-center justify-between py-2"
                      key={index}
                    >
                      <div className="part1 flex items-center gap-3">
                        <div className="img w-[50px] h-[50px]  object-cover overflow-hidden rounded-md group cursor-pointer">
                          <img
                            src={item?.image}
                            alt=""
                            className="w-full transition-all group-hover:scale-105"
                          />
                        </div>
                        <div className="info">
                          <h4
                            className="text-[14px]"
                            title={item?.productTitle}
                          >
                            {item?.productTitle?.length > 28
                              ? item?.productTitle?.substring(0, 28) + "..."
                              : item?.productTitle}
                          </h4>
                          <span className="text-[13px]">
                            Qty : {item?.quantity}
                          </span>
                        </div>
                      </div>
                      <span className="text-[14px] font-[600]">
                        {(item?.quantity * item?.price)?.toLocaleString(
                          "en-US",
                          { style: "currency", currency: "INR" }
                        )}
                      </span>
                    </div>
                  );
                })}
            </div>

            <Button className="btn-org btn-lg btn-sm w-full flex items-center gap-2">
              <BsBagCheckFill size={22} />
              Checkout
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CheckOut;
