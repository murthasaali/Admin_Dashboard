import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { ImCross } from "react-icons/im";
import CustomButton from "../customcomponets/CustomButton";

function UpdateOrderModal({ isOpen, onClose, order, onUpdate }) {
  const [status, setStatus] = useState("");
  const [loading, setloading] = useState(false);

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
    setloading(true)
    setTimeout(() => {
      toast.success("updated")
      
      setloading(false)
        onClose()
    }, 2500);
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
            className="h-40 w-48 relative rounded-xl justify-end  flex flex-col p-2 "
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
            {/* <button
              type="submit"
              className="inline-flex h-fit justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-lg text-white bg-stone-900 bg-opacity-80 hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Update
            </button> */}
            {
              !loading?
           (   <CustomButton  content={"update"} type={"submit"} height={"35px"}/>):
         
           (
            <svg
            aria-hidden="true"
            className="inline w-6 h-6 text-gray-200 animate-spin dark:text-gray-600 fill-purple-600"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
           )

            }
          </form>
          <div className="flex justify-end">
           
          
          </div>
        </div>
      </div>
    </div>
  );
}

export default UpdateOrderModal;
