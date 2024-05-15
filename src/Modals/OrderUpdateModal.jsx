import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { ImCross } from "react-icons/im";

function UpdateOrderModal({ isOpen, onClose, order, onUpdate }) {
  const [status, setStatus] = useState("");
  console.log(order)
  useEffect(() => {
    if (order) {
      setStatus(order.status);
    }
  }, [order]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedOrder = { ...order, status };
    console.log("updated ordersssss:",updatedOrder)
    onUpdate(updatedOrder);
    updateOrderInLocalStorage(updatedOrder); 
  };

  const totalAmount = (qty, price) => {
    return qty * price;
  };

  const updateOrderInLocalStorage = (updatedOrder) => {
    const orders = JSON.parse(localStorage.getItem("orders"));
    console.log(orders)
    const updatedOrders = orders.filter((ord) => ord.id !== updatedOrder.id);
    updatedOrders.unshift(updatedOrder);
    console.log(updatedOrders)
    localStorage.setItem("orders", JSON.stringify(updatedOrders));
    setTimeout(() => {
        toast.success("updated")
        onClose()
    }, 1500);
  };
  
  if (!isOpen) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center backdrop-blur-sm bg-opacity-50 z-50">
        
      <div className="bg-stone-50 bg-opacity-20 p-8 rounded-lg w-[450px] relative">
      <button
              type="button"
              onClick={onClose}
              className=" inline-flex h-fit justify-center hover:bg-red-500 hover:bg-opacity-55 text-red-500  hover:text-black hover:rotate-90 absolute top-2 right-2 p-3 rounded-full border border-transparent shadow-sm text-sm font-medium   bg-transparent  transition-all duration-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <ImCross />
            </button>
        <h2 className="text-xl  w-fit p-2 rounded-full mb-4 text-stone-300  font-bold">
          Update Order Details
        </h2>
        <div className="flex w-fit">
          <div
            className="h-40 w-48 relative rounded-xl justify-end  flex flex-col p-2"
            style={{
              backgroundImage: `url(${order.productImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
          <div className="w-fit h-44 px-3 gap-2 flex flex-col">
            <div className="w-[90%] h-fit  bg-customColor bg-opacity-50 rounded-full flex justify-start items-center p-1 gap-2">
              <div className="h-8 w-8 bg-black rounded-full"></div>
              <div className="text-xs text-white font-thin">
                {order.customerName}
              </div>
            </div>
            <button className="text-xs border w-fit px-2 py-1 rounded-full  text-white font-thin">
              #ord{order.id}
            </button>
            <button
              className={`text-xs border w-fit px-2 py-1 rounded-full  text-white font-thin ${
                status === "Shipped" ? "bg-green-500" : "bg-red-500 "
              }  `}
            >
              {status}
            </button>
            <div className="text-xs flex w-fit  py-1 rounded-full  items-end gap-2 text-white font-thin">
              <button className="text-xs border w-fit px-2 py-1 rounded-full  text-white font-thin">
                ₹
                <span className="text-xl font-bold text-stone-300">
                  {order.price}
                </span>
              </button>
              <button className="text-xs border w-fit  py-1 h-fit rounded-full font-normal text-white  px-3 justify-center items-center flex gap-2">
                
                Qty:
                <span className="text-xl font-bold text-stone-300">
                  {order.qty ? order.qty : "1"}
                </span>
              </button>
            </div>
          </div>
        </div>

        <div className="w-full text-white flex justify-between  p-4  ">
          <h1 className="text-xs">{order.orderDate}</h1>
          <h1 className=" text-white text-2xl">
            <span className="text-xl font-bold">Total :</span>{" "}
            {order.qty* order.price}
          </h1>
        </div>
        <div className="w-full h-fit  flex justify-between items-center">
          <form onSubmit={handleSubmit} className="w-full flex justify-between items-center">
            <div className="mb-4">
              <label
                htmlFor="status"
                className="block text-sm font-bold   text-stone-100"
              >
                Update Status
              </label>
              <select
                name="status"
                id="status"
                value={status}
                // using selection of status update the state of statussss
                onChange={(e) => setStatus(e.target.value)}
                className="mt-1  block w-[120px] p-2 rounded-full after:bg-black shadow-sm font-light  border-gray-300   bg-customColor bg-opacity-50 text-white text-xs outline-none "
              >
                <option value="Pending" className="rounded-lg">
                  Pending
                </option>
                <option value="Shipped">Shipped</option>
                <option value="Delivered">Delivered</option>
              </select>
            </div>
            <button
              type="submit"
              className="inline-flex h-fit justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-lg text-white bg-stone-900 bg-opacity-80 hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Update
            </button>
          </form>
          <div className="flex justify-end">
           
          
          </div>
        </div>
      </div>
    </div>
  );
}

export default UpdateOrderModal;
