import React, {useContext, useEffect, useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import AccountSideBar from "../../components/AccountSideBar/AccountSideBar";
import { myContext } from "../../App";
import { Link, useNavigate } from "react-router-dom";
import { editData, postData } from "../../utlis/api";
import CircularProgress from "@mui/material/CircularProgress";
import { Collapse } from "react-collapse";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";


const MyAccount = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isLoading2, setIsLoading2] = useState(false);
  const [userId, setUserId] = useState("");
  const [isChangePassowrdFormShow, setIsChangePassowrdFormShow] = useState(false);

  const [formFields, setFormFields] = useState({
    name: "",
    email: "",
    mobile: "",
  });
  const [changePassword, setChangePassword] = useState({
    email: "",
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const Context = useContext(myContext);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (token === null) {
      navigate("/");
    }
  }, [Context?.isLogin]);

  useEffect(() => {
    if (Context?.userData?._id !== "" && Context?.userData?._id !== undefined) {
      setUserId(Context?.userData?._id);
      setFormFields({
        name: Context?.userData?.name || "",
        email: Context?.userData?.email || "",
        mobile: String(Context?.userData?.mobile || "").trim(),
      });

      setChangePassword({
        email: Context?.userData?.email || "",
      });
    }
  }, [Context?.userData]);

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    
    setFormFields(() => ({
      ...formFields,
      [name]: value,
    }));

    setChangePassword(() => ({
      ...formFields,
      [name]: value,
    }));
  };

  const validValue = Object.values(formFields).every((el) => el);

  const handelSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    if (formFields.name === "") {
      Context.openAlartBox("Error", "Please Enter Your name");
      setIsLoading(false);
      return false;
    }
    if (formFields.email === "") {
      Context.openAlartBox("Error", "Please Enter email id");
      setIsLoading(false);
      return false;
    }
    if (formFields.mobile === "") {
      Context.openAlartBox("Error", "Please Enter your mobile number");
      setIsLoading(false);
      return false;
    }

    editData(`/api/user/${userId}`, formFields, {
      withCredentials: true,
    }).then((res) => {
      console.log(res);

      if (res?.error !== true) {
        setIsLoading(false);
        Context.openAlartBox("Sucess", res?.data?.message);
      } else {
        Context.openAlartBox("Error", res?.data?.message);
        setIsLoading(false);
      }
    });
  };

  const validValue2 = Object.values(formFields).every((el) => el);

  const handelSubmitChangePassword = (e) => {
    e.preventDefault();
    setIsLoading2(true);

    if (changePassword.oldPassword === "") {
      Context.openAlartBox("Error", "Please Enter Your Old password");
      setIsLoading2(false);
      return false;
    }
    if (changePassword.newPassword === "") {
      Context.openAlartBox("Error", "Please Enter New Password");
      setIsLoading2(false);
      return false;
    }
    if (changePassword.confirmPassword === "") {
      Context.openAlartBox("Error", "Please Enter Confirm Password");
      setIsLoading2(false);
      return false;
    }
    if (changePassword.confirmPassword !== changePassword.newPassword) {
      Context.openAlartBox(
        "Error",
        "New Password and Confirm Password do not match"
      );
      setIsLoading2(false);
      return false;
    }

    postData(`/api/user/change-password`, changePassword, {
      withCredentials: true,
    }).then((res) => {
      if (res?.error !== true) {
        setIsLoading2(false);
        Context.openAlartBox("Sucess", res?.message);
      } else {
        Context.openAlartBox("Error", res?.message);
        setIsLoading2(false);
      }
    });
  };

  return (
    <section className="py-10 w-full">
      <div className="container flex gap-5">
        <div className="col1 w-[20%]">
          <AccountSideBar />
        </div>

        <div className="col2 w-[50%]">
          <div className="card bg-white p-5 shadow-md rounded-md mb-5">
            <div className="flex items-center pb-3">
              <h2 className="pb-0">My Profile</h2>
              <Button
                className="!ml-auto"
                onClick={() =>
                  setIsChangePassowrdFormShow(!isChangePassowrdFormShow)
                }
              >
                Change Password
              </Button>
            </div>
            <hr />
            <form action="" className="mt-8" onSubmit={handelSubmit}>
              <div className="flex items-center gap-5">
                <div className="w-[50%]">
                  <TextField
                    label="Full Name"
                    variant="outlined"
                    size="small"
                    className="w-full"
                    name="name"
                    value={formFields.name}
                    disabled={isLoading === true ? true : false}
                    onChange={onChangeInput}
                  />
                </div>

                <div className="w-[50%]">
                  <TextField
                    label="E-mail"
                    type="email"
                    variant="outlined"
                    size="small"
                    className="w-full"
                    name="email"
                    value={formFields.email}
                    disabled={isLoading === true ? true : false}
                    onChange={onChangeInput}
                  />
                </div>
              </div>

              <div className="flex items-center mt-4 gap-5">
                <div className="w-[50%]">
                  <PhoneInput
                    defaultCountry="in"
                    value={formFields.mobile}
                    onChange={(phone) =>
                      setFormFields((prev) => ({ ...prev, mobile: phone }))
                    }
                    autoFormat={true}
                    forceDialCode={true}
                    disableDialCodePrefill={false}
                    className="w-full border border-[rgba(0,0,0,0.2)] rounded-md"
                  />
                </div>
              </div>
              <br />
              <div className="flex items-center gap-4">
                <Button
                  type="submit"
                  disabled={!validValue}
                  className="btn-org btn-lg w-[180px]"
                >
                  {isLoading ? (
                    <CircularProgress
                      color="inherit"
                      style={{ width: "20px", height: "20px" }}
                    />
                  ) : (
                    "Update Profile"
                  )}
                </Button>
              </div>
            </form>
          </div>

          <Collapse isOpened={isChangePassowrdFormShow}>
            <div className="card bg-white p-5 shadow-md rounded-md">
              <div className="flex items-center pb-3">
                <h2 className="pb-0">Change Password</h2>
              </div>
              <hr />

              <form
                action=""
                className="mt-8"
                onSubmit={handelSubmitChangePassword}
              >
                <div className="flex items-center gap-5">
                  <div className="w-[50%]">
                    <TextField
                      label="Old Password"
                      variant="outlined"
                      size="small"
                      className="w-full"
                      name="oldPassword"
                      value={changePassword.oldPassword}
                      disabled={isLoading2 === true ? true : false}
                      onChange={onChangeInput}
                    />
                  </div>

                  <div className="w-[50%]">
                    <TextField
                      type="text"
                      label="New Password"
                      variant="outlined"
                      size="small"
                      className="w-full"
                      name="newPassword"
                      value={changePassword.newPassword}
                      onChange={onChangeInput}
                    />
                  </div>
                </div>

                <div className="flex items-center mt-4 gap-5">
                  <div className="w-[50%]">
                    <TextField
                      label="confirm Password"
                      variant="outlined"
                      size="small"
                      className="w-full"
                      name="confirmPassword"
                      value={changePassword.confirmPassword}
                      onChange={onChangeInput}
                    />
                  </div>
                </div>
                <br />
                <div className="my-2">
                  <Link to={"/login"}>Forgot Password</Link>
                </div>
                <div className="flex items-center gap-4">
                  <Button
                    type="submit"
                    disabled={!validValue2}
                    className="btn-org btn-lg w-[200px]"
                  >
                    {isLoading2 ? (
                      <CircularProgress
                        color="inherit"
                        style={{ width: "20px", height: "20px" }}
                      />
                    ) : (
                      "Change Password"
                    )}
                  </Button>
                </div>
              </form>
            </div>
          </Collapse>
        </div>
      </div>
    </section>
  );
};

export default MyAccount;
