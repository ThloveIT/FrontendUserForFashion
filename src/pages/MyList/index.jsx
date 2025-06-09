import React from 'react';
import MyListItems from './MyListItems';
import AccountSidebar from '../../components/AccountSidebar';

const MyList = () => {
  return (
    <section className=" py-10 w-full">
      <div className="container flex gap-5">
        <div className="col1 w-[20%]">
          <AccountSidebar />
        </div>
        <div className="col2 w-[80%]">
          <div className="container flex ">
            <div className="leftPart w-full max-w-full mx-auto bg-white p-5 rounded-md">
              <h2 className=" text-lg font-medium uppercase">
                Sản phẩm yêu thích
              </h2>
              <p>
                Hiện đang có{' '}
                <span className=" text-primary font-semibold">4 sản phẩm</span>{' '}
                trong danh sách của bạn
              </p>
              <MyListItems />
              <MyListItems />
              <MyListItems />
              <MyListItems />
              <MyListItems />
              <MyListItems />
              <MyListItems />
              <MyListItems />
              <MyListItems />
              <MyListItems />
              <MyListItems />
              <MyListItems />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyList;
