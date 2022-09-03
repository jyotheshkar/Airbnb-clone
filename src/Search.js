import React,{ useState } from 'react';
import {DateRangePicker} from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import PeopleIcon from '@mui/icons-material/People';
import Button from '@mui/material/Button';

const Search = () => {

const [ startDate , setStartDate] = useState(new Date());
const [endDate , setEndDate] =  useState(new Date());

const selectionRange = {
  startDate: startDate,
  endDate: endDate,
  key: "selection",
};

function handleSelect(ranges) {
  setStartDate(ranges.selection.startDate);
  setEndDate(ranges.selection.endDate);
}

  return (
    <div className='absolute top-[35px] left-[25%] w-[100vw] ' >
<DateRangePicker ranges={[selectionRange]} onChange=
{handleSelect} />
<div className='flex bg-white ' >
  <h1 className='ml-4 bg-white' >Number of Guests</h1>
< PeopleIcon className='ml-[370px]' />
</div>
<div>
< input className='bg-gray-100 w-[560px]  outline-none'/>
</div>


<Button className='bg-gradient-to-r from-[#ff7779] to-black text-white
px-[227px]  ' > Seach Airbnb </Button> 


    </div>
  )
}

export default Search