import React from 'react'

function CustomButton({ handleButton, content, height, textsize, bgcolor, type }) {
  return (
    <button
      type={type || 'button'}
      className={`w-fit px-4 ${textsize ? `text-${textsize}` : 'text-xs'} bg-${bgcolor || 'customColor'} bg-opacity-50 font-thin hover:bg-opacity-90 rounded-full flex justify-start items-center p-1 gap-2`}
      onClick={handleButton}
      style={{ height: height || 'auto' }}
    >
      {content}
    </button>
  )
}

export default CustomButton
