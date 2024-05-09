import React from 'react'
import { BsThreeDotsVertical } from 'react-icons/bs'

function TopBuyersList() {
  return (
    <div className='w-full h-[60%]  flex flex-col'>
         <nav className='w-full p-3 text-white font-thin text-xs  h-fit flex justify-between items-center '>
top Buyers                <button className='p-2'>

                <BsThreeDotsVertical className=' text-iconcolor'/>
                </button>
            </nav>
            <div className="grid grid-cols-1 h-[100%] overflow-y-auto gap-2 p-4">
  <div className="h-12 w-full bg-stone-100 bg-opacity-25 rounded-lg"></div>
  <div className="h-12 w-full bg-stone-100 bg-opacity-25 rounded-lg"></div>
  <div className="h-12 w-full bg-stone-100 bg-opacity-25 rounded-lg"></div>
  <div className="h-12 w-full bg-stone-100 bg-opacity-25 rounded-lg"></div>
  <div className="h-12 w-full bg-stone-100 bg-opacity-25 rounded-lg"></div>

  {/* <!-- Add more divs as needed --> */}
</div>
    </div>
  )
}

export default TopBuyersList