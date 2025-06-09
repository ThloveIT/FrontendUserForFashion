import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import { IoCloseOutline } from 'react-icons/io5';
import './style.css';
import CategoryCollapse from '../../CategoryCollapse';

const CategoryPanel = (props) => {
  const toggleDrawer = (newOpen) => () => {
    props.setIsOpenCategoryPanel(newOpen);
  };
  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" className="categoryPanel">
      <h3 className=" p-3 text-[18px] flex font-[600] items-center justify-between">
        Danh Mục
        <IoCloseOutline
          className=" text-2xl cursor-pointer"
          onClick={toggleDrawer(false)}
        />
      </h3>

      <CategoryCollapse />
    </Box>
  );
  return (
    <div>
      <Drawer open={props.isOpenCategoryPanel} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
};

export default CategoryPanel;
