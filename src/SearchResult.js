import React from 'react';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import StarIcon from '@mui/icons-material/Star';

const SearchResult = ({
img ,
location ,
title ,
description ,
star ,
price ,
total ,

}) => {
  return (
    <div className='flex relative m-[20px] p-[20px] border-b-[4px] border-4 border-gray-200 cursor-pointer hover:opacity-80' >
<img src={img} alt="" className='h-[200px] w-[350px] rounded-lg overflow-hidden ' />
< FavoriteBorderIcon  className=" ml-2 text-red-400" />
<div  className='flex flex-cols justify-between pl-[20px]' >
    < div className='ml-4' >
      <p>{location}</p>
      <h2 className='font-bold' >{title}</h2>
      <p className="text-gray-400">_____</p>
      <p>{description}</p>
    </div>

    < div className='mt-44 flex space-between ' >
   <div className='flex mr-20' >
   <   StarIcon className='text-red-600' />
      <strong>{star}</strong>
   </div>
   <div className='flex ' >
    <h1>{price}</h1>
    <h1> {total} </h1>
   </div>
    </div>

</div>
    </div>
  )
}

export default SearchResult