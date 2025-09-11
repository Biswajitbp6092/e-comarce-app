import React from "react";
import { FaRegSquarePlus, FaRegSquareMinus } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import { useState } from "react";

const CategoryCollapse = () => {
      const [submenuIndex, setSubmenuIndex] = React.useState(null);
      const [innerSubmenuIndex, setInnerSubmenuIndex] = React.useState(null);

        const openSubmenu = (index) => {
    if (submenuIndex === index) {
      setSubmenuIndex(null);
    } else {
      setSubmenuIndex(index);
    }
  };
  const openInnerSubmenu = (index) => {
    if (innerSubmenuIndex === index) {
      setInnerSubmenuIndex(null);
    } else {
      setInnerSubmenuIndex(index);
    }
  };
  return (
    <>
      <div className="scroll">
        <ul className="w-full">
          <li className="list-none flex items-center relative flex-col">
            <Link to="/" className="link w-full">
              <Button className="!text-[16px] w-full !text-left !justify-start !px-4 !text-[rgba(0,0,0,0.8)] !normal-case">
                Fashion
              </Button>
            </Link>

            {submenuIndex === 0 ? (
              <FaRegSquareMinus
                size={18}
                className="absolute top-[10px] right-[15px] cursor-pointer"
                onClick={() => openSubmenu(0)}
              />
            ) : (
              <FaRegSquarePlus
                size={18}
                className="absolute top-[10px] right-[15px] cursor-pointer"
                onClick={() => openSubmenu(0)}
              />
            )}

            {submenuIndex === 0 && (
              <ul className="submenu w-full pl-4">
                <li className="list-none relative">
                  <Link to="/" className="link w-full">
                    <Button className="!text-[16px] w-full !text-left !justify-start !px-4 !text-[rgba(0,0,0,0.8)] !normal-case">
                      Apparel
                    </Button>
                  </Link>
                  {innerSubmenuIndex === 0 ? (
                    <FaRegSquareMinus
                      size={18}
                      className="absolute top-[10px] right-[15px] cursor-pointer"
                      onClick={() => openInnerSubmenu(0)}
                    />
                  ) : (
                    <FaRegSquarePlus
                      size={18}
                      className="absolute top-[10px] right-[15px] cursor-pointer"
                      onClick={() => openInnerSubmenu(0)}
                    />
                  )}

                  {innerSubmenuIndex === 0 && (
                    <ul className="inner_submenu  w-full pl-4 space-y-2">
                      <li className="list-none relative">
                        <Link
                          to="/products/1"
                          className="link w-full !text-left !justify-start !px-4 !normal-case text-gray-600"
                        >
                          Smart Tablet
                        </Link>
                      </li>
                      <li className="list-none relative">
                        <Link
                          to="/products/1"
                          className="link w-full !text-left !justify-start !px-4 !normal-case text-gray-600"
                        >
                          Crepe T-Shirt
                        </Link>
                      </li>
                      <li className="list-none relative">
                        <Link
                          to="/products/1"
                          className="link w-full !text-left !justify-start !px-4 !normal-case text-gray-600"
                        >
                          leather watch
                        </Link>
                      </li>
                      <li className="list-none relative">
                        <Link
                          to="/products/1"
                          className="link w-full !text-left !justify-start !px-4 !normal-case text-gray-600"
                        >
                          Rolling Diamond
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>
              </ul>
            )}
          </li>

          <li className="list-none flex items-center relative flex-col">
            <Link to="/" className="link w-full">
              <Button className="!text-[16px] w-full !text-left !justify-start !px-4 !text-[rgba(0,0,0,0.8)] !normal-case">
                Jewellery
              </Button>
            </Link>

            {submenuIndex === 1 ? (
              <FaRegSquareMinus
                size={18}
                className="absolute top-[10px] right-[15px] cursor-pointer"
                onClick={() => openSubmenu(1)}
              />
            ) : (
              <FaRegSquarePlus
                size={18}
                className="absolute top-[10px] right-[15px] cursor-pointer"
                onClick={() => openSubmenu(1)}
              />
            )}

            {submenuIndex === 1 && (
              <ul className="submenu w-full pl-4">
                <li className="list-none relative">
                  <Link to="/" className="link w-full">
                    <Button className="!text-[16px] w-full !text-left !justify-start !px-4 !text-[rgba(0,0,0,0.8)] !normal-case">
                      Apparel
                    </Button>
                  </Link>
                  {innerSubmenuIndex === 1 ? (
                    <FaRegSquareMinus
                      size={18}
                      className="absolute top-[10px] right-[15px] cursor-pointer"
                      onClick={() => openInnerSubmenu(0)}
                    />
                  ) : (
                    <FaRegSquarePlus
                      size={18}
                      className="absolute top-[10px] right-[15px] cursor-pointer"
                      onClick={() => openInnerSubmenu(0)}
                    />
                  )}

                  {innerSubmenuIndex === 0 && (
                    <ul className="inner_submenu  w-full pl-4 space-y-2">
                      <li className="list-none relative">
                        <Link
                          to="/products/1"
                          className="link w-full !text-left !justify-start !px-4 !normal-case text-gray-600"
                        >
                          Smart Tablet
                        </Link>
                      </li>
                      <li className="list-none relative">
                        <Link
                          to="/products/1"
                          className="link w-full !text-left !justify-start !px-4 !normal-case text-gray-600"
                        >
                          Crepe T-Shirt
                        </Link>
                      </li>
                      <li className="list-none relative">
                        <Link
                          to="/products/1"
                          className="link w-full !text-left !justify-start !px-4 !normal-case text-gray-600"
                        >
                          leather watch
                        </Link>
                      </li>
                      <li className="list-none relative">
                        <Link
                          to="/products/1"
                          className="link w-full !text-left !justify-start !px-4 !normal-case text-gray-600"
                        >
                          Rolling Diamond
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>
              </ul>
            )}
          </li>
        </ul>
      </div>
    </>
  );
};

export default CategoryCollapse;
