import React, { useState } from "react";
import Button from "@mui/material/Button";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const QtyBox = (props) => {
  const [qtyVal, setQtyVal] = useState(1);

  const plusQty = () => {
    setQtyVal(qtyVal + 1);
    props?.handelSelecteQty(qtyVal + 1);
  };

  const minusQty = () => {
    if (qtyVal === 1) {
      setQtyVal(1);
      props?.handelSelecteQty(1);
    } else {
      setQtyVal(qtyVal - 1);
      props?.handelSelecteQty(qtyVal - 1);
    }
  };
  return (
    <div className="qtyBox flex items-center relative">
      <input
        type="number"
        className="w-full h-[40px] p-2 pl-4 text-[15px] focus:outline-none border border-[rgba(0,0,0,0.2)] rounded-md"
        value={qtyVal}
        onChange={(e) => setQtyVal(Number(e.target.value))}
        min={1}
      />

      <div className="flex items-center flex-col justify-between h-[40px] absolute top-0 right-0">
        <Button
          onClick={plusQty}
          className="!min-w-[30px] !w-[30px] !h-[20px] !text-black"
        >
          <IoIosArrowUp size={22} className="opacity-55" />
        </Button>
        <Button
          onClick={minusQty}
          className="!min-w-[30px] !w-[30px] !h-[20px] !text-black"
        >
          <IoIosArrowDown size={22} className="opacity-55" />
        </Button>
      </div>
    </div>
  );
};

export default QtyBox;
