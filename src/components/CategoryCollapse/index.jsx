import React, { useState } from 'react';
import Button from '@mui/material/Button';
import { FaPlus } from 'react-icons/fa6';
import { FaMinus } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const CategoryCollapse = () => {
  const [submenuIndex, setSubmenuIndex] = useState({});
  const [innerSubmenuIndex, setInnerSubmenuIndex] = useState({});

  const toggleSubmenu = (index) => {
    setSubmenuIndex((prev) => {
      const isClosing = prev[index];
      const newState = { ...prev, [index]: !isClosing };

      if (isClosing) {
        setInnerSubmenuIndex({});
      }

      return newState;
    });
  };

  const toggleInnerSubmenu = (index) => {
    setInnerSubmenuIndex((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };
  return (
    <>
      <div className="scroll">
        <ul className="w-full">
          <li className="list-none flex items-center relative flex-col">
            <Link to="/productListing" className=" w-full">
              <Button className=" w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,.87)]">
                Phong cách cổ điển
              </Button>
            </Link>
            {submenuIndex[0] ? (
              <FaMinus
                className=" absolute top-[10px] right-[15px] link cursor-pointer"
                onClick={() => toggleSubmenu(0)}
              />
            ) : (
              <FaPlus
                className=" absolute top-[10px] right-[15px] link cursor-pointer"
                onClick={() => toggleSubmenu(0)}
              />
            )}
            {submenuIndex[0] && (
              <ul className=" submenu w-full pl-3">
                <li className=" list-none relative">
                  <Link to="/" className=" w-full">
                    <Button className=" w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,.87)]">
                      Áo sơ mi trắng 
                    </Button>
                  </Link>
                </li>
                <li className=" list-none relative">
                  <Link to="/" className=" w-full">
                    <Button className=" w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,.87)]">
                      Blazer cổ điển 
                    </Button>
                  </Link>
                </li>
                <li className=" list-none relative">
                  <Link to="/" className=" w-full">
                    <Button className=" w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,.87)]">
                      Áo dạ 
                    </Button>
                  </Link>
                </li>
                <li className=" list-none relative">
                  <Link to="/" className=" w-full">
                    <Button className=" w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,.87)]">
                      Quần tây 
                    </Button>
                  </Link>
                </li>
                <li className=" list-none relative">
                  <Link to="/" className=" w-full">
                    <Button className=" w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,.87)]">
                      Váy chữ A 
                    </Button>
                  </Link>
                </li>
              </ul>
            )}
            {/* {submenuIndex[0] && (
              <ul className=" submenu w-full pl-3">
                <li className=" list-none relative">
                  <Link to="/" className=" w-full">
                    <Button className=" w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,.87)]">
                      Dành cho Nam
                    </Button>
                  </Link>
                  {innerSubmenuIndex[0] ? (
                    <FaMinus
                      className=" absolute top-[10px] right-[15px] link cursor-pointer"
                      onClick={() => toggleInnerSubmenu(0)}
                    />
                  ) : (
                    <FaPlus
                      className=" absolute top-[10px] right-[15px] link cursor-pointer"
                      onClick={() => toggleInnerSubmenu(0)}
                    />
                  )}
                  {innerSubmenuIndex[0] && (
                    <ul className=" inner_submenu w-full pl-3">
                      <li className=" list-none relative link transition py-1">
                        <Link
                          to="/"
                          className="w-full !text-left !justify-start !px-3 text-[14px]"
                        >
                          Máy tính thông minh
                        </Link>
                      </li>
                      <li className=" list-none relative link transition py-1">
                        <Link
                          to="/"
                          className="w-full !text-left !justify-start !px-3 text-[14px]"
                        >
                          Áo thun bản giới hạn
                        </Link>
                      </li>
                      <li className=" list-none relative link transition py-1">
                        <Link
                          to="/"
                          className="w-full !text-left !justify-start !px-3 text-[14px]"
                        >
                          Đồng hồ thông minh
                        </Link>
                      </li>
                      <li className=" list-none relative link transition py-1">
                        <Link
                          to="/"
                          className="w-full !text-left !justify-start !px-3 text-[14px]"
                        >
                          Vòng tay thông minh
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>
                <li className=" list-none relative">
                  <Link to="/" className=" w-full">
                    <Button className=" w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,.87)]">
                      Dành cho Nữ
                    </Button>
                  </Link>
                  {innerSubmenuIndex[1] ? (
                    <FaMinus
                      className=" absolute top-[10px] right-[15px] link cursor-pointer"
                      onClick={() => toggleInnerSubmenu(1)}
                    />
                  ) : (
                    <FaPlus
                      className=" absolute top-[10px] right-[15px] link cursor-pointer"
                      onClick={() => toggleInnerSubmenu(1)}
                    />
                  )}
                  {innerSubmenuIndex[1] && (
                    <ul className=" inner_submenu w-full pl-3">
                      <li className=" list-none relative link transition py-1">
                        <Link
                          to="/"
                          className="w-full !text-left !justify-start !px-3 text-[14px]"
                        >
                          Áo thun Dior
                        </Link>
                      </li>
                      <li className=" list-none relative link transition py-1">
                        <Link
                          to="/"
                          className="w-full !text-left !justify-start !px-3 text-[14px]"
                        >
                          Jean Quảng Châu
                        </Link>
                      </li>
                      <li className=" list-none relative link transition py-1">
                        <Link
                          to="/"
                          className="w-full !text-left !justify-start !px-3 text-[14px]"
                        >
                          Khăn quàng cổ Hermes
                        </Link>
                      </li>
                      <li className=" list-none relative link transition py-1">
                        <Link
                          to="/"
                          className="w-full !text-left !justify-start !px-3 text-[14px]"
                        >
                          Vest bản giới hạn
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>
              </ul>
            )} */}
          </li>

          <li className="list-none flex items-center relative flex-col">
            <Link to="/productListing" className=" w-full">
              <Button className=" w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,.87)]">
                Phong cách tối giản 
              </Button>
            </Link>
            {submenuIndex[1] ? (
              <FaMinus
                className=" absolute top-[10px] right-[15px] link cursor-pointer"
                onClick={() => toggleSubmenu(1)}
              />
            ) : (
              <FaPlus
                className=" absolute top-[10px] right-[15px] link cursor-pointer"
                onClick={() => toggleSubmenu(1)}
              />
            )}
            {submenuIndex[1] && (
              <ul className=" submenu w-full pl-3">
                <li className=" list-none relative">
                  <Link to="/" className=" w-full">
                    <Button className=" w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,.87)]">
                      Áo thun trơn 
                    </Button>
                  </Link>
                </li>
                <li className=" list-none relative">
                  <Link to="/" className=" w-full">
                    <Button className=" w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,.87)]">
                      Áo sơ mi không họa tiết 
                    </Button>
                  </Link>
                </li>
                <li className=" list-none relative">
                  <Link to="/" className=" w-full">
                    <Button className=" w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,.87)]">
                      Quần culottes 
                    </Button>
                  </Link>
                </li>
                <li className=" list-none relative">
                  <Link to="/" className=" w-full">
                    <Button className=" w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,.87)]">
                      Váy suông 
                    </Button>
                  </Link>
                </li>
                <li className=" list-none relative">
                  <Link to="/" className=" w-full">
                    <Button className=" w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,.87)]">
                      Áo cardigan đơn giản 
                    </Button>
                  </Link>
                </li>
              </ul>
            )}
          </li>

          <li className="list-none flex items-center relative flex-col">
            <Link to="/productListing" className=" w-full">
              <Button className=" w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,.87)]">
                Phong cách tự do 
              </Button>
            </Link>
            {submenuIndex[2] ? (
              <FaMinus
                className=" absolute top-[10px] right-[15px] link cursor-pointer"
                onClick={() => toggleSubmenu(2)}
              />
            ) : (
              <FaPlus
                className=" absolute top-[10px] right-[15px] link cursor-pointer"
                onClick={() => toggleSubmenu(2)}
              />
            )}
            {submenuIndex[2] && (
              <ul className=" submenu w-full pl-3">
                <li className=" list-none relative">
                  <Link to="/" className=" w-full">
                    <Button className=" w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,.87)]">
                      Áo croptop 
                    </Button>
                  </Link>
                </li>
                <li className=" list-none relative">
                  <Link to="/" className=" w-full">
                    <Button className=" w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,.87)]">
                      Áo khoác 
                    </Button>
                  </Link>
                </li>
                <li className=" list-none relative">
                  <Link to="/" className=" w-full">
                    <Button className=" w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,.87)]">
                      Áo len 
                    </Button>
                  </Link>
                </li>
                <li className=" list-none relative">
                  <Link to="/" className=" w-full">
                    <Button className=" w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,.87)]">
                      Quần ống loe 
                    </Button>
                  </Link>
                </li>
              </ul>
            )}
          </li>

          <li className="list-none flex items-center relative flex-col">
            <Link to="/productListing" className=" w-full">
              <Button className=" w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,.87)]">
                Phong cách thể thao 
              </Button>
            </Link>
            {submenuIndex[3] ? (
              <FaMinus
                className=" absolute top-[10px] right-[15px] link cursor-pointer"
                onClick={() => toggleSubmenu(3)}
              />
            ) : (
              <FaPlus
                className=" absolute top-[10px] right-[15px] link cursor-pointer"
                onClick={() => toggleSubmenu(3)}
              />
            )}
            {submenuIndex[3] && (
              <ul className=" submenu w-full pl-3">
                <li className=" list-none relative">
                  <Link to="/" className=" w-full">
                    <Button className=" w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,.87)]">
                      Áo tank top 
                    </Button>
                  </Link>
                </li>
                <li className=" list-none relative">
                  <Link to="/" className=" w-full">
                    <Button className=" w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,.87)]">
                      Áo hoodie 
                    </Button>
                  </Link>
                </li>
                <li className=" list-none relative">
                  <Link to="/" className=" w-full">
                    <Button className=" w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,.87)]">
                      Áo khoác gió 
                    </Button>
                  </Link>
                </li>
                <li className=" list-none relative">
                  <Link to="/" className=" w-full">
                    <Button className=" w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,.87)]">
                      Áo thể thao oversize 
                    </Button>
                  </Link>
                </li>
                <li className=" list-none relative">
                  <Link to="/" className=" w-full">
                    <Button className=" w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,.87)]">
                      Quần jogger  
                    </Button>
                  </Link>
                </li>
              </ul>
            )}
          </li>

          <li className="list-none flex items-center relative flex-col">
            <Link to="/productListing" className=" w-full">
              <Button className=" w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,.87)]">
               Phong cách học sinh 
              </Button>
            </Link>
            {submenuIndex[4] ? (
              <FaMinus
                className=" absolute top-[10px] right-[15px] link cursor-pointer"
                onClick={() => toggleSubmenu(4)}
              />
            ) : (
              <FaPlus
                className=" absolute top-[10px] right-[15px] link cursor-pointer"
                onClick={() => toggleSubmenu(4)}
              />
            )}
            {submenuIndex[4] && (
              <ul className=" submenu w-full pl-3">
                <li className=" list-none relative">
                  <Link to="/" className=" w-full">
                    <Button className=" w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,.87)]">
                      Áo sơ mi có cổ 
                    </Button>
                  </Link>
                </li>
                <li className=" list-none relative">
                  <Link to="/" className=" w-full">
                    <Button className=" w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,.87)]">
                      Áo len cổ chữ V 
                    </Button>
                  </Link>
                </li>
                <li className=" list-none relative">
                  <Link to="/" className=" w-full">
                    <Button className=" w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,.87)]">
                      Blazer form nhỏ 
                    </Button>
                  </Link>
                </li>
                <li className=" list-none relative">
                  <Link to="/" className=" w-full">
                    <Button className=" w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,.87)]">
                      Áo gile 
                    </Button>
                  </Link>
                </li>
                <li className=" list-none relative">
                  <Link to="/" className=" w-full">
                    <Button className=" w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,.87)]">
                      Quần kaki 
                    </Button>
                  </Link>
                </li>
              </ul>
            )}
          </li>

          <li className="list-none flex items-center relative flex-col">
            <Link to="/productListing" className=" w-full">
              <Button className=" w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,.87)]">
                Phong cách đường phố 
              </Button>
            </Link>
            {submenuIndex[5] ? (
              <FaMinus
                className=" absolute top-[10px] right-[15px] link cursor-pointer"
                onClick={() => toggleSubmenu(5)}
              />
            ) : (
              <FaPlus
                className=" absolute top-[10px] right-[15px] link cursor-pointer"
                onClick={() => toggleSubmenu(5)}
              />
            )}
            {submenuIndex[5] && (
              <ul className=" submenu w-full pl-3">
                <li className=" list-none relative">
                  <Link to="/" className=" w-full">
                    <Button className=" w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,.87)]">
                      Áo thun graphic 
                    </Button>
                  </Link>
                </li>
                <li className=" list-none relative">
                  <Link to="/" className=" w-full">
                    <Button className=" w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,.87)]">
                      Áo hoodie oversize 
                    </Button>
                  </Link>
                </li>
                <li className=" list-none relative">
                  <Link to="/" className=" w-full">
                    <Button className=" w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,.87)]">
                      Áo khoác bomber 
                    </Button>
                  </Link>
                </li>
                <li className=" list-none relative">
                  <Link to="/" className=" w-full">
                    <Button className=" w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,.87)]">
                      Quần jeans 
                    </Button>
                  </Link>
                </li>
                <li className=" list-none relative">
                  <Link to="/" className=" w-full">
                    <Button className=" w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,.87)]">
                      Quần cargo 
                    </Button>
                  </Link>
                </li>
              </ul>
            )}
          </li>

          <li className="list-none flex items-center relative flex-col">
            <Link to="/productListing" className=" w-full">
              <Button className=" w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,.87)]">
                Phong cách công sở 
              </Button>
            </Link>
            {submenuIndex[6] ? (
              <FaMinus
                className=" absolute top-[10px] right-[15px] link cursor-pointer"
                onClick={() => toggleSubmenu(6)}
              />
            ) : (
              <FaPlus
                className=" absolute top-[10px] right-[15px] link cursor-pointer"
                onClick={() => toggleSubmenu(6)}
              />
            )}
            {submenuIndex[6] && (
              <ul className=" submenu w-full pl-3">
                <li className=" list-none relative">
                  <Link to="/" className=" w-full">
                    <Button className=" w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,.87)]">
                      Áo sơ mi 
                    </Button>
                  </Link>
                </li>
                <li className=" list-none relative">
                  <Link to="/" className=" w-full">
                    <Button className=" w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,.87)]">
                      Áo blouse tay dài 
                    </Button>
                  </Link>
                </li>
                <li className=" list-none relative">
                  <Link to="/" className=" w-full">
                    <Button className=" w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,.87)]">
                      Áo blazer 
                    </Button>
                  </Link>
                </li>
                <li className=" list-none relative">
                  <Link to="/" className=" w-full">
                    <Button className=" w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,.87)]">
                      Vest công sở 
                    </Button>
                  </Link>
                </li>
                <li className=" list-none relative">
                  <Link to="/" className=" w-full">
                    <Button className=" w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,.87)]">
                      Quần tây 
                    </Button>
                  </Link>
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
