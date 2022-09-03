import React from 'react';
import Button from '@mui/material/Button';
import SearchResult from './SearchResult';


const SearchPage = () => {
  return (
    <div className='pl-6 pt-4 pb-8 ' >
  <div>
      <h1 className='pl-2' > 62 stays . 26 augustt to 30 august . 2 guest </h1>
      <h1 className='font-bold text-4xl py-4 pl-2 ' > Stays Nearby</h1>
      <div >
 <Button variant='outlined' className='buttons' >
Cancellation Flexibility
 </Button>
 <Button variant='outlined' className='buttons' >
Type of Place
 </Button>

 <Button variant='outlined' className='buttons' >
Price
 </Button>

 <Button variant='outlined' className='buttons' >
Rooms and Beds
 </Button>
 <Button variant='outlined' className='buttons' >
More Filters
 </Button>
</div> </div>

< SearchResult
img ="https://i.pinimg.com/564x/c6/db/d9/c6dbd90441787a1fa72665f6ddf4d9de.jpg"
location ="Private Room in Center of london "
title ="Stay at this spacious Edward House"
description ="1 guest . 1 bedroom . 1 bed . 1.5 shared bathrooms . wifi . Kitchen 
. Free parkings . Washing Machines"
star = {4.73}
price ="$30 / night "
total ="$117 total"
 />

 
< SearchResult
img ="https://i.pinimg.com/originals/34/de/4d/34de4d139b895173728fb76483451560.jpg"
location ="Private Room in Center of london "
title ="Stay at this spacious Edward House"
description ="1 guest . 1 bedroom . 1 bed . 1.5 shared bathrooms . wifi . Kitchen 
. Free parkings . Washing Machines"
star = {4.73}
price ="$30 / night "
total ="$117 total"
 />

 
< SearchResult
img ="https://i.pinimg.com/originals/d1/cf/05/d1cf055c26863c389e9c09c6bac989ff.jpg"
location ="Private Room in Center of london "
title ="Stay at this spacious Edward House"
description ="1 guest . 1 bedroom . 1 bed . 1.5 shared bathrooms . wifi . Kitchen 
. Free parkings . Washing Machines"
star = {4.73}
price ="$30 / night "
total ="$117 total"
 />
 
 < SearchResult
img ="https://i.pinimg.com/originals/aa/5c/f4/aa5cf4c8ccfadf7bec22931ae6c4c14d.jpg"
location ="Private Room in Center of london "
title ="Stay at this spacious Edward House"
description ="1 guest . 1 bedroom . 1 bed . 1.5 shared bathrooms . wifi . Kitchen 
. Free parkings . Washing Machines"
star = {4.73}
price ="$30 / night "
total ="$117 total"
 />
    </div>
  
  )
}

export default SearchPage;