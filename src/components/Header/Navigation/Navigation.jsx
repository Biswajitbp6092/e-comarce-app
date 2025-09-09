import React from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import { RiMenu2Fill } from "react-icons/ri";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";
import { GoRocket } from "react-icons/go";
import CategoryPanel from "./CategoryPanel";
import "../Header.css";

const Navigation = () => {
  const [isOpenCatPanel, setIsOpenCatPanel] = useState(false);
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
              <li className="list-none relative">
                <Link to="/" className="link transition text-base font-[500]">
                  <Button className="link transition !font-[500] !text-[rgba(0,0,0,0.7)] hover:!text-[#ff5252] !py-4 !normal-case">
                    Fashion
                  </Button>
                </Link>
                <div className="submenu absolute top-[120%] left-[0%] min-w-[150px] bg-white shadow-md opacity-0 transition-all">
                  <ul>
                    <li className="list-none w-full relative">
                      <Link to="/fashion" className="w-full">
                        <Button className="!text-[rgba(0,0,0,0.8)] !normal-case w-full !text-left !justify-start !rounded-none">
                          Men
                        </Button>
                        <div className="submenu absolute top-[0%] left-[100%] min-w-[150px] bg-white shadow-md opacity-0 transition-all">
                          <ul>
                            <li className="list-none w-full">
                              <Link to="/fashion" className="w-full">
                                <Button className="!text-[rgba(0,0,0,0.8)] !normal-case w-full !text-left !justify-start !rounded-none">
                                  T-shirt
                                </Button>
                              </Link>
                            </li>
                            <li className="list-none w-full">
                              <Link to="/fashion" className="w-full">
                                <Button className="!text-[rgba(0,0,0,0.8)] !normal-case w-full !text-left !justify-start !rounded-none">
                                  Jeans
                                </Button>
                              </Link>
                            </li>

                            <li className="list-none w-full">
                              <Link to="/fashion" className="w-full">
                                <Button className="!text-[rgba(0,0,0,0.8)] !normal-case w-full !text-left !justify-start !rounded-none">
                                  Footwear
                                </Button>
                              </Link>
                            </li>
                            <li className="list-none w-full">
                              <Link to="/fashion" className="w-full">
                                <Button className="!text-[rgba(0,0,0,0.8)] !normal-case w-full !text-left !justify-start !rounded-none">
                                  Watch
                                </Button>
                              </Link>
                            </li>
                            <li className="list-none w-full">
                              <Link to="/fashion" className="w-full">
                                <Button className="!text-[rgba(0,0,0,0.8)] !normal-case w-full !text-left !justify-start !rounded-none">
                                  Pents
                                </Button>
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </Link>
                    </li>
                    <li className="list-none w-full">
                      <Link to="/fashion" className="w-full">
                        <Button className="!text-[rgba(0,0,0,0.8)] !normal-case w-full !text-left !justify-start !rounded-none">
                          Women
                        </Button>
                      </Link>
                    </li>

                    <li className="list-none w-full">
                      <Link to="/fashion" className="w-full">
                        <Button className="!text-[rgba(0,0,0,0.8)] !normal-case w-full !text-left !justify-start !rounded-none">
                          Kides
                        </Button>
                      </Link>
                    </li>
                    <li className="list-none w-full">
                      <Link to="/fashion" className="w-full">
                        <Button className="!text-[rgba(0,0,0,0.8)] !normal-case w-full !text-left !justify-start !rounded-none">
                          Girls
                        </Button>
                      </Link>
                    </li>
                    <li className="list-none w-full">
                      <Link to="/fashion" className="w-full">
                        <Button className="!text-[rgba(0,0,0,0.8)] !normal-case w-full !text-left !justify-start !rounded-none">
                          Boys
                        </Button>
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="list-none">
                <Link to="/" className="link transition text-base font-[500]">
                  <Button className="link transition !font-[500] !text-[rgba(0,0,0,0.7)] hover:!text-[#ff5252] !py-4 !normal-case">
                    Electronics
                  </Button>
                </Link>
              </li>
              <li className="list-none">
                <Link to="/" className="link transition text-base font-[500]">
                  <Button className="link transition !font-[500] !text-[rgba(0,0,0,0.7)] hover:!text-[#ff5252] !py-4 !normal-case">
                    Bages
                  </Button>
                </Link>
              </li>
              <li className="list-none">
                <Link to="/" className="link transition text-base font-[500]">
                  <Button className="link transition !font-[500] !text-[rgba(0,0,0,0.7)] hover:!text-[#ff5252] !py-4 !normal-case">
                    Footwear
                  </Button>
                </Link>
              </li>
              <li className="list-none">
                <Link to="/" className="link transition text-base font-[500]">
                  <Button className="link transition !font-[500] !text-[rgba(0,0,0,0.7)] hover:!text-[#ff5252] !py-4 !normal-case">
                    Groceries
                  </Button>
                </Link>
              </li>
              <li className="list-none">
                <Link to="/" className="link transition text-base font-[500]">
                  <Button className="link transition !font-[500] !text-[rgba(0,0,0,0.7)] hover:!text-[#ff5252] !py-4 !normal-case">
                    Beauty
                  </Button>
                </Link>
              </li>
              <li className="list-none">
                <Link to="/" className="link transition text-base font-[500]">
                  <Button className="link transition !font-[500] !text-[rgba(0,0,0,0.7)] hover:!text-[#ff5252] !py-4 !normal-case">
                    Wellness
                  </Button>
                </Link>
              </li>
              <li className="list-none">
                <Link to="/" className="link transition text-base font-[500]">
                  <Button className="link transition !font-[500] !text-[rgba(0,0,0,0.7)] hover:!text-[#ff5252] !py-4 !normal-case">
                    Jewellery
                  </Button>
                </Link>
              </li>
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
      <CategoryPanel
        isOpenCatPanel={isOpenCatPanel}
        setIsOpenCatPanel={setIsOpenCatPanel}
      />
    </>
  );
};

export default Navigation;
