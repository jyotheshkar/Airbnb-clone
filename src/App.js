import React from 'react';
import Header from './Header';
import Home from './Home';
import Footer from './Footer';
import SearchPage from './SearchPage';
import { BrowserRouter as Router, Route , Switch } from 'react-router-dom';

const App = () => {
  return (
    <div className='bg-[#fafafa]' >

< Router>

<Header />

<Switch >
<Route path='/search'  >
  <SearchPage  />
</Route>

  <Route path='/' >
  < Home />
  </Route>


</Switch>

< Footer />


</Router>
   
     
 

    </div>
  )
}

export default App