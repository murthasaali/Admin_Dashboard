import React from 'react'
import { CiMail } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { CiClock2 } from "react-icons/ci";
import { IoStatsChartOutline } from "react-icons/io5";
import { CiFileOn } from "react-icons/ci";
import { HiMiniUsers } from "react-icons/hi2";
import { CiSettings } from "react-icons/ci";
import { CiLogout } from "react-icons/ci";
import { FaRegBell, FaSearch } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { setAdminLoggedIn } from '../../Redux/features/AdminSlice';
import toast from 'react-hot-toast';

function Sidebar() {
  const dispatch = useDispatch()
    
  return (
    <div className="max-w-md rounded-3xl p-px bg-gradient-to-b h-full w-[80px] bg-opacity-50 from-blue-300 to-pink-300 dark:from-blue-800 dark:to-purple-800 ">
    <div className="rounded-[calc(1.5rem-1px)] text-iconcolor text-xl bg-white h-full dark:bg-gray-900 flex flex-col w-full p-2">
      <div className="h-[50%] w-full bg-transparent  flex flex-col justify-evenly items-center">
        <CiMail/>
        <CiShoppingCart/>
        <CiClock2/>
        <IoStatsChartOutline/>
        <FaSearch/>
      </div>
      <div className="h-px w-full bg-stone-200"></div>
      <div className="h-[50%] w-full bg-transparent flex flex-col justify-between items-center py-8">
        <div className="flex flex-col items-center gap-8">

        <CiFileOn/>
        <HiMiniUsers/>
        <CiSettings/>
        </div>

        <CiLogout title='logout' onClick={()=>{dispatch(setAdminLoggedIn(false));toast.error("admin logoutted")}}/>
      </div>


    </div>
  </div>
)
}

export default Sidebar