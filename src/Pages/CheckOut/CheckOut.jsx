import React, { useContext, useEffect, useState } from "react";
import Button from "@mui/material/Button";
import { BsBagCheckFill, BsFillBagCheckFill } from "react-icons/bs";
import { myContext } from "../../App";
import { FaPlus } from "react-icons/fa6";
import Radio from "@mui/material/Radio";
import { deleteData, fetchDataFromApi, postData } from "../../utlis/api";
import { useNavigate } from "react-router-dom";

// payemt getway Razor Pay
const VITE_APP_RAZORPAY_KEY_ID = import.meta.env.VITE_APP_RAZORPAY_KEY_ID;
const VITE_APP_RAZORPAY_KEY_SECRET = import.meta.env.VITE_APP_RAZORPAY_KEY_SECRET;

const CheckOut = () => {
  const [userData, setUserData] = useState(null);
  const [isChecked, setIsChecked] = useState(0);
  const [selectedAddress, setSelectedAddress] = useState("");
  const [totalAmount, setTotalAmount] = useState();

  const context = useContext(myContext);
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    setUserData(context?.userData);
    setSelectedAddress(context?.userData?.address_details[0]?._id);
    fetchDataFromApi(`/api/order/order-list`).then((res) => {});
  }, [context?.userData]);

  useEffect(() => {
    setTotalAmount(
      context?.cartData?.length !== 0
        ? context?.cartData
            ?.map((item) => parseInt(item.price) * item?.quantity)
            .reduce((total, value) => total + value, 0)
        : 0
    )?.toLocaleString("en-US", { style: "currency", currency: "INR" });

    // localStorage.setItem("totalAmount", context?.cartData?.length !==0 ?
    //  context?.cartData?.map(item=>parseInt(item.price)* item?.quantity).reduce((total, value)=> total+value,0):0)
    //  ?.toLocaleString('en-US',{style:'currency', currency:'INR'});
  }, [context?.cartData]);

  const editAddress = (id) => {
    context?.setOpenAddressPanel(true);
    context?.setAddressMode("edit");
    context?.setAddressId(id);
  };

  const handelChange = (e, index) => {
    if (e.target.checked) {
      setIsChecked(index);
      setSelectedAddress(e.target.value);
    }
  };

  const checkout = (e) => {
    e.preventDefault();

    var options = {
      key: VITE_APP_RAZORPAY_KEY_ID,
      key_secret: VITE_APP_RAZORPAY_KEY_SECRET,
      amount: parseInt(totalAmount * 100),
      currency: "INR",
      order_receipt: "order_rcptid_" + context?.userData?.name,
      name: "B-Mart megashop",
      description: "for testing purpose",
      handler: function (response) {
        const paymentId = response?.razorpay_payment_id;
        const user = context?.userData;

        const payLoad = {
          userId: user?._id,
          products: context?.cartData,
          paymentId: paymentId,
          payment_status: "COMPLEATED",
          delivery_address: selectedAddress,
          totalAmt: totalAmount,
          date: new Date().toLocaleString("en-US", {
            month: "short",
            day: "2-digit",
            year: "numeric",
          }),
        };

        console.log("payLoad", payLoad);

        postData(`/api/order/create`, payLoad).then((res) => {
          if (res?.data?.error === false) {
            context.openAlartBox("Sucess", res?.message);
            deleteData(`/api/cart/emptyCart/${user?._id}`).then((res) => {
              context?.getCartItems();
            });
            navigate("/");
          } else {
            context.openAlartBox("Error", res?.message);
          }
        });
      },
      theme: {
        color: "#3399cc",
      },
    };

    var pay = new window.Razorpay(options);
    pay.open();
  };

  const cashOnDelivery = (e) => {
    e.preventDefault();

    const user = context?.userData;

    const payLoad = {
      userId: user?._id,
      products: context?.cartData,
      paymentId: "",
      payment_status: "Cash on Delivery",
      delivery_address: selectedAddress,
      totalAmt: totalAmount,
      date: new Date().toLocaleString("en-US", {
        month: "short",
        day: "2-digit",
        year: "numeric",
      }),
    };
   

    postData(`/api/order/create`, payLoad).then((res) => {
      context.openAlartBox("Sucess", res?.message);
      if (res?.error === false) {
        deleteData(`/api/cart/emptyCart/${user?._id}`).then((res) => {
          context?.getCartItems();
        });
        navigate("/");
      } else {
        context.openAlartBox("Error", res?.message);
      }
    });
  };

  return (
    <section className="py-10">
      <form onSubmit={checkout}>
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
                {userData?.address_details?.length !== 0 ? (
                  userData?.address_details?.map((address, index) => {
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
                            value={address?._id}
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

              <div className="flex items-center flex-col gap-2 mb-2">
                <Button
                  type="submit"
                  className="btn-org btn-lg w-full flex items-center gap-2"
                >
                  <BsBagCheckFill size={22} />
                  Pay Online
                </Button>

                <Button
                  type="button"
                  className="btn-dark btn-lg w-full flex gap-2 items-end"
                  onClick={cashOnDelivery}
                >
                  <BsFillBagCheckFill size={22} />
                  Cash on Delivery
                </Button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </section>
  );
};

export default CheckOut;
