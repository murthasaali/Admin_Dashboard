import React from 'react'

function CustomButton({ handleButton, content, height, textsize, bgcolor, type ,textColor,border}) {
  return (
    <button
      type={type || 'button'}
      className={`w-fit h-fit px-4 ${textsize ? `text-${textsize}` : 'text-xs'} ${border ? border : ''} bg-${bgcolor || 'customColor'}    bg-opacity-50 font-thin hover:bg-opacity-90 rounded-full flex justify-start items-center p-1 gap-2 ${textColor ? textColor : 'text-white'} `}
      onClick={handleButton}
      style={{ height: height || '30px' }}
    >
      {content}
    </button>
  )
}

export default CustomButton
