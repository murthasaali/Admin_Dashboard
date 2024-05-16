import React, { useState } from "react";
import { CiInstagram, CiSearch } from "react-icons/ci";
import { FaRegBell, FaSearch } from "react-icons/fa";
import Activities from "./components/Activities";
import TopBuyersList from "./components/TopBuyersList";
import dummyOrders  from '../Datas/OrderDetails'
import { useLocation, useNavigate } from "react-router-dom";
import Orders from "./components/Orders";
import Sidebar from "./components/Sidebar";
import LoginModal from "../Modals/LoginModal";
import CustomButton from "../customcomponets/CustomButton";
function AdminDashboard({isAdminLoggedIn}) {
  console.log(dummyOrders)
  const nav =useNavigate()
  const location =useLocation()
  const [statusFilter, setStatusFilter] = useState('all');

  const handleFilterChange = (status) => {
    setStatusFilter(status);
  };

  const isOrder=location.pathname.endsWith("/orders")
  return (
    
    <div
      className="w-full h-screen flex justify-between gap-2 p-5"
      style={{ background: "#0B0D21 " }}
    >

      {/* first parent */}
      <Sidebar/>
      {!isAdminLoggedIn&&( <><LoginModal  /></>)}


      {/* second parent */}
     {
      !isOrder? <div className="max-w-[70%]  w-[70%] p-px bg-gradient-to-b h-full  bg-opacity-10 flex-col flex gap-3 ">
      <nav className="w-full flex justify-start gap-2 items-center text-xs">
          <div className="w-[300px] h-10  rounded-full placeholder:text-white  bg-stone-50 bg-opacity-10 flex justify-center items-center text-xl p-4 gap-2 shadow-md  ">
            <CiSearch className="text-white" />
            <input
              type="text"
              className="bg-transparent text-white text-xs outline-none w-full "
            />
        </div>
 
          <div className="w-fit h-10 bg-stone-50 bg-opacity-10 rounded-lg font-bold text-white  flex justify-center items-center text-xl p-4 gap-2 shadow-md  ">
            <CiInstagram className="text-white" />
            32,ETH

       
          </div>
          <div className="w-fit h-10 bg-stone-100 bg-opacity-10 font-bold text-white rounded-full   flex justify-center items-center text-xl p-4 gap-2 shadow-md  ">
        <FaRegBell/>
       
        </div>
          <div className="w-fit h-10 bg-stone-100 rounded-full bg-opacity-10 font-normal text-xs text-white   flex justify-center items-center  p-4 gap-2 shadow-md  ">
        Create
          </div>
          <div className="w-fit h-10 bg-stone-100 bg-opacity-10 font-thin text-white  rounded-full   flex justify-center items-center  p-4 gap-2 shadow-md  ">
        connect wallet
          </div>
        <div className="p-px h-full bg-stone-50"></div>
        <div className="p-px h-ful flex gap-2">
          {/* <div className="w-10 h-10 rounded-full bg-slate-600" style={{backgroundImage:"url('https://avatars.mds.yandex.net/i?id=628c908972b034f7236d7d6c63b12119de955a63-9569150-images-thumbs&ref=rim&n=33&w=375&h=375')"}}></div> */}
        <img src="https://avatars.mds.yandex.net/i?id=628c908972b034f7236d7d6c63b12119de955a63-9569150-images-thumbs&ref=rim&n=33&w=375&h=375" className="w-10 h-10 rounded-full"/>
          <div className="w-fit h-fit flex flex-col justify-between">
            <h1 className="text-sm font-thin text-stone-200">Mushfiqur Rahman</h1>
            <h1 className="text-xs font-thin text-stone-50 text-opacity-35">hello@gmail.com</h1>
          </div>
        </div>
      </nav>
     <h1 className="text-[40px] text-white  font-thin w-full relative">  <button className="text-xs flex justify-center items-center  absolute right-0 bottom-0 gap-2">Show more <FaSearch/></button></h1>
{/* nft cards */}
<div className="w-full h-fit  flex justify-between gap-3">
<div className="w-[50%] h-52 bg-stone-50 rounded-3xl flex justify-start items-end p-4" style={{backgroundImage:"url('https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/f04a2b153523503.6331a40cd438d.png')" ,backgroundPosition:"center",backgroundSize:"cover"}}> 

<div className="w-[50%] h-[60%] backdrop-blur-sm rounded-3xl bg-stone-900 bg-opacity-30">
<div className="flex p-3 justify-between">
    <div className="flex flex-col gap-2 justify-center items-center">
      <h1 className="text-xs text-white font-bold">18h:13minutes:19s</h1>
      <h1 className="text-[10px] text-white font-thin"> remining</h1>
      </div>
    <div className="flex flex-col gap-2 justify-center items-start">
      <h1 className="text-xs text-white font-bold">17.3 ETH</h1>
      <h1 className="text-[10px] text-white font-thin"> remining</h1>
      </div>
  </div>
  <div className="w-full h-12  p-3"> 
  <button className="bg-customColor  w-full h-full rounded-2xl opacity-70 text-xs font-thin text-white">place a bid</button>
  </div>
</div>
</div>
<div className="w-[50%] h-52 bg-stone-50 rounded-3xl flex justify-start items-end p-4" style={{backgroundImage:"url('https://uiuiui.in/uploads/posts/2022-11/2570582566-78fe7f823357080bbbb9cc25615dd928.webp')" ,backgroundPosition:"center",backgroundSize:"cover"}}>
<div className="w-[50%] h-[60%] backdrop-blur-sm rounded-3xl bg-stone-900 bg-opacity-30 border-[2px flex-col flex ">
  <div className="flex p-3 justify-between">
    <div className="flex flex-col gap-2 justify-center items-center">
      <h1 className="text-xs text-white font-bold">18h:13minutes:19s</h1>
      <h1 className="text-[10px] text-white font-thin"> remining</h1>
      </div>
    <div className="flex flex-col gap-2 justify-center items-start">
      <h1 className="text-xs text-white font-bold">17.3 ETH</h1>
      <h1 className="text-[10px] text-white font-thin"> remining</h1>
      </div>
      
  </div>
  <div className="w-full h-12  p-3"> 
  <button className="bg-customColor  w-full h-full rounded-2xl opacity-70 text-xs font-thin text-white">place a bid</button>
  </div>
</div>
</div>

</div>
<div className="text-[30px] text-white  font-thin w-full relative flex gap-2">
  <h1 className="px-4 py-2 bg-stone-50 bg-opacity-10 text-xl w-fit rounded-xl">recent  orders   </h1> 
  <CustomButton content={"all"} handleButton={() => handleFilterChange('all')}/>
  <CustomButton content={"deliverd"} handleButton={() => handleFilterChange('Delivered')}/>
  <CustomButton content={"pending"} handleButton={() => handleFilterChange('Pending')}/>
  <CustomButton content={"shipped"} handleButton={() => handleFilterChange('Shipped')}/>

  
    <button className="text-xs flex justify-center items-center  absolute right-0 bottom-0 gap-2" onClick={()=>nav("/orders")}>Show more </button></div>
<Orders  statusFilter={statusFilter}/>
    </div>:<div className="max-w-[70%]  w-[70%] p-px bg-gradient-to-b h-full  bg-opacity-10 flex-col flex gap-3 ">
    <h1 className="text-[30px] text-white  font-thin w-full relative"><span className="px-4 py-2 bg-stone-50 bg-opacity-10 text-xl rounded-xl">recent  orders   </span>   <button className="text-xs flex justify-center items-center  absolute right-0 bottom-0 gap-2" onClick={()=>nav("/")}>Show less</button></h1>

      <Orders  statusFilter={statusFilter}/></div>
     }
      {/* third parent */}
      <div  className="max-w-[20%] rounded-3xl w-[35%] p-px bg-gradient-to-b h-full bg-opacity-50 from-blue-300 to-pink-300 dark:from-blue-800 dark:to-purple-800 ">
        <div className="rounded-[calc(1.5rem-1px)]  bg-white h-full dark:bg-gray-900 flex flex-col p-3 gap-3">
          <Activities/>
          <TopBuyersList/>
          <button className="text-iconcolor text-xs font-thin">www.growhance.com</button>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
