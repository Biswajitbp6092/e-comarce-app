import React, {useContext, useEffect } from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import { RiMenu2Fill } from "react-icons/ri";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";
import { GoRocket } from "react-icons/go";
import CategoryPanel from "./CategoryPanel";
import "../Header.css";
import { myContext } from "../../../App";

const Navigation = () => {
  const [isOpenCatPanel, setIsOpenCatPanel] = useState(false);
  const [catData, setCatData] = useState([]);

  const context = useContext(myContext);

  useEffect(() => {
    setCatData(context?.catData);
  }, [context?.catData]);

  const openCategoryPanel = () => {
    setIsOpenCatPanel(true);
  };
  return (
    <>
      <nav className="">
        <div className="container flex items-center justify-between gap-8">
          <div className="col_1 w-[20%]">
            <Button
              onClick={openCategoryPanel}
              className="!text-black gap-3 w-full"
            >
              <RiMenu2Fill size={18} />
              Shop By Categories{" "}
              <IoIosArrowDown
                size={18}
                className="ml-auto font-bold cursor-pointer"
              />
            </Button>
          </div>
          <div className="col_2 w-[60%]">
            <ul className="flex items-center gap-5 nav">
              <li className="list-none">
                <Link to="/" className="link transition text-base font-[500]">
                  <Button className="link transition !font-[500] !text-[rgba(0,0,0,0.7)] hover:!text-[#ff5252] !py-4 !normal-case">
                    Home
                  </Button>
                </Link>
              </li>

              {catData?.length !== 0 &&
                catData?.map((cat, index) => {
                  return (
                    <li className="list-none relative" key={index}>
                      <Link
                        to="/productlisting"
                        className="link transition text-base font-[500]"
                      >
                        <Button className="link transition !font-[500] !text-[rgba(0,0,0,0.7)] hover:!text-[#ff5252] !py-4 !normal-case">
                          {cat?.name}
                        </Button>
                      </Link>
                      {cat?.children?.length !== 0 && (
                        <div className="submenu absolute top-[120%] left-[0%] min-w-[150px] bg-white shadow-md opacity-0 transition-all">
                          <ul>
                            {cat?.children?.map((subCat, subIndex) => {
                              return (
                                <li
                                  className="list-none w-full relative"
                                  key={subIndex}
                                >
                                  <Link to="/fashion" className="w-full">
                                    <Button className="!text-[rgba(0,0,0,0.8)] !normal-case w-full !text-left !justify-start !rounded-none">
                                      {subCat?.name}
                                    </Button>
                                    {subCat?.children?.length !== 0 && (
                                      <div className="submenu absolute top-[0%] left-[100%] min-w-[150px] bg-white shadow-md opacity-0 transition-all">
                                        <ul>
                                          {subCat?.children?.map(
                                            (thirdLavelCat, index__) => {
                                              return (
                                                <li
                                                  className="list-none w-full"
                                                  key={index__}
                                                >
                                                  <Link
                                                    to="/fashion"
                                                    className="w-full"
                                                  >
                                                    <Button className="!text-[rgba(0,0,0,0.8)] !normal-case w-full !text-left !justify-start !rounded-none">
                                                      {thirdLavelCat?.name}
                                                    </Button>
                                                  </Link>
                                                </li>
                                              );
                                            }
                                          )}
                                        </ul>
                                      </div>
                                    )}
                                  </Link>
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                      )}
                    </li>
                  );
                })}
            </ul>
          </div>
          <div className="col_3 w-[20%]">
            <p className="text-base font-[500] flex items-center gap-3 mb-0 mt-0 justify-end">
              <GoRocket size={22} />
              Free International Delivery
            </p>
          </div>
        </div>
      </nav>

      {catData?.length !== 0 && (
        <CategoryPanel
          isOpenCatPanel={isOpenCatPanel}
          setIsOpenCatPanel={setIsOpenCatPanel}
          data={catData}
        />
      )}
    </>
  );
};

export default Navigation;
