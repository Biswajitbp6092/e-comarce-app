import React, { useContext, useEffect, useState } from "react";
import AccountSideBar from "../../components/AccountSideBar/AccountSideBar";
import Radio from "@mui/material/Radio";
import { myContext } from "../../App";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import { deleteData, fetchDataFromApi, postData } from "../../utlis/api";
import { MdDeleteForever } from "react-icons/md";

const label = { slotProps: { input: { "aria-label": "Radio demo" } } };

const Address = () => {
  const [phone, setPhone] = useState("");
  const [status, setStatus] = useState(false);
  const [isOpenModel, setIsOpenModel] = useState(false);
  const [address, setAddress] = useState([]);

  const [formFields, setFormFields] = useState({
    address_line: "",
    city: "",
    state: "",
    pin_code: "",
    country: "",
    mobile: "",
    status: "",
    userId: "",
    selected: false,
  });

  const [isLoading, setIsLoading] = useState(false);

  const [selectedValue, setSelectedValue] = useState("");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const context = useContext(myContext);

  useEffect(() => {
    if (context?.userData?._id) {
      setFormFields((prevState) => ({
        ...prevState,
        userId: context.userData._id,
      }));
    }
  }, [context?.userData]);

  useEffect(() => {
    if (context?.userData?._id !== "" && context?.userData?._id !== undefined) {
      fetchDataFromApi(
        `/api/address/get?userId=${context?.userData?._id}`
      ).then((res) => {
        setAddress(res.data?.data);
      });
    }
  }, [context?.userData]);

  const handleClose = () => {
    setIsOpenModel(false);
  };

  const handleChangeStatus = (event) => {
    setStatus(event.target.value);
    setFormFields((prevState) => ({
      ...prevState,
      status: event.target.value,
    }));
  };

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setFormFields((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const removeAddress = (id) => {
    deleteData(`/api/address/${id}`).then((res) => {
      fetchDataFromApi(
        `/api/address/get?userId=${context?.userData?._id}`
      ).then((res) => {
        setAddress(res.data?.data);
      });
    });
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    if (formFields.address_line === "") {
      context.openAlartBox("Error", "Please Enter Address Line 1");
      setIsLoading(false);
      return false;
    }
    if (formFields.city === "") {
      context.openAlartBox("Error", "Please Enter Your City");
      setIsLoading(false);
      return false;
    }
    if (formFields.state === "") {
      context.openAlartBox("Error", "Please Enter your State");
      setIsLoading(false);
      return false;
    }
    if (formFields.pin_code === "") {
      context.openAlartBox("Error", "Please Enter your Pin Code");
      setIsLoading(false);
      return false;
    }
    if (formFields.country === "") {
      context.openAlartBox("Error", "Please Enter your Country");
      setIsLoading(false);
      return false;
    }
    // if (formFields.mobile === "") {
    //   context.openAlartBox("Error", "Please Enter your Mobile Number");
    //   setIsLoading(false);
    //   return false;
    // }
    if (phone === "") {
      context.openAlartBox("Error", "Please Enter your 10 Digit Phone Number");
      setIsLoading(false);
      return false;
    }

    postData(`/api/address/add`, formFields, {
      withCredentials: true,
    }).then((res) => {
      if (res?.error !== true) {
        setIsLoading(false);
        context.openAlartBox("Sucess", res?.message);
        setIsOpenModel(false);

        fetchDataFromApi(
          `/api/address/get?userId=${context?.userData?._id}`
        ).then((res) => {
          setAddress(res.data?.data);
        });
      } else {
        context.openAlartBox("Error", res?.message);
        setIsLoading(false);
      }
    });
  };

  return (
    <>
      <section className="py-10 w-full">
        <div className="container flex gap-5">
          <div className="col1 w-[20%]">
            <AccountSideBar />
          </div>

          <div className="col2 w-[50%]">
            <div className="card bg-white p-5 shadow-md rounded-md mb-5">
              <div className="flex items-center pb-3">
                <h2 className="pb-0">Address</h2>
              </div>
              <hr />

              <div
                className="flex items-center justify-center p-5 rounded-md border border-dashed border-[rgba(0,0,0,0.2)] bg-[#f1f1f1] hover:bg-[#e7f3f9] cursor-pointer"
                onClick={() => setIsOpenModel(true)}
              >
                <span className="text-[14px] font-[500]">Add Address</span>
              </div>

              <div className="flex gap-2 flex-col mt-4">
                {address?.length > 0 &&
                  address?.map((address, index) => {
                    return (
                      <>
                        <div className=" group relative border border-dashed border-[rgba(0,0,0,0.2)] addressBox w-full flex items-center justify-center bg-[#f1f1f1] p-3 rounded-md cursor-pointer">
                          <label className="mr-auto">
                            <Radio
                              {...label}
                              name="address"
                              checked={selectedValue === address?._id}
                              value={address?._id}
                              onChange={handleChange}
                            />
                            <span className="text-[12px]">
                              {address?.address_line +
                                " " +
                                address?.city +
                                " " +
                                address?.country +
                                " " +
                                address?.state +
                                " " +
                                address?.pin_code +
                                " " +
                                "(" +
                                address?.mobile +
                                ")"}
                            </span>
                          </label>
                          <span
                            onClick={() => removeAddress(address?._id)}
                            className="hidden group-hover:flex items-center justify-center w-[30px] h-[30px] rounded-full bg-[#ff5252] z-50 text-white ml-auto"
                          >
                            <MdDeleteForever size={22} />
                          </span>
                        </div>
                      </>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Dialog open={isOpenModel}>
        <DialogTitle>Add Address</DialogTitle>
        <form action="" className="p-8 py-3 pb-8" onSubmit={handelSubmit}>
          <div className="flex items-center gap-5 pb-5">
            <div className="col w-[100%]">
              <TextField
                className="w-full"
                label="Address Line"
                variant="outlined"
                size="small"
                name="address_line"
                onChange={onChangeInput}
                value={formFields.address_line}
              />
            </div>
          </div>

          <div className="flex items-center gap-5 pb-5">
            <div className="col w-[50%]">
              <TextField
                className="w-full"
                label="City"
                variant="outlined"
                size="small"
                name="city"
                onChange={onChangeInput}
                value={formFields.city}
              />
            </div>
            <div className="col w-[50%]">
              <TextField
                className="w-full"
                label="State"
                variant="outlined"
                size="small"
                name="state"
                onChange={onChangeInput}
                value={formFields.state}
              />
            </div>
          </div>

          <div className="flex items-center gap-5 pb-5">
            <div className="col w-[50%]">
              <TextField
                className="w-full"
                label="Pine Code"
                variant="outlined"
                size="small"
                name="pin_code"
                onChange={onChangeInput}
                value={formFields.pin_code}
              />
            </div>
            <div className="col w-[50%]">
              <TextField
                className="w-full"
                label="Country"
                variant="outlined"
                size="small"
                name="country"
                onChange={onChangeInput}
                value={formFields.country}
              />
            </div>
          </div>
          <div className="flex items-center gap-5 pb-5">
            <div className="col w-[50%]">
              <PhoneInput
                defaultCountry="in"
                value={phone}
                onChange={(phone) => {
                  setPhone(phone);
                  setFormFields((prevState) => ({
                    ...prevState,
                    mobile: phone,
                  }));
                }}
              />
            </div>
            <div className="col w-[50%]">
              <Select
                value={status}
                onChange={handleChangeStatus}
                displayEmpty
                inputProps={{ "aria-label": "Without label" }}
                size="small"
                className="w-full"
              >
                <MenuItem value={true}>True</MenuItem>
                <MenuItem value={false}>False</MenuItem>
              </Select>
            </div>
          </div>
          <div className="flex items-center gap-5">
            <Button
              className="btn-org btn-lg w-full flex gap-2 items-center"
              type="submit"
            >
              Save
            </Button>
            <Button
              className="btn-border  btn-lg w-full flex gap-2 items-center"
              onClick={handleClose}
            >
              Cancel
            </Button>
          </div>
        </form>
      </Dialog>
    </>
  );
};

export default Address;
