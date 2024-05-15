import React, { useState } from 'react';
import UpdateOrderModal from '../../Modals/OrderUpdateModal';

function Orders() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);

  const openModal = (order) => {
    setSelectedOrder(order);
    setIsModalOpen(true);
  };

  const orders = JSON.parse(localStorage.getItem("orders")) || [];
  console.log(orders);

  const closeModal = () => {
    setSelectedOrder(null);
    setIsModalOpen(false);
  };

  const handleUpdateOrder = (updatedOrder) => {
    console.log("Updated order:", updatedOrder);
  };

  return (
    <div className="grid grid-cols-5 gap-5 h-full overflow-y-scroll overflow-x-hidden py-3">
      {orders.map((item, index) => (
        <div
          className="flex flex-col gap-2 hover:scale-105 transition-all duration-300 opacity-70 hover:opacity-90"
          key={index}
        >
          <div
            className="h-40 w-4h-40 relative rounded-xl justify-end  flex flex-col p-2"
            style={{ backgroundImage: `url(${item.productImage})`, backgroundSize: "cover", backgroundPosition: "center" }}
            onClick={() => openModal(item)}
          >
            <div className='w-[90%] h-fit p-1 backdrop-blur-md rounded-full flex justify-start items-center'>
              <div className="h-8 w-8 bg-black rounded-full"></div>
              <div className="text-xs text-white font-thin">{item.customerName}</div>
            </div>
          </div>
          <div className="w-full justify-between flex ">
            <div className={` ${item.status === "Shipped" ? 'border-green-300' : "border-red-500"}   h-fit w-fit  border px-3 py-[3px]  text-[10px] text-iconcolor font-thin rounded-full bg-black`}>{item.status}</div>
            <div className="text-iconcolor text-sm font-thin">#ord{item.id}</div>
          </div>
        </div>
      ))}

      {/* Modal */}
      <UpdateOrderModal isOpen={isModalOpen} onClose={closeModal} order={selectedOrder} onUpdate={handleUpdateOrder} />
    </div>
  );
}

export default Orders;
