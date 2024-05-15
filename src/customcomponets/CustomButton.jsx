import React from 'react'

function CustomButton({handleButton,content,height,textsize ,bgcolor,type}) {
  return (
    <button type={type&&type} className="w-fit px-4 h-fit  bg-customColor bg-opacity-50 rounded-full flex justify-start items-center p-1 gap-2" onClick={handleButton}>{content}</button>
  )
}

export default CustomButton