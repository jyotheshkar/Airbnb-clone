import React , { useState } from 'react';
import Button from '@mui/material/Button';
import Search from './Search';
import { useHistory } from "react-router-dom"


const Banner = () => {
  const history = useHistory()
    const [showSearch , setShowSearch ] = useState(false);
  return (
    <div className='h-[50vh] relative mb-10
  bg-[url(https://i.pinimg.com/originals/ce/7f/bb/ce7fbbeac4779d94bd4786e1c6907011.jpg)]
     bg-center bg-no-repeat w-full bg-cover  '>
        {showSearch && < Search /> }
        < Button className='banner' variant='contained' onClick={() => {
            setShowSearch(!showSearch)
        }} >
       { showSearch ? "Hide" : "Search Dates" }
        </Button>
<div className='bg-black text-white pl-[10px] pr-[5px] pt-[20vh] pb-[20px] 
 w-[360px] h-[310px]  ' >
    <h1 className='font-semibold text-xl  ' >
        Get out and stretch your imagination</h1>
    <h5 className='text-sm py-2'>Plan a different kind of getaway to uncover 
        the hidden gems near you 
    </h5>
< Button variant='contained' className='button' onClick={ () => {
  history.push( "/search")
} } >
Explore Nearby
</Button>
</div>

    </div>

  )
}

export default Banner