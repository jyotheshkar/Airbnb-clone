import React from 'react';

const Card = ({src , title ,description , price}) => {
  return (
    <div className=' m-[10px] border-[1px] overflow-hidden shadow-2xl cursor-pointer rounded-2xl w-[500px] mt-4
    transition duration-300 ease-in-out
    ' >
      < img  src={src} alt='' className='object-fit  min-w-[300px] min-h-[200px] h-2
       w-[100%] ' />
      <div className='p-2 text-center bg-gradient-to-r from-black to-[#ff7779] text-white' >
            <h2 className='text-xl font-bold mx-2 my-2 text-[#EDC967]' >{title}</h2>
            <h4 className='text-md font-semibold text-[#D3D6D8]'  >{description}</h4>
            <button className=' bg-black text-[#ff7779] px-6 my-2 rounded-2xl font-bold p-1   ' >{price}</button>
      </div>

    </div>
  )
}

export default Card