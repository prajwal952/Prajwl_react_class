import React from 'react'

import { useDispatch,useSelector } from 'react-redux'
import { removeFromCart } from './Redux/ProductAction/ProductActions'



const Cart = () => {

  const dispatch= useDispatch();


const cart_date=useSelector((state)=>state.productDat.cartData)
console.log("cart_date data is",cart_date);

  return (
    <div>
      <h1>Products in your cart are</h1>

      {
        cart_date.map((c)=>(
         
           
      <div className="container mb-4">


          { 
          
          cart_date && cart_date.length  ? ( <div className="position-relative" >

<div class="card flex-row flex-wrap border-2" key={c.id}>

    <div class="card-header border-0">
    
        <img src={c.imgUrl} height={200} width={200} alt=""/>
    </div>

    <div class="card-block px-2">
    <button 
    style={{position:'absolute', top:'0', right:'0'}}
    onClick={()=>{dispatch(removeFromCart(c.id))}}
    >X</button>
        <h4 class="card-title">{c.productName}</h4>
        
        <p className='align-self-end  flex-end'>price:{c.price}</p>

        <p>Qty</p>

        <p>Tot Prices</p>

    </div>
  


</div>
</div>) : (<h1> Cart is is Empty...!</h1> )}


     
    
</div> 
          








         
        ))
      }


    
    </div>
  )
}

export default Cart




