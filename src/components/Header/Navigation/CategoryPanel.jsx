import React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import { IoMdClose } from "react-icons/io";
import CategoryCollapse from "../../CategoryCollapse/CategoryCollapse";

const CategoryPanel = ({ isOpenCatPanel, setIsOpenCatPanel }) => {
  const toggleDrawer = (newOpen) => () => {
    setIsOpenCatPanel(newOpen);
  };



  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" className="categoryPanel">
      <h3 className="p-4 text-[16px] font-[500] flex items-center justify-between">
        Shop By Categories
        <IoMdClose
          size={24}
          onClick={toggleDrawer(false)}
          className="cursor-pointer"
        />
      </h3>
     <CategoryCollapse/>
    </Box>
  );

  return (
    <Drawer open={isOpenCatPanel} onClose={toggleDrawer(false)}>
      {DrawerList}
    </Drawer>
  );
};

export default CategoryPanel;
