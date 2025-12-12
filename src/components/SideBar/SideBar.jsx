import React, { useContext, useEffect, useState } from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import "./SideBar.css";
import { Collapse } from "react-collapse";
import Button from "@mui/material/Button";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
import Rating from "@mui/material/Rating";
import { myContext } from "../../App";
import { useLocation } from "react-router-dom";
import { postData } from "../../utlis/api";

const SideBar = (props) => {
  const [isOpenCategoriFilter, setIsOpenCategoriFilter] = useState(true);

  const [filters, setFilters] = useState({
    catId: [],
    subCatId: [],
    thirdSubCatId: [],
    minPrice: "",
    maxPrice: "",
    rating: "",
    page: 1,
    limit: 24,
  });

  const [price, setprice] = useState([0, 60000]);
  const context = useContext(myContext);

  const location = useLocation();

  const handelCheckBoxChange = (field, value) => {
    const currentValues = filters[field] || [];
    const updatedValues = currentValues?.includes(value)
      ? currentValues.filter((item) => item !== value)
      : [...currentValues, value];

    setFilters((prev) => ({
      ...prev,
      [field]: updatedValues,
    }));

    if (field === "catId") {
      setFilters((prev) => ({
        ...prev,
        subCatId: [],
        thirdSubCatId: [],
      }));
    }
  };

  useEffect(() => {
    const url = window.location.href;
    const queryParameters = new URLSearchParams(location.search);

    if (url.includes("catId")) {
      const category = queryParameters.get("catId");
      const catArr = [];
      catArr.push(category);
      filters.catId = catArr;
      filters.subCatId = [];
      filters.thirdSubCatId = [];
      filters.rating = [];
    }
    if (url.includes("subCatId")) {
      const subcategory = queryParameters.get("subCatId");
      const subcatArr = [];
      subcatArr.push(subcategory);
      filters.subCatId = subcatArr;
      filters.catId = [];
      filters.thirdSubCatId = [];
      filters.rating = [];
    }
    if (url.includes("thirdSubCatId")) {
      const thirdcategoryId = queryParameters.get("thirdSubCatId");
      const thirdcatArr = [];
      thirdcatArr.push(thirdcategoryId);
      filters.subCatId = [];
      filters.catId = [];
      filters.thirdSubCatId = thirdcatArr;
      filters.rating = [];
    }
    filters.page = 1;

    setTimeout(() => {
      filtersData();
    }, 200);
  }, [location]);

  const filtersData = () => {
    props.setIsLoading(true);
    postData(`/api/product/filters`, filters).then((res) => {
      props.setProductsData(res);
      props.setIsLoading(false);
      props.setTotalPages(res?.totalPages);
      window.scrollTo(0, 0);
    });
  };

  useEffect(() => {
    filters.page = props.page;
    filtersData();
  }, [filters, props.page]);

  useEffect(() => {
    setFilters((prev) => ({
      ...prev,
      minPrice: price[0],
      maxPrice: price[1],
    }));
  }, [price]);

  return (
    <aside className="sideBar py-5 sticky top-[140px] z-40">
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
            {context?.catData?.length !== 0 &&
              context.catData?.map((item, index) => {
                return (
                  <FormControlLabel
                    key={index}
                    value={item?._id}
                    control={<Checkbox />}
                    checked={filters?.catId?.includes(item?._id)}
                    label={item?.name}
                    onChange={() => handelCheckBoxChange("catId", item?._id)}
                    className="w-full"
                  />
                );
              })}
          </div>
        </Collapse>
      </div>

      <div className="box mt-4">
        <h3 className="w-full mb-3 text-[18px] font-[500] flex items-center pr-5">
          Filter By Price
        </h3>
        <RangeSlider
          value={price}
          onInput={setprice}
          min={99}
          max={60000}
          setp={5}
        />
        <div className="flex pt-4 pb-2 priceRange">
          <span className="text-[13px]">
            Frome : <strong className="text-dark"> Rs: {price[0]}</strong>
          </span>
          <span className="ml-auto text-[13px]">
            Frome : <strong className="text-dark"> Rs: {price[1]}</strong>
          </span>
        </div>
      </div>

      <div className="box mt-4">
        <h3 className="w-full mb-3 text-[18px] font-[500] flex items-center pr-5">
          Filter By Ratting
        </h3>
        <div className="flex items-center">
          <FormControlLabel
            value={5}
            control={<Checkbox />}
            checked={filters?.rating?.includes(5)}
            onChange={() => handelCheckBoxChange("rating", 5)}
          />
          <Rating name="rating" value={5} size="small" readOnly />
        </div>

        <div className="flex items-center">
          <FormControlLabel
            value={4}
            control={<Checkbox />}
            checked={filters?.rating?.includes(4)}
            onChange={() => handelCheckBoxChange("rating", 4)}
          />
          <Rating name="rating" value={4} size="small" readOnly />
        </div>

        <div className="flex items-center">
          <FormControlLabel
            value={3}
            control={<Checkbox />}
            checked={filters?.rating?.includes(3)}
            onChange={() => handelCheckBoxChange("rating", 3)}
          />
          <Rating name="rating" value={3} size="small" readOnly />
        </div>

        <div className="flex items-center">
          <FormControlLabel
            value={2}
            control={<Checkbox />}
            checked={filters?.rating?.includes(2)}
            onChange={() => handelCheckBoxChange("rating", 2)}
          />
          <Rating name="rating" value={2} size="small" readOnly />
        </div>

        <div className="flex items-center">
          <FormControlLabel
            value={1}
            control={<Checkbox />}
            checked={filters?.rating?.includes(1)}
            onChange={() => handelCheckBoxChange("rating", 1)}
          />
          <Rating name="rating" value={1} size="small" readOnly />
        </div>
      </div>
    </aside>
  );
};

export default SideBar;
