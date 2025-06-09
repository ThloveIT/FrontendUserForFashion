import { Button } from '@mui/material';
import React, { useState } from 'react';
import { RiMenu2Line } from 'react-icons/ri';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { GoRocket } from 'react-icons/go';
import CategoryPanel from './CategoryPanel';

const Navigation = () => {
  const [isOpenCategoryPanel, setIsOpenCategoryPanel] = useState(false);
  const openCategoryPanel = () => {
    setIsOpenCategoryPanel(true);
  };

  return (
    <>
      <nav className=" py-2">
        <div className="container flex items-center justify-end">
          <div className="col_1 w-[20%] ">
            <Button
              className=" !text-black gap-2 !font-bold"
              onClick={openCategoryPanel}
            >
              <RiMenu2Line className=" text-[18px]" /> Phong cách 
              <MdKeyboardArrowDown />
            </Button>
          </div>
          <div className="col_2 w-[63%] justify-center">
            <ul className=" flex justify-center items-center gap-3 nav edit-ul w-full ">
              <li className=" list-none edit">
                <Link
                  to="/"
                  className=" link transition text-[14px] font-[600]"
                >
                  Trang chủ
                </Link>
              </li>
              <li className=" list-none relative edit">
                <Link
                  to="/productListing"
                  className=" link transition text-[14px] font-[600]"
                >
                Giới thiệu 
                </Link>
                {/* <div className="submenu absolute top-[120%] left-[0%] min-w-[200px] bg-white shadow-md opacity-0 transition-all">
                  <ul>
                    <li className=" list-none w-full">
                      <Link to="/" className=" w-full">
                        <Button className=" !text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !capitalize">
                          Áo sơ mi
                        </Button>
                      </Link>
                    </li>
                    <li className=" list-none w-full">
                      <Link to="/" className=" w-full">
                        <Button className=" !text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !capitalize">
                          Blazer cổ điển
                        </Button>
                      </Link>
                    </li>

                    <li className=" list-none w-full">
                      <Link to="/" className=" w-full">
                        <Button className=" !text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !capitalize">
                          Quần tây 
                        </Button>
                      </Link>
                    </li>
                    <li className=" list-none w-full">
                      <Link to="/" className=" w-full">
                        <Button className=" !text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !capitalize">
                          Áo dạ 
                        </Button>
                      </Link>
                    </li>
                  </ul>
                </div> */}
              </li>
              <li className=" list-none relative edit">
                <Link
                  to="/productListing"
                  className=" link transition text-[14px] font-[600]"
                >
                  Thời trang 
                </Link>
                <div className="submenu absolute top-[120%] left-[0%] min-w-[200px] bg-white shadow-md opacity-0 transition-all">
                  <ul>
                    <li className=" list-none w-full">
                      <Link to="/" className=" w-full">
                        <Button className=" !text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !capitalize">
                          Phong cách cổ điển 
                        </Button>
                      </Link>
                    </li>
                    <li className=" list-none w-full">
                      <Link to="/" className=" w-full">
                        <Button className=" !text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !capitalize">
                          Phong cách tối giản 
                        </Button>
                      </Link>
                    </li>

                    <li className=" list-none w-full">
                      <Link to="/" className=" w-full">
                        <Button className=" !text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !capitalize">
                          Phong cách tự do 
                        </Button>
                      </Link>
                    </li>
                    <li className=" list-none w-full">
                      <Link to="/" className=" w-full">
                        <Button className=" !text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !capitalize">
                          Phong cách thể thao 
                        </Button>
                      </Link>
                    </li>
                    <li className=" list-none w-full">
                      <Link to="/" className=" w-full">
                        <Button className=" !text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !capitalize">
                          Phong cách học sinh 
                        </Button>
                      </Link>
                    </li>
                    <li className=" list-none w-full">
                      <Link to="/" className=" w-full">
                        <Button className=" !text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !capitalize">
                          Phong cách đường phố 
                        </Button>
                      </Link>
                    </li> 
                    <li className=" list-none w-full">
                      <Link to="/" className=" w-full">
                        <Button className=" !text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !capitalize">
                          Phong cách công sở
                        </Button>
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li className=" list-none relative edit">
                <Link
                  to="/"
                  className=" link transition text-[14px] font-[600]"
                >
                  Tin tức 
                </Link>
                {/* <div className="submenu absolute top-[120%] left-[0%] min-w-[200px] bg-white shadow-md opacity-0 transition-all">
                  <ul>
                    <li className=" list-none w-full">
                      <Link to="/" className=" w-full">
                        <Button className=" !text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !capitalize">
                          Áo croptop 
                        </Button>
                      </Link>
                    </li>
                    <li className=" list-none w-full">
                      <Link to="/" className=" w-full">
                        <Button className=" !text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !capitalize">
                          Váy 
                        </Button>
                      </Link>
                    </li>

                    <li className=" list-none w-full">
                      <Link to="/" className=" w-full">
                        <Button className=" !text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !capitalize">
                          Quần ống loe 
                        </Button>
                      </Link>
                    </li>
                    <li className=" list-none w-full">
                      <Link to="/" className=" w-full">
                        <Button className=" !text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !capitalize">
                          Áo khoác
                        </Button>
                      </Link>
                    </li>
                  </ul>
                </div> */}
              </li>
              <li className=" list-none edit relative">
                <Link
                  to="/"
                  className=" link transition text-[14px] font-[600]"
                >
                  Thử đồ 
                </Link>
                {/* <div className="submenu absolute top-[120%] left-[0%] min-w-[200px] bg-white shadow-md opacity-0 transition-all">
                  <ul>
                    <li className=" list-none w-full">
                      <Link to="/" className=" w-full">
                        <Button className=" !text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !capitalize">
                          Áo tank top 
                        </Button>
                      </Link>
                    </li>
                    <li className=" list-none w-full">
                      <Link to="/" className=" w-full">
                        <Button className=" !text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !capitalize">
                          Quần jogger 
                        </Button>
                      </Link>
                    </li>

                    <li className=" list-none w-full">
                      <Link to="/" className=" w-full">
                        <Button className=" !text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !capitalize">
                          Áo khoác gió  
                        </Button>
                      </Link>
                    </li>
                    <li className=" list-none w-full">
                      <Link to="/" className=" w-full">
                        <Button className=" !text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !capitalize">
                          Áo thể thao 
                        </Button>
                      </Link>
                    </li>
                  </ul>
                </div> */}
              </li>
              <li className=" list-none edit relative">
                <Link
                  to="/"
                  className=" link transition text-[14px] font-[600]"
                >
                  Liên hệ 
                </Link>
                {/* <div className="submenu absolute top-[120%] left-[0%] min-w-[200px] bg-white shadow-md opacity-0 transition-all">
                  <ul>
                    <li className=" list-none w-full">
                      <Link to="/" className=" w-full">
                        <Button className=" !text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !capitalize">
                          Áo dài  
                        </Button>
                      </Link>
                    </li>
                    <li className=" list-none w-full">
                      <Link to="/" className=" w-full">
                        <Button className=" !text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !capitalize">
                          Áo len mỏng 
                        </Button>
                      </Link>
                    </li>

                    <li className=" list-none w-full">
                      <Link to="/" className=" w-full">
                        <Button className=" !text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !capitalize">
                          Quần kaki 
                        </Button>
                      </Link>
                    </li>
                    <li className=" list-none w-full">
                      <Link to="/" className=" w-full">
                        <Button className=" !text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !capitalize">
                          Váy xếp ly 
                        </Button>
                      </Link>
                    </li>
                  </ul>
                </div> */}
              </li>
              {/* <li className=" list-none edit relative">
                <Link
                  to="/"
                  className=" link transition text-[14px] font-[600]"
                >
                  Đường phố
                </Link>
                <div className="submenu absolute top-[120%] left-[0%] min-w-[200px] bg-white shadow-md opacity-0 transition-all">
                  <ul>
                    <li className=" list-none w-full">
                      <Link to="/" className=" w-full">
                        <Button className=" !text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !capitalize">
                          Áo thun 
                        </Button>
                      </Link>
                    </li>
                    <li className=" list-none w-full">
                      <Link to="/" className=" w-full">
                        <Button className=" !text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !capitalize">
                          Áo hoodie oversize
                        </Button>
                      </Link>
                    </li>

                    <li className=" list-none w-full">
                      <Link to="/" className=" w-full">
                        <Button className=" !text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !capitalize">
                          Áo bomber 
                        </Button>
                      </Link>
                    </li>
                    <li className=" list-none w-full">
                      <Link to="/" className=" w-full">
                        <Button className=" !text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !capitalize">
                          Quần jeans 
                        </Button>
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li className=" list-none edit relative">
                <Link
                  to="/"
                  className=" link transition text-[14px] font-[600]"
                >
                  Công sở 
                </Link>
                <div className="submenu absolute top-[120%] left-[0%] min-w-[200px] bg-white shadow-md opacity-0 transition-all">
                  <ul>
                    <li className=" list-none w-full">
                      <Link to="/" className=" w-full">
                        <Button className=" !text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !capitalize">
                          Vest công sở 
                        </Button>
                      </Link>
                    </li>
                    <li className=" list-none w-full">
                      <Link to="/" className=" w-full">
                        <Button className=" !text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !capitalize">
                          Đầm công sở 
                        </Button>
                      </Link>
                    </li>

                    <li className=" list-none w-full">
                      <Link to="/" className=" w-full">
                        <Button className=" !text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !capitalize">
                          Quần tây 
                        </Button>
                      </Link>
                    </li>
                    <li className=" list-none w-full">
                      <Link to="/" className=" w-full">
                        <Button className=" !text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !capitalize">
                          Áo sơ mi 
                        </Button>
                      </Link>
                    </li>
                  </ul>
                </div>
              </li> */}
            </ul>
          </div>
          <div className="col_3 flex gap-1 items-center w-[17%] text-[13px] font-[500] link">
            Giao hàng quốc tế miễn phí <GoRocket />
          </div>
        </div>
      </nav>
      <CategoryPanel
        isOpenCategoryPanel={isOpenCategoryPanel}
        setIsOpenCategoryPanel={setIsOpenCategoryPanel}
      />
    </>
  );
};

export default Navigation;
