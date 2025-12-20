import React, { useContext, useEffect, useState } from "react";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import RadioGroup from "@mui/material/RadioGroup";
import TextField from "@mui/material/TextField";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import { myContext } from "../../App";
import Radio from "@mui/material/Radio";
import { editData, fetchDataFromApi, postData } from "../../utlis/api";
import CircularProgress from "@mui/material/CircularProgress";

const AddAddress = () => {
  const [phone, setPhone] = useState("");
  const [addressType, setAddressType] = useState("");

  const [formFields, setFormFields] = useState({
    address_line: "",
    city: "",
    state: "",
    pin_code: "",
    country: "",
    mobile: "",
    userId: "",
    addresType: "",
    landmark: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const context = useContext(myContext);

  useEffect(() => {
    if (context?.userData?._id) {
      setFormFields((prevState) => ({
        ...prevState,
        userId: context.userData._id,
      }));
    }
  }, [context?.userData]);

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setFormFields((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleChangeAddressType = (event) => {
    setAddressType(event.target.value);
    setFormFields(() => ({
      ...formFields,
      addresType: event.target.value,
    }));
  };

  useEffect(() => {
    if (context?.addressMode === "edit") {
      fetchAddress(context?.addressId);
    }
  }, [context?.addressMode]);

  const handelSubmit = (e) => {
    e.preventDefault();

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

    if (phone === "") {
      context.openAlartBox("Error", "Please Enter your 10 Digit Phone Number");
      setIsLoading(false);
      return false;
    }
    if (formFields.landmark === "") {
      context.openAlartBox("Error", "Please Enter your landmark");
      setIsLoading(false);
      return false;
    }
    if (formFields.addresType === "") {
      context.openAlartBox("Error", "Please select address type");
      setIsLoading(false);
      return false;
    }

    if (context?.addressMode === "add") {
      setIsLoading(true);
      postData(`/api/address/add`, formFields, { withCredentials: true }).then(
        (res) => {
          console.log(res);
          if (res?.error !== true) {
            context.openAlartBox("Sucess", res?.message);
            setTimeout(() => {
              setIsLoading(false);
              context?.setOpenAddressPanel(false);
            }, 500);
            context?.getUserDetails();

            setFormFields({
              address_line: "",
              city: "",
              state: "",
              pin_code: "",
              country: "",
              mobile: "",
              userId: "",
              addresType: "",
              landmark: "",
            });
            setAddressType("");
            setPhone("");
          } else {
            context.openAlartBox("Error", res?.data?.message);
            setIsLoading(false);
          }
        }
      );
    }

    if (context?.addressMode === "edit") {
      setIsLoading(true);
      editData(`/api/address/${context?.addressId}`, formFields, {
        withCredentials: true,
      }).then((res) => {
        context.openAlartBox("Sucess", res?.data?.message);
        fetchDataFromApi(
          `/api/address/get?userId=${context?.userData?._id}`
        ).then((res) => {
          setTimeout(() => {
            setIsLoading(false);
            context?.setOpenAddressPanel(false);
          });
          context?.getUserDetails(res.data?.data);

          setFormFields({
            address_line: "",
            city: "",
            state: "",
            pin_code: "",
            country: "",
            mobile: "",
            userId: "",
            addresType: "",
            landmark: "",
          });
          setAddressType("");
          setPhone("");
        });
      });
    }
  };

  const fetchAddress = (id) => {

    fetchDataFromApi(`/api/address/${id}`).then((res) => {
      setFormFields({
        address_line: res?.data?.address?.address_line,
        city: res?.data?.address?.city,
        state: res?.data?.address?.state,
        pin_code: res?.data?.address?.pin_code,
        country: res?.data?.address?.country,
        mobile: res?.data?.address?.mobile,
        userId: res?.data?.address?.userId,
        addresType: res?.data?.address?.addresType,
        landmark: res?.data?.address?.landmark,
      });
      const ph = `"${res?.data?.address?.mobile}"`;
      setPhone(ph);
      setAddressType(res?.data?.address?.addresType);
    });
  };

  return (
    <form action="" className="p-8 py-3 pb-8 px-4" onSubmit={handelSubmit}>
      <div className="col w-[100%] mb-4">
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

      <div className="col w-[100%] mb-4">
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

      <div className="col w-[100%] mb-4">
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

      <div className="col w-[100%] mb-4">
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
      <div className="col w-[100%] mb-4">
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
      <div className="col w-[100%] mb-4">
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
      <div className="col w-[100%] mb-4">
        <TextField
          className="w-full"
          label="Landmark"
          variant="outlined"
          size="small"
          name="landmark"
          onChange={onChangeInput}
          value={formFields.landmark}
        />
      </div>
      <div className="flex gap-5 pb-5 flex-col">
        <FormControl>
          <FormLabel id="demo-row-radio-buttons-group-label">
            Address Type
          </FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
            className="flex items-center gap-5"
            value={addressType}
            onChange={handleChangeAddressType}
          >
            <FormControlLabel value="home" control={<Radio />} label="Home" />
            <FormControlLabel value="work" control={<Radio />} label="Work" />
          </RadioGroup>
        </FormControl>
      </div>

      <div className="flex items-center gap-5">
        <Button
          className="btn-org btn-lg w-full flex gap-2 items-center"
          type="submit"
          disabled={isLoading}
        >
          {isLoading ? (
            <CircularProgress
              size={20}
              color="inherit"
              style={{ width: "28px", height: "28px" }}
            />
          ) : (
            "Save"
          )}
        </Button>
      </div>
    </form>
  );
};

export default AddAddress;
