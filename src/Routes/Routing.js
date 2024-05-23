import React from 'react'
import {Route,Routes} from 'react-router-dom'
import Home from '../components/Home'
import Shop from '../components/Shop'
import Cart from '../components/Cart'
import SinglePorduct from '../components/SinglePorduct'

const Routing = () => {
  return (
    <div>

       <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/cart" element={<Cart/>} />
            <Route path="/shop" element={<Shop/>} />
            <Route path='/:urlId/:cat' element={<SinglePorduct/>} />

     
        </Routes>
    </div>
  )
}

export default Routing