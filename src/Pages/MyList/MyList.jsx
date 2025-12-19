import React, { useContext } from "react";
import MyListItems from "./MyListItems";
import AccountSideBar from "../../components/AccountSideBar/AccountSideBar";
import { myContext } from "../../App";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import { FaPlus } from "react-icons/fa6";

const MyList = () => {
  const context = useContext(myContext);
  return (
    <section className="py-10 w-full">
      <div className="container flex gap-5">
        <div className="col1 w-[20%]">
          <AccountSideBar />
        </div>

        <div className="col2 w-[70%]">
          <div className="shadow-md rounded-md p-5 bg-white">
            <div className="py-2 px-3 border-b border-[rgba(0,0,0,0.1)]">
              <h2>My List</h2>
              <p className="mt-0">
                There is{" "}
                <span className="font-bold text-[#ff5252]">
                  {context?.myListData?.length || 0}
                </span>{" "}
                Product in your cart
              </p>
            </div>
            {context?.myListData?.length !== 0 ? (
              context?.myListData?.map((item, index) => {
                return <MyListItems item={item} index={index} />;
              })
            ) : (
              <div className="flex items-center justify-center flex-col py-10 px-3">
                <img src="/wishlist.png" alt="" className="w-[100px]" />
                <h3 className="text-[24px] pt-2">Your wishlist is empty</h3>
                <p className="!mt-0 !text-sm">
                  Create your frist wishlist request
                </p>
                <Link to={"/"}>
                  <Button className="btn-org btn-sm gap-3">
                    <FaPlus />
                    Create Wishlist
                  </Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyList;
