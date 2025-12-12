import React, { useContext, useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { postData } from "../../utlis/api";
import { myContext } from "../../App";
import CircularProgress from "@mui/material/CircularProgress";
import { useNavigate } from "react-router-dom";

import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { firebaseApp } from "../../firebase";
const auth = getAuth(firebaseApp);
const GoogleProvider = new GoogleAuthProvider();

const Register = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isPasswordShow, setIsPasswordShow] = useState(false);

  const [formFields, setFormFields] = useState({
    name: "",
    email: "",
    password: "",
  });

  const context = useContext(myContext);
  const navigate = useNavigate();

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

    if (formFields.name === "") {
      context.openAlartBox("Error", "Please add full name");
      return false;
    }
    if (formFields.email === "") {
      context.openAlartBox("Error", "Please Enter email id");
      return false;
    }
    if (formFields.password === "") {
      context.openAlartBox("Error", "Please Enter password");
      return false;
    }

    postData("/api/user/register", formFields).then((res) => {
      if (res?.error !== true) {
        setIsLoading(false);
        context.openAlartBox("Sucess", res?.message);
        localStorage.setItem("userEmail", formFields.email);
        setFormFields({
          name: "",
          email: "",
          password: "",
        });
        navigate("/verify");
      } else {
        context.openAlartBox("Error", res?.message);
        setIsLoading(false);
      }
    });
  };

  const authWithGoogle = () => {
    signInWithPopup(auth, GoogleProvider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;

        const fields = {
          name: user.providerData[0].displayName,
          email: user.providerData[0].email,
          password: null,
          avatar: user.providerData[0].photoURL,
          mobile: user.providerData[0].phoneNumber,
          role: "user",
        };

        postData("/api/user/authWithGoogle", fields).then((res) => {
          if (res?.error !== true) {
            setIsLoading(false);
            context.openAlartBox("Sucess", res?.message);
            localStorage.setItem("userEmail", fields.email);
            
            localStorage.setItem("accessToken", res?.data?.accessToken);
            localStorage.setItem("refreshToken", res?.data?.refreshToken);

            context.setIsLogin(true);
            navigate("/");
          } else {
            context.openAlartBox("Error", res?.message);
            setIsLoading(false);
          }
        });
        // IdP data available using getAdditionalUserInfo(result)
        // ...
        console.log(user);
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };

  return (
    <section className="section py-10">
      <div className="container">
        <div className="card shadow-md w-[400px] m-auto rounded-md bg-white p-5 px-10">
          <h2 className="text-center text-[18px] text-black">
            Register with a New Account
          </h2>

          <form action="" className="w-full mt-5" onSubmit={handelSubmit}>
            <div className="form-group w-full mb-5">
              <TextField
                type="text"
                id="name"
                name="name"
                label="Full Name*"
                variant="outlined"
                className="w-full"
                value={formFields.name}
                disabled={isLoading === true ? true : false}
                onChange={onChangeInput}
              />
            </div>
            <div className="form-group w-full mb-5">
              <TextField
                type="email"
                id="email"
                name="email"
                label="E-mail id*"
                variant="outlined"
                className="w-full"
                value={formFields.email}
                disabled={isLoading === true ? true : false}
                onChange={onChangeInput}
              />
            </div>
            <div className="form-group w-full mb-5 relative">
              <TextField
                type={isPasswordShow === false ? "password" : "text"}
                id="password"
                name="password"
                label="Password*"
                variant="outlined"
                className="w-full"
                value={formFields.password}
                disabled={isLoading === true ? true : false}
                onChange={onChangeInput}
              />
              <Button
                onClick={() => setIsPasswordShow(!isPasswordShow)}
                className="!absolute top-[10px] right-[10px] z-50 !w-[35px] !h-[35px] !min-w-[35px] !rounded-full !text-black opacity-75"
              >
                {isPasswordShow === false ? (
                  <IoMdEye size={22} />
                ) : (
                  <IoMdEyeOff size={22} />
                )}
              </Button>
            </div>
            <div className="flex items-center w-full mt-3 mb-3">
              <Button
                type="submit"
                disabled={!validValue}
                className="btn-org btn-lg w-full flex gap-3"
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
              Already have an account ! &nbsp;
              <Link
                to="/login"
                className="link text-[14px] font-[600] text-[#ff5252]"
              >
                Login
              </Link>
            </p>
            <p className="text-center font-[500]">
              Or Continue with Social Account
            </p>
            <Button
              className="flex gap-3 w-full !bg-[#f1f1f1] btn-lg !text-black"
              onClick={authWithGoogle}
            >
              <FcGoogle size={22} />
              Sign In With Google
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Register;
