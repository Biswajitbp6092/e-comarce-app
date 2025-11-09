import React, { use, useContext, useEffect, useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import AccountSideBar from "../../components/AccountSideBar/AccountSideBar";
import { myContext } from "../../App";
import { useNavigate } from "react-router-dom";
import { editData } from "../../utlis/api";
import CircularProgress from "@mui/material/CircularProgress";

const MyAccount = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [userId, setUserId] = useState("");

  const [formFields, setFormFields] = useState({
    name: "",
    email: "",
    mobile: "",
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
    }
  }, [Context?.userData]);

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
    // Only digits check
    if (!/^[0-9]+$/.test(formFields.mobile)) {
      Context.openAlartBox("Error", "Mobile number must contain only digits");
      setIsLoading(false);
      return false;
    }

    // 10 digit check
    if (formFields.mobile.length !== 10) {
      Context.openAlartBox("Error", "Mobile number must be exactly 10 digits");
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

  return (
    <section className="py-10 w-full">
      <div className="container flex gap-5">
        <div className="col1 w-[20%]">
          <AccountSideBar />
        </div>

        <div className="col2 w-[50%]">
          <div className="card bg-white p-5 shadow-md rounded-md">
            <h2 className="pb-3">My Profile</h2>
            <hr />
            <form action="" className="mt-5" onSubmit={handelSubmit}>
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
                  <TextField
                    label="Phone Number"
                    variant="outlined"
                    size="small"
                    className="w-full"
                    name="mobile"
                    value={formFields.mobile}
                    disabled={isLoading === true ? true : false}
                    onChange={onChangeInput}
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
        </div>
      </div>
    </section>
  );
};

export default MyAccount;
