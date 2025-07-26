import { Button } from '@mui/material';
import React, { useState } from 'react';
import { FiPlus } from 'react-icons/fi';
import { FiMinus } from 'react-icons/fi';

const QtyBox = ({ onQuantityChange, max }) => {
  const [qtyVal, setQtyVal] = useState(1);

  const qtyPlus = () => {
    if (qtyVal < max) {
      const newQty = qtyVal + 1;
      setQtyVal(newQty);
      if (onQuantityChange) onQuantityChange(newQty); // Truyền giá trị mới lên component cha
    }
  };

  const qtyMinus = () => {
    if (qtyVal > 1) {
      const newQty = qtyVal - 1;
      setQtyVal(newQty);
      if (onQuantityChange) onQuantityChange(newQty); // Truyền giá trị mới lên component cha
    }
  };

  return (
    <div className="qtyBox flex items-center relative">
      <input
        type="number"
        className="w-full h-10 p-2 text-sm focus:outline-none border border-[rgba(0,0,0,0.2)] rounded-md"
        value={qtyVal}
        readOnly
      />
      <div className="flex items-center justify-between border border-[rgba(0,0,0,0.2)] flex-col h-10 absolute top-0 right-0 z-50 rounded-md rounded-l-none">
        <Button
          className="!min-w-7 !w-7 !h-5 !text-black !border-b !border-b-[rgba(0,0,0,0.2)] !rounded-none"
          onClick={qtyPlus}
          disabled={qtyVal >= max} // Vô hiệu hóa khi đạt tối đa
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