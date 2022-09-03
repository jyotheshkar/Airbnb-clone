import React from 'react';
import Banner from './Banner';
import Card from './Card';

const Home = () => {
  return (
    <div className='home' >

< Banner />

<div className='flex p-[30px]' >
< Card 
 src='https://i.pinimg.com/originals/f9/64/a9/f964a96a58c1258a39619e6c8b6903e8.jpg'
 title='Online Experiences'
 description='Unique activities we can do together, led by a world of hosts'
 
  />
  < Card 
 src='https://i.pinimg.com/originals/1b/23/17/1b2317e17d5eea7827769bb3c6fc7647.jpg'
 title='Unique Stays'
 description='spaces then are more than just a peice of sleep , happy holidays!'
  />
  < Card 
 src='https://i.pinimg.com/736x/62/52/ba/6252baeda5bf9806c3f5df1bb639ed75--luxury-mansions-luxury-homes.jpg'
 title='Entire Homes'
 description='Comforatble private places with room for friends or family'
  />
</div>

<div className='flex p-[30px]   ' >
< Card 
className=''
 src='https://i.pinimg.com/originals/32/63/cf/3263cf50cd20a951b2ab39b6cb73684a.jpg'
 title='VIP'
 description='vip interiors designed with black and gold '
 price="$799"
  />
  < Card 
 src='https://cdn.decoist.com/wp-content/uploads/2014/06/Eclectic-living-rooms-allow-you-to-use-red-in-an-extensive-fashion.jpg'
 title='Red Carpet'
 description='Beautiful interiors for red lovers '
 price="$550"
  />
  < Card 
 src='https://cdn.decoist.com/wp-content/uploads/2014/05/Stunning-space-with-view-of-London-skyline-and-lighting-that-adds-a-blue-hue-to-the-room.jpg'
 title='Blued'
 description='Blued out with class and comfort '
 price="$999"
  />

</div>

    </div>
  )
}

export default Home