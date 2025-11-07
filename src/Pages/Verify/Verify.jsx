import React, { useContext, useState } from "react";
import OtpBox from "../../components/OtpBox/OtpBox";
import Button from "@mui/material/Button";
import { postData } from "../../utlis/api";
import { useNavigate } from "react-router-dom";
import { myContext } from "../../App";

const Verify = () => {
  const [otp, setOtp] = useState("");

  const handelChange = (value) => {
    setOtp(value);
  };

  const context = useContext(myContext);
  const navigate = useNavigate();

  const verifyOTP = (e) => {
    e.preventDefault();
    postData("/api/user/verifyEmail", {
      email: localStorage.getItem("userEmail"),
      otp: otp,
    }).then((res) => {
      if (res?.error === false) {
        context.openAlartBox("Sucess", res?.message);
        localStorage.removeItem("userEmail");
        navigate("/login");
      } else {
        context.openAlartBox("Error", res?.message);
      }
    });
  };

  return (
    <section className="section py-10">
      <div className="container">
        <div className="card shadow-md w-[400px] m-auto rounded-md bg-white p-5 px-10">
          <div className="text-center flex items-center justify-center">
            <img src="/verify.png" alt="" width={80} />
          </div>
          <h2 className="text-center text-[18px] text-black mt-4 mb-5">
            Verify OTP
          </h2>
          <p className="text-center mt-2">
            OTP send to{" "}
            <span className="text-[#ff5252] font-bold">
              {localStorage.getItem("userEmail")}
            </span>
          </p>
          <form onSubmit={verifyOTP} action="">
            <OtpBox length={6} onChange={handelChange} />
            <div className="flex items-center justify-center mt-4 px-3">
              <Button type="submit" className="w-full btn-org btn-lg">
                Verify OTP
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Verify;
