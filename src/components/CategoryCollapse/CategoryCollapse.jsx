import React from "react";
import { FaRegSquarePlus, FaRegSquareMinus } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import { useState } from "react";

const CategoryCollapse = (props) => {
  const [submenuIndex, setSubmenuIndex] = useState(null);
  const [innerSubmenuIndex, setInnerSubmenuIndex] = useState(null);

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
          {props?.data?.length !== 0 &&
            props?.data?.map((cat, index) => {
              return (
                <li className="list-none flex items-center relative flex-col" key={index}>
                  <Link to="/" className="link w-full">
                    <Button className="!text-[16px] w-full !text-left !justify-start !px-4 !text-[rgba(0,0,0,0.8)] !normal-case">
                      {cat?.name}
                    </Button>
                  </Link>

                  {submenuIndex === index ? (
                    <FaRegSquareMinus
                      size={18}
                      className="absolute top-[10px] right-[15px] cursor-pointer"
                      onClick={() => openSubmenu(index)}
                    />
                  ) : (
                    <FaRegSquarePlus
                      size={18}
                      className="absolute top-[10px] right-[15px] cursor-pointer"
                      onClick={() => openSubmenu(index)}
                    />
                  )}

                  {submenuIndex === index && (
                    <ul className="submenu w-full pl-4">
                      {cat?.children?.length !== 0 &&
                        cat?.children?.map((subCat, subIndex) => {
                          return (
                            <li className="list-none relative" key={subIndex}>
                              <Link to="/" className="link w-full">
                                <Button className="!text-[16px] w-full !text-left !justify-start !px-4 !text-[rgba(0,0,0,0.8)] !normal-case">
                                  {subCat?.name}
                                </Button>
                              </Link>
                              {innerSubmenuIndex === subIndex ? (
                                <FaRegSquareMinus
                                  size={18}
                                  className="absolute top-[10px] right-[15px] cursor-pointer"
                                  onClick={() => openInnerSubmenu(subIndex)}
                                />
                              ) : (
                                <FaRegSquarePlus
                                  size={18}
                                  className="absolute top-[10px] right-[15px] cursor-pointer"
                                  onClick={() => openInnerSubmenu(subIndex)}
                                />
                              )}

                              {innerSubmenuIndex === subIndex && (
                                <ul className="inner_submenu  w-full pl-4 space-y-2">
                                  {subCat?.children?.length !== 0 &&
                                    subCat?.children?.map(
                                      (thirdLavelCat, index__) => {
                                        return (
                                          <li className="list-none relative" key={index__}>
                                            <Link
                                              to="/products/1"
                                              className="link w-full !text-left !justify-start !px-4 !normal-case text-gray-600"
                                            >
                                              {thirdLavelCat?.name}
                                            </Link>
                                          </li>
                                        );
                                      }
                                    )}
                                </ul>
                              )}
                            </li>
                          );
                        })}
                    </ul>
                  )}
                </li>
              );
            })}
        </ul>
      </div>
    </>
  );
};

export default CategoryCollapse;
