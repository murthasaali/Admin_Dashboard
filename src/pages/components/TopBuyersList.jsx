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
            <div className="grid grid-cols-1 h-[100%] overflow-y-hidden gap-2 p-2">
{
  topBuyers.map((item,index)=>(

    <div key={index}  className="h-[70px] w-full bg-stone-100 hover:bg-opacity-80 text-stone-400 hover:text-black hover:scale-105 transition-all duration-500 bg-opacity-10 justify-start items-center flex p-3 rounded-lg gap-2">
      <div className=''>
      <div className='w-10 h-10 rounded-lg' style={{backgroundImage:`url(${item.image})` ,backgroundSize:"cover ", backgroundPosition:"center"}}></div>
      <h1 className='text-[10px]  font-thin'>{item.name}</h1>
      </div>
      <div className='flex justify-between flex-col h-full'>
        <h1 className='text-[10px]'>highest sales :<span className='text-red-400 text-[15px]'>{item.totalSale}</span></h1>
        <h1 className='text-xs '>{item.totalTax}%</h1>
      </div>

    </div>
  ))

}

  {/* <!-- Add more divs as needed --> */}
</div>
    </div>
  )
}

export default TopBuyersList