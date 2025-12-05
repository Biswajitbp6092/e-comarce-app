import React, { useContext, useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { myContext } from "../../App";
import CircularProgress from "@mui/material/CircularProgress";
import { postData } from "../../utlis/api";

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isPasswordShow, setIsPasswordShow] = useState(false);
  const [formFields, setFormFields] = useState({
    email: "",
    password: "",
  });

  const context = useContext(myContext);

  const navigate = useNavigate();

  const forGotPassword = (e) => {
    e.preventDefault();
    if (formFields.email === "") {
      context.openAlartBox("Error", "Please Enter email id to reset password");
      return false;
    } else {
      context.openAlartBox(
        "Sucess",
        `We have sent a password reset link to ${formFields.email}`
      );
      localStorage.setItem("userEmail", formFields.email);
      localStorage.setItem("actionType", "forgotPassword");

      postData("/api/user/forgot-password", {
        email: formFields.email,
      }).then((res) => {
        if (res?.error === false) {
          context.openAlartBox("Sucess", res?.message);
          navigate("/verify");
        } else {
          context.openAlartBox("Error", res?.message);
        }
      });
    }
  };

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setFormFields(() => ({
      ...formFields,
      [name]: value,
    }));
  };

  const validValue = Object.values(formFields).every((el) => el);

  const handelSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    if (formFields.email === "") {
      context.openAlartBox("Error", "Please Enter email id");
      return false;
    }
    if (formFields.password === "") {
      context.openAlartBox("Error", "Please Enter password");
      return false;
    }

    postData("/api/user/login", formFields, { withCredentials: true }).then(
      (res) => {
        if (res?.error !== true) {
          setIsLoading(false);
          context.openAlartBox("Sucess", res?.message);

          setFormFields({
            email: "",
            password: "",
          });

          // localStorage.setItem("userEmail", formFields.email);
          localStorage.setItem("accessToken", res?.data?.accessToken);
          localStorage.setItem("refreshToken", res?.data?.refreshToken);

          context.setIsLogin(true);

          navigate("/");
        } else {
          context.openAlartBox("Error", res?.message);
          setIsLoading(false);
        }
      }
    );
  };

  return (
    <section className="section py-10">
      <div className="container">
        <div className="card shadow-md w-[400px] m-auto rounded-md bg-white p-5 px-10">
          <h2 className="text-center text-[18px] text-black">
            Login Your Account
          </h2>

          <form action="" className="w-full mt-5" onSubmit={handelSubmit}>
            <div className="form-group w-full mb-5">
              <TextField
                type="email"
                id="email"
                label="E-mail id*"
                variant="outlined"
                className="w-full"
                name="email"
                value={formFields.email}
                disabled={isLoading === true ? true : false}
                onChange={onChangeInput}
              />
            </div>
            <div className="form-group w-full mb-5 relative">
              <TextField
                type={isPasswordShow === false ? "password" : "text"}
                id="password"
                label="Password*"
                variant="outlined"
                className="w-full"
                name="password"
                value={formFields.password}
                disabled={isLoading === true ? true : false}
                onChange={onChangeInput}
              />
              <Button
                className="!absolute top-[10px] right-[10px] z-50 !w-[35px] !h-[35px] !min-w-[35px] !rounded-full !text-black opacity-75"
                onClick={() => setIsPasswordShow(!isPasswordShow)}
              >
                {isPasswordShow === false ? (
                  <IoMdEye size={22} />
                ) : (
                  <IoMdEyeOff size={22} />
                )}
              </Button>
            </div>
            <Link
              to="#"
              onClick={forGotPassword}
              className="link cursor-pointer text-[14px] font-[600] pt-3"
            >
              Forget Password?
            </Link>
            <div className="flex items-center w-full mt-3 mb-3">
              <Button
                type="submit"
                disabled={!validValue}
                className="btn-org btn-lg w-full"
              >
                {isLoading ? (
                  <CircularProgress
                    color="inherit"
                    style={{ width: "20px", height: "20px" }}
                  />
                ) : (
                  "Submit"
                )}
              </Button>
            </div>
            <p>
              Not Registred?{" "}
              <Link
                to="/register"
                className="link text-[14px] font-[600] text-[#ff5252]"
              >
                Sign Up
              </Link>
            </p>
            <p className="text-center font-[500]">
              Or Continue with Social Account
            </p>
            <Button className="flex gap-3 w-full !bg-[#f1f1f1] btn-lg !text-black">
              <FcGoogle size={22} />
              Login With Google
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
