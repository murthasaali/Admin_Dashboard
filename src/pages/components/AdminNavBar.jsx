import React from 'react'
import { CiInstagram, CiSearch } from "react-icons/ci";
import { FaRegBell, FaSearch } from "react-icons/fa";

function AdminNavBar() {
  return (
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
  )
}

export default AdminNavBar