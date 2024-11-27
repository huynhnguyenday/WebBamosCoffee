import React from 'react';
import { useLocation } from 'react-router-dom';

const PaymentPage = () => {
  const location = useLocation();
  const { cartItems, totalPrice } = location.state || {};

  if (!cartItems || cartItems.length === 0) {
    return <div>No items in the cart</div>;
  }

  return (
    <div className="container mx-auto my-10 px-4">
      <div className="grid grid-cols-10 gap-6">
        {/* Phần thông tin khách hàng chiếm 6 cột */}
        <div className="col-span-10 lg:col-span-6">
          <h3 className="text-xl font-semibold mb-4">Thông tin khách hàng</h3>
          <form className="space-y-4">
            <div>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded-md"
                placeholder="Họ tên"
              />
            </div>
            <div>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded-md"
                placeholder="Địa chỉ"
              />
            </div>
            <div className="flex justify-center space-x-4">
              <input
                type="tel"
                className="w-1/2 p-2 border border-gray-300 rounded-md"
                placeholder="Số điện thoại"
              />
              <input
                type="email"
                className="w-1/2 p-2 border border-gray-300 rounded-md"
                placeholder="Email"
              />
            </div>
            <div>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded-md"
                placeholder="Ghi chú"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600"
            >
              Đặt ngay
            </button>
          </form>
        </div>

        {/* Phần giỏ hàng và sản phẩm chiếm 4 cột */}
        <div className="col-span-10 lg:col-span-4">
          <h3 className="text-xl font-semibold mb-4">Thông tin sản phẩm</h3>
          {cartItems.map(item => (
            <div key={item.id} className="flex items-center space-x-4 mb-4">
              <img src={item.img} alt={item.name} className="w-20 h-20 object-cover rounded-md" />
              <div className="flex flex-col">
                <span className="font-medium">{item.name}</span>
                <span className="text-gray-500">{item.price} VNĐ</span>
              </div>
            </div>
          ))}
          <h4 className="text-xl font-semibold summary-price">Tổng cộng: {totalPrice} VNĐ</h4>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
