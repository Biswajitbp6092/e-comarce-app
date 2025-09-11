import React, { useState } from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import "./SideBar.css";
import { Collapse } from "react-collapse";
import Button from "@mui/material/Button";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
import Rating from "@mui/material/Rating";

const SideBar = () => {
  const [isOpenCategoriFilter, setIsOpenCategoriFilter] = useState(true);
  const [isOpenAvilFilter, setIsOpenAvilFilter] = useState(true);
  const [isOpenSizeFilter, setIsOpenSizeFilter] = useState(true);
  return (
    <aside className="sideBar py-5">
      <div className="box">
        <h3 className="w-full mb-3 text-[18px] font-[500] flex items-center pr-5">
          Shop By Categories{" "}
          <Button
            className="!w-[30px] !h-[30px] !min-w-[30px] !rounded-full !ml-auto !text-black"
            onClick={() => setIsOpenCategoriFilter(!isOpenCategoriFilter)}
          >
            {isOpenCategoriFilter === true ? (
              <IoIosArrowDown />
            ) : (
              <IoIosArrowUp />
            )}
          </Button>
        </h3>
        <Collapse isOpened={isOpenCategoriFilter}>
          <div className="scroll px-4 relative -left-[13px]">
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Fashion"
              className="w-full"
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Fashion"
              className="w-full"
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Fashion"
              className="w-full"
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Fashion"
              className="w-full"
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Fashion"
              className="w-full"
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Fashion"
              className="w-full"
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Fashion"
              className="w-full"
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Fashion"
              className="w-full"
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Fashion"
              className="w-full"
            />
          </div>
        </Collapse>
      </div>

      <div className="box mt-3">
        <h3 className="w-full mb-3 text-[18px] font-[500] flex items-center pr-5">
          Availability{" "}
          <Button
            className="!w-[30px] !h-[30px] !min-w-[30px] !rounded-full !ml-auto !text-black"
            onClick={() => setIsOpenAvilFilter(!isOpenAvilFilter)}
          >
            {isOpenAvilFilter === true ? <IoIosArrowDown /> : <IoIosArrowUp />}
          </Button>
        </h3>
        <Collapse isOpened={isOpenAvilFilter}>
          <div className="scroll px-4 relative -left-[13px]">
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Available (17)"
              className="w-full"
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Instock (17)"
              className="w-full"
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Not Available (17)"
              className="w-full"
            />
          </div>
        </Collapse>
      </div>

      <div className="box mt-3">
        <h3 className="w-full mb-3 text-[18px] font-[500] flex items-center pr-5">
          Size{" "}
          <Button
            className="!w-[30px] !h-[30px] !min-w-[30px] !rounded-full !ml-auto !text-black"
            onClick={() => setIsOpenSizeFilter(!isOpenSizeFilter)}
          >
            {isOpenSizeFilter === true ? <IoIosArrowDown /> : <IoIosArrowUp />}
          </Button>
        </h3>
        <Collapse isOpened={isOpenSizeFilter}>
          <div className="scroll px-4 relative -left-[13px]">
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Small (17)"
              className="w-full"
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Meduim (17)"
              className="w-full"
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Large (17)"
              className="w-full"
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="XL (17)"
              className="w-full"
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="XXl (17)"
              className="w-full"
            />
          </div>
        </Collapse>
      </div>

      <div className="box mt-4">
        <h3 className="w-full mb-3 text-[18px] font-[500] flex items-center pr-5">
          Filter By Price
        </h3>
        <RangeSlider />
        <div className="flex pt-4 pb-2 priceRange">
          <span className="text-[13px]">
            Frome : <strong className="text-dark"> Rs: {0}</strong>
          </span>
          <span className="ml-auto text-[13px]">
            Frome : <strong className="text-dark"> Rs: {5000}</strong>
          </span>
        </div>
      </div>

      <div className="box mt-4">
        <h3 className="w-full mb-3 text-[18px] font-[500] flex items-center pr-5">
          Filter By Ratting
        </h3>
        <div className="w-full">
          <Rating name="size-small" defaultValue={5} size="small" readOnly />
        </div>
        <div className="w-full">
          <Rating name="size-small" defaultValue={4} size="small" readOnly />
        </div>
        <div className="w-full">
          <Rating name="size-small" defaultValue={3} size="small" readOnly />
        </div>
        <div className="w-full">
          <Rating name="size-small" defaultValue={2} size="small" readOnly />
        </div>
        <div className="w-full">
          <Rating name="size-small" defaultValue={1} size="small" readOnly />
        </div>
      </div>
    </aside>
  );
};

export default SideBar;
