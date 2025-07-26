import { Button } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { RiMenu2Line } from 'react-icons/ri';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { GoRocket } from 'react-icons/go';
import CategoryPanel from './CategoryPanel';
import { fetchRootCategories } from '../../../services/api';
import { MyContext } from '../../../App';

const Navigation = () => {
  const { openAlertBox } = React.useContext(MyContext); // Lấy hàm hiển thị toast từ context
  const [isOpenCategoryPanel, setIsOpenCategoryPanel] = useState(false);
  const [rootCategories, setRootCategories] = useState([]); // State lưu danh mục cha
  const [loading, setLoading] = useState(true); // State theo dõi trạng thái tải API
  const [error, setError] = useState(null); // State lưu lỗi API
  

  const openCategoryPanel = () => {
    setIsOpenCategoryPanel(true);
  };

   // Gọi API khi component mount
  useEffect(() => {
    const loadRootCategories = async () => {
      try {
        const data = await fetchRootCategories(); // Gọi API /categories/root
        setRootCategories(data); // Lưu danh mục cha vào state
        setLoading(false);
      } catch (err) {
        setError('Không thể tải danh mục'); // Lưu lỗi
        openAlertBox('error', 'Không thể tải danh mục'); // Hiển thị toast lỗi
        setLoading(false);
      }
    };
    loadRootCategories();
  }, [openAlertBox]); // Dependency: openAlertBox để đảm bảo toast hoạt động


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
                  Thời trang 
                </Link>
                {/* Submenu hiển thị danh mục cha */}
                <div className="submenu absolute top-[120%] left-[0%] min-w-[200px] bg-white shadow-md opacity-0 transition-all z-50">
                  <ul>
                    {loading ? (
                      <li className="list-none w-full">
                        <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !capitalize">
                          Đang tải...
                        </Button>
                      </li>
                    ) : error ? (
                      <li className="list-none w-full">
                        <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !capitalize">
                          {error}
                        </Button>
                      </li>
                    ) : rootCategories.length > 0 ? (
                      rootCategories.map((category) => (
                        <li key={category.id} className="list-none w-full">
                          {/* Liên kết đến trang sản phẩm của danh mục */}
                          <Link to={`/category/${category.id}`} className="w-full">
                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !capitalize">
                              {category.categoryName}
                            </Button>
                          </Link>
                        </li>
                      ))
                    ) : (
                      <li className="list-none w-full">
                        <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !capitalize">
                          Không có danh mục
                        </Button>
                      </li>
                    )}
                  </ul>
                </div>
                {/* <div className="submenu absolute top-[120%] left-[0%] min-w-[200px] bg-white shadow-md opacity-0 transition-all">
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
                </div> */}
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
                  to="/try-on"
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
