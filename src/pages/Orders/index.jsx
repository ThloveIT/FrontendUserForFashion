import React, { useState, useEffect, useContext } from 'react';
import AccountSidebar from '../../components/AccountSidebar';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { Button } from '@mui/material';
import Badge from '../../components/Badge';
import { MyContext } from '../../App';
import { fetchDataFromApi, cancelOrder } from '../../services/api';

class ErrorBoundary extends React.Component {
  state = { hasError: false, error: null };

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="text-center py-10 text-red-500">
          Đã xảy ra lỗi: {this.state.error.message}. Vui lòng thử lại sau hoặc liên hệ hỗ trợ.
        </div>
      );
    }
    return this.props.children;
  }
}

const Orders = () => {
  const { userData, openAlertBox } = useContext(MyContext);
  const [orders, setOrders] = useState([]);
  const [isOpenOrderProduct, setIsOpenOrderProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  // Ánh xạ trạng thái từ chuỗi sang số
  const statusMap = {
    'Pending': 0,
    'Confirmed': 1,
    'Shipping': 2,
    'Delivered': 3,
    'Canceled': -1
  };

  // Ánh xạ ngược từ số sang chuỗi hiển thị
  const reverseStatusMap = {
    0: 'Chờ xác nhận',
    1: 'Đã xác nhận',
    2: 'Đang vận chuyển',
    3: 'Đã giao hàng',
    '-1': 'Đã hủy'
  };

  // Lấy danh sách đơn hàng khi component mount
  useEffect(() => {
    if (!userData?.id) {
      setLoading(false);
      console.log('No user ID, skipping API call. userData:', userData);
      return;
    }
    setLoading(true);
    fetchDataFromApi(`/order?userId=${userData.id}`)
      .then((data) => {
        console.log('API response data (full structure):', JSON.stringify(data, null, 2));
        if (Array.isArray(data)) {
          const mappedOrders = data.map(order => {
            const originalStatus = order.status;
            const mappedStatus = statusMap[originalStatus] !== undefined ? statusMap[originalStatus] : -1;
            const mappedOrder = {
              Id: order.id,
              OrderCode: order.orderCode,
              ContactName: order.contactName,
              ContactPhoneNumber: order.contactPhoneNumber || 'N/A',
              ShippingAddress: order.shippingAddress,
              TotalAmount: order.totalAmount,
              Status: mappedStatus,
              CreatedAt: order.createdAt || new Date().toISOString(),
              OrderDetails: order.orderDetails || []
            };
            console.log('Original status:', originalStatus, 'Mapped Status:', mappedStatus, 'Mapped order:', mappedOrder);
            return mappedOrder;
          }).sort((a, b) => new Date(b.CreatedAt) - new Date(a.CreatedAt)); // Sắp xếp theo CreatedAt giảm dần
          setOrders(mappedOrders);
          console.log('Mapped orders with Status and OrderDetails:', mappedOrders);
        } else {
          console.warn('Data is not an array:', data);
          setOrders([]);
          openAlertBox('error', 'Dữ liệu đơn hàng không hợp lệ');
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching orders:', error.response?.data || error.message);
        setOrders([]);
        openAlertBox('error', 'Không thể tải danh sách đơn hàng: ' + (error.response?.data?.message || error.message));
        setLoading(false);
      });
  }, [userData]);

  // Toggle chi tiết sản phẩm
  const isShowOrderProduct = (index) => {
    setIsOpenOrderProduct(isOpenOrderProduct === index ? null : index);
    console.log('Toggled index:', index, 'isOpenOrderProduct:', isOpenOrderProduct, 'OrderDetails:', orders[index]?.OrderDetails);
  };

  const handleCancelOrder = async (orderId) => {
    if (!window.confirm('Bạn có chắc muốn hủy đơn hàng này?')) return;
    try {
      await cancelOrder(orderId);
      openAlertBox('success', 'Đơn hàng đã được hủy thành công');
      const updatedOrders = orders.map(order =>
        order.Id === orderId ? { ...order, Status: -1 } : order
      );
      setOrders(updatedOrders);
    } catch (error) {
      console.error('Error canceling order:', error.response?.data || error.message);
      openAlertBox('error', 'Không thể hủy đơn hàng: ' + (error.response?.data?.message || error.message));
    }
  };

  if (loading) return <div className="text-center py-10">Đang tải...</div>;

  return (
    <ErrorBoundary>
      <section className="py-10 w-full">
        <div className="container flex gap-5">
          <div className="col1 w-[20%]">
            <AccountSidebar />
          </div>
          <div className="col2 w-[80%]">
            <div className="container flex">
              <div className="leftPart w-full max-w-full mx-auto bg-white p-5 rounded-md">
                <h2 className="text-lg font-medium uppercase">Đơn hàng của bạn</h2>
                <p>
                  Hiện đang có{' '}
                  <span className="text-primary font-semibold">{orders.length} đơn hàng</span>{' '}
                  trong danh sách của bạn
                </p>

                <div className="relative overflow-x-auto shadow-md mt-5 min-h-[200px]">
                  <table className="w-full text-sm text-left rtl:text-right text-gray-700 dark:text-gray-300 border-collapse border border-gray-300 dark:border-gray-600">
                    <thead className="bg-[#f1f1f1]">
                      <tr className="border-b text-center border-gray-300 dark:border-gray-600">
                        <th scope="col" className="px-6 py-4 font-semibold text-gray-900 dark:text-white border-r border-gray-300 whitespace-nowrap dark:border-gray-600">
                           
                        </th>
                        <th scope="col" className="px-6 py-4 font-semibold text-gray-900 dark:text-white border-r border-gray-300 whitespace-nowrap dark:border-gray-600">
                          Mã đơn hàng
                        </th>
                        <th scope="col" className="px-6 py-4 font-semibold text-gray-900 dark:text-white border-r border-gray-300 whitespace-nowrap dark:border-gray-600">
                          Họ và tên
                        </th>
                        <th scope="col" className="px-6 py-4 font-semibold text-gray-900 dark:text-white border-r border-gray-300 whitespace-nowrap dark:border-gray-600">
                          Số điện thoại
                        </th>
                        <th scope="col" className="px-6 py-4 font-semibold text-gray-900 dark:text-white border-r border-gray-300 whitespace-nowrap dark:border-gray-600">
                          Địa chỉ
                        </th>
                        <th scope="col" className="px-6 py-4 font-semibold text-gray-900 dark:text-white border-r border-gray-300 whitespace-nowrap dark:border-gray-600">
                          Tổng tiền
                        </th>
                        <th scope="col" className="px-6 py-4 font-semibold text-gray-900 dark:text-white border-r border-gray-300 whitespace-nowrap dark:border-gray-600">
                          Trạng thái đơn hàng
                        </th>
                        <th scope="col" className="px-6 py-4 font-semibold text-gray-900 dark:text-white border-r border-gray-300 whitespace-nowrap dark:border-gray-600">
                          Ngày đặt hàng
                        </th>
                        <th scope="col" className="px-6 py-4 font-semibold text-gray-900 dark:text-white border-r border-gray-300 whitespace-nowrap dark:border-gray-600">
                          Hành động
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {Array.isArray(orders) && orders.length > 0 ? (
                        orders.map((order, index) => {
                          console.log(`Rendering order ${order.Id}: Status = ${order.Status}, Display = ${reverseStatusMap[order.Status] || 'Không xác định'}`);
                          return (
                            <React.Fragment key={order.Id || index}>
                              <tr className="border-y border-gray-300 dark:border-gray-600 text-center">
                                <td className="px-6 py-4 text-gray-900 dark:text-white border-r border-gray-300 dark:border-gray-600">
                                  <Button
                                    className=" !size-8 !min-w-8 !rounded-full !bg-[#f1f1f1]"
                                    onClick={() => isShowOrderProduct(index)}
                                  >
                                    {isOpenOrderProduct === index ? (
                                      <FaChevronUp className="text-sm text-[rgba(0,0,0,0.7)]" />
                                    ) : (
                                      <FaChevronDown className="text-sm text-[rgba(0,0,0,0.7)]" />
                                    )}
                                  </Button>
                                </td>
                                <td className="px-6 py-4 text-gray-900 dark:text-white border-r border-gray-300 dark:border-gray-600">
                                  <span className="link cursor-pointer">{order.OrderCode || 'N/A'}</span>
                                </td>
                                <td className="px-6 py-4 text-gray-900 dark:text-white border-r border-gray-300 dark:border-gray-600">
                                  <span>{order.ContactName || 'N/A'}</span>
                                </td>
                                <td className="px-6 py-4 text-gray-900 dark:text-white border-r border-gray-300 dark:border-gray-600">
                                  <span>{order.ContactPhoneNumber || 'N/A'}</span>
                                </td>
                                <td className="px-6 py-4 text-gray-900 dark:text-white border-r border-gray-300 dark:border-gray-600">
                                  <span className="block w-56">{order.ShippingAddress || 'N/A'}</span>
                                </td>
                                <td className="px-6 py-4 text-gray-900 dark:text-white border-r border-gray-300 dark:border-gray-600">
                                  <span>{order.TotalAmount?.toLocaleString() || '0'}đ</span>
                                </td>
                                <td className="px-6 py-4 text-gray-900 dark:text-white border-r border-gray-300 dark:border-gray-600">
                                  <span>
                                    <Badge
                                      status={reverseStatusMap[order.Status] || 'Chờ xác nhận'}
                                    />
                                  </span>
                                </td>
                                <td className="px-6 py-4 text-gray-900 dark:text-white border-r border-gray-300 dark:border-gray-600">
                                  <span>{order.CreatedAt ? new Date(order.CreatedAt).toLocaleDateString() : 'N/A'}</span>
                                </td>
                                <td className="px-6 py-4 text-gray-900 dark:text-white border-r border-gray-300 dark:border-gray-600">
                                  {typeof order.Status === 'number' && order.Status === 0 && (
                                    <Button
                                      variant="contained"
                                      color="error"
                                      size="small"
                                      onClick={() => handleCancelOrder(order.Id)}
                                    >
                                      Hủy đơn hàng
                                    </Button>
                                  )}
                                </td>
                              </tr>
                              {isOpenOrderProduct === index && (
                                <tr>
                                  <td className="bg-white" colSpan={9}>
                                    <div className="relative ml-20">
                                      <table className="w-full text-sm text-left rtl:text-right text-gray-700 dark:text-gray-300 border-collapse border-b border-b-gray-300 dark:border-gray-600">
                                        <thead className="bg-[#f1f1f1]">
                                          <tr className="border-b text-center border-gray-300 dark:border-gray-600">
                                            <th scope="col" className="px-6 py-4 font-semibold text-gray-900 dark:text-white whitespace-nowrap dark:border-gray-600">
                                              Mã sản phẩm
                                            </th>
                                            <th scope="col" className="px-6 py-4 font-semibold text-gray-900 dark:text-white whitespace-nowrap dark:border-gray-600">
                                              Tên sản phẩm
                                            </th>
                                            <th scope="col" className="px-6 py-4 font-semibold text-gray-900 dark:text-white whitespace-nowrap dark:border-gray-600">
                                              Số lượng
                                            </th>
                                            <th scope="col" className="px-6 py-4 font-semibold text-gray-900 dark:text-white whitespace-nowrap dark:border-gray-600">
                                              Giá
                                            </th>
                                          </tr>
                                        </thead>
                                        <tbody>
                                          {Array.isArray(order.OrderDetails) && order.OrderDetails.length > 0 ? (
                                            order.OrderDetails.map((detail, detailIndex) => (
                                              <tr key={`${order.Id}-detail-${detailIndex}`} className="border-b border-gray-300 dark:border-gray-600 text-center">
                                                <td className="px-6 py-4 text-gray-900 dark:text-white dark:border-gray-600">
                                                  <span className="link cursor-pointer">{detail.productId || 'N/A'}</span>
                                                </td>
                                                <td className="px-6 py-4 text-gray-900 dark:text-white dark:border-gray-600">
                                                  {detail.productName || 'N/A'}
                                                </td>
                                                <td className="px-6 py-4 text-gray-900 dark:text-white dark:border-gray-600">
                                                  {detail.quantity || '0'}
                                                </td>
                                                <td className="px-6 py-4 text-gray-900 dark:text-white dark:border-gray-600">
                                                  {detail.unitPrice?.toLocaleString() || '0'}đ
                                                </td>
                                              </tr>
                                            ))
                                          ) : (
                                            <tr>
                                              <td colSpan={4} className="px-6 py-4 text-center text-red-500 dark:text-red-400">
                                                Không có sản phẩm trong đơn hàng này. Kiểm tra API hoặc backend.
                                              </td>
                                            </tr>
                                          )}
                                        </tbody>
                                      </table>
                                    </div>
                                  </td>
                                </tr>
                              )}
                            </React.Fragment>
                          );
                        })
                      ) : (
                        <tr>
                          <td colSpan={9} className="px-6 py-4 text-center text-gray-900 dark:text-white">
                            Không có đơn hàng nào.
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </ErrorBoundary>
  );
};

export default Orders;