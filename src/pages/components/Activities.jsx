import React from 'react'
import { BsThreeDotsVertical } from "react-icons/bs";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


function Activities() {
    
    const percentage = 66;
 
  return (
    <div className='w-full h-[230px] rounded-3xl bg-black flex flex-col items-center' style={{backgroundImage:"url('https://avatars.mds.yandex.net/i?id=c69db87e9def8e34ef2d604db1f97aa2_l-6696526-images-thumbs&ref=rim&n=13&w=1080&h=1351')",backgroundPosition:"center"}}>
           <div className='backdrop-blur-md w-full h-full rounded-3xl flex flex-col justify-center items-center'>
           <nav className='w-full p-3 text-white  h-fit flex justify-between items-center'>
                Activities
                <button className='p-2'>

                <BsThreeDotsVertical className=' text-iconcolor'/>
                </button>
            </nav>
            <div className='w-36 h-3w-36  rounded-full p-3 '  >
            <CircularProgressbar value={80} text={`60%`} />;

            </div>
           </div>
    </div>
  )
}

export default Activities