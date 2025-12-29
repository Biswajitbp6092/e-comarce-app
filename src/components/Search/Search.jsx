import React from "react";
import "./search.css";
import Button from "@mui/material/Button";
import { IoSearchSharp } from "react-icons/io5";
import { useState } from "react";
import { useContext } from "react";
import { myContext } from "../../App";
import { useNavigate } from "react-router-dom";
import { postData } from "../../utlis/api";
import CircularProgress from "@mui/material/CircularProgress";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const context = useContext(myContext);
  const navigate = useNavigate();

  const onChangeInput = (e) => {
    setSearchQuery(e.target.value);
  };

  const search = () => {
    setIsLoading(true);
    const obj = {
      page: 1,
      limit: 30,
      query: searchQuery,
    };
    if (searchQuery !== "") {
      postData(`/api/product/search/get`, obj).then((res) => {
        context.setSearchData(res);
        setTimeout(() => {
          setIsLoading(false);
          navigate("/search");
        },1000);
      });
    }
  };
  return (
    <div className="search-box w-full h-[45px] bg-white border-2 border-gray-300 rounded-md relative p-2 ">
      <input
        type="text"
        placeholder="Searc for Products...."
        className="w-full h-full focus:outline-none bg-inherit p-2 text-[15px]"
        value={searchQuery}
        onChange={onChangeInput}
      />
      <Button
        className="!absolute top-[4px] right-0 !w-[35px] !h-[35px] !min-w-[35px] !rounded-full"
        onClick={search}
      >
        {isLoading ? (
          <CircularProgress color="inherit" style={{width:'20px', height:"20px"}} />
        ) : (
          <IoSearchSharp size={28} className="text-gray-600" />
        )}
      </Button>
    </div>
  );
};

export default Search;
