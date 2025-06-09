import { Button } from '@mui/material';
import React, { useState } from 'react';
import { FiPlus } from 'react-icons/fi';
import { FiMinus } from 'react-icons/fi';

const QtyBox = () => {
  const [qtyVal, setQtyVal] = useState(1);
  const qtyPlus = () => {
    setQtyVal(qtyVal + 1);
  };

  const qtyMinus = () => {
    setQtyVal(qtyVal - 1);
  };
  return (
    <div className=" qtyBox flex items-center relative">
      <input
        type="number"
        className=" w-full h-10 p-2 text-sm focus:outline-none border border-[rgba(0,0,0,0.2)] rounded-md"
        value={qtyVal}
        readOnly
      />
      <div className=" flex items-center justify-between border border-[rgba(0,0,0,0.2)] flex-col h-10 absolute top-0 right-0 z-50 rounded-md rounded-l-none">
        <Button
          className="!min-w-7 !w-7 !h-5 !text-black !border-b !border-b-[rgba(0,0,0,0.2)] !rounded-none"
          onClick={qtyPlus}
        >
          <FiPlus />
        </Button>
        <Button
          className={`!min-w-7 !w-7 !h-5 !text-black !rounded-t-none ${
            qtyVal === 1 ? '!bg-gray-300' : ''
          }`}
          disabled={qtyVal === 1}
          onClick={qtyMinus}
        >
          <FiMinus />
        </Button>
      </div>
    </div>
  );
};

export default QtyBox;
