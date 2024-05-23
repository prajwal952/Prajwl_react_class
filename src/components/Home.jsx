import React from 'react'
import Navbar from './Navbar'
import SimpleSlider from './SimpleSlider'
import DummayCard from './DummayCard'
import BigDiscount from './BigDiscount'
import Footer from './Footer'
import NewArrivals from './NewArrivals'


const Home = () => {
  return (
    <div>
     <SimpleSlider/>

     <DummayCard />


   
      <BigDiscount />

      <NewArrivals/>
      
 
    </div>
  )
}

export default Home