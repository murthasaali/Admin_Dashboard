import React from 'react'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { topBuyers } from '../../Datas/TopBuyers'
function TopBuyersList() {
  return (
    <div className='w-full h-[60%]  flex flex-col'>
         <nav className='w-full p-3 text-white font-thin text-xs  h-fit flex justify-between items-center '>
top Buyers                <button className='p-2'>

                <BsThreeDotsVertical className=' text-iconcolor'/>
                </button>
            </nav>
            <div className="grid grid-cols-1 h-[100%] overflow-y-auto gap-2 p-4">
{
  topBuyers.map((item,index)=>(

    <div key={index}  className="h-16 w-full bg-stone-100 bg-opacity-10 justify-start items-center flex p-2 rounded-lg">
      <div className='w-10 h-10 rounded-lg' style={{backgroundImage:`url(${item.image})` ,backgroundSize:"cover ", backgroundPosition:"center"}}></div>
    </div>
  ))

}

  {/* <!-- Add more divs as needed --> */}
</div>
    </div>
  )
}

export default TopBuyersList