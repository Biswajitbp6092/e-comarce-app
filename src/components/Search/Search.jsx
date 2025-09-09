import React from "react";
import "./Search.css";
import Button from '@mui/material/Button';
import { IoSearchSharp } from "react-icons/io5";

const Search = () => {
  return (
    <div className="search-box w-full h-[45px] bg-white border-2 border-gray-300 rounded-md relative p-2 ">
      <input
        type="text"
        placeholder="Searc for Products...."
        className="w-full h-full focus:outline-none bg-inherit p-2 text-[15px]"
      />
      <Button className="!absolute top-[4px] right-0 !w-[35px] !h-[35px] !min-w-[35px] !rounded-full"><IoSearchSharp size={28} className="text-gray-600"/></Button>
    </div>
  );
};

export default Search;
