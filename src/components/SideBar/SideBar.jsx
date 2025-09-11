import React, { useState } from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import './SideBar.css'
import {Collapse} from 'react-collapse';
import Button  from "@mui/material/Button";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";


const SideBar = () => {

    const [isOpenCategoriFilter, setIsOpenCategoriFilter] = useState(true)
  return (
    <aside className="sideBar py-5">
      <div className="box">
        <h3 className="w-full mb-3 text-[18px] font-[500] flex items-center pr-5">Shop By
             Categories <Button className="!w-[30px] !h-[30px] !min-w-[30px] !rounded-full !ml-auto !text-black" 
             onClick={()=>setIsOpenCategoriFilter(!isOpenCategoriFilter)}>
                {
                    isOpenCategoriFilter===true? <IoIosArrowDown/>:<IoIosArrowUp/>

                }
             </Button></h3>
        <Collapse isOpened={isOpenCategoriFilter}>
            <div className="scroll px-3 relative -left-[10px]">
                <FormControlLabel control={<Checkbox size="small" />} label="Fashion" className="w-full"/>
                <FormControlLabel control={<Checkbox size="small" />} label="Fashion" className="w-full"/>
                <FormControlLabel control={<Checkbox size="small" />} label="Fashion" className="w-full"/>
                <FormControlLabel control={<Checkbox size="small" />} label="Fashion" className="w-full"/>
                <FormControlLabel control={<Checkbox size="small" />} label="Fashion" className="w-full"/>
                <FormControlLabel control={<Checkbox size="small" />} label="Fashion" className="w-full"/>
                <FormControlLabel control={<Checkbox size="small" />} label="Fashion" className="w-full"/>
                <FormControlLabel control={<Checkbox size="small" />} label="Fashion" className="w-full"/>
                <FormControlLabel control={<Checkbox size="small" />} label="Fashion" className="w-full"/>
            </div>
        </Collapse>

      </div>
    </aside>
  );
};

export default SideBar;
