import React, { useEffect, useState } from 'react'
import { FaRegStar } from "react-icons/fa";
import {discoutProducts} from '../Assets/producttest'
import { Link } from 'react-router-dom';



function BigDiscount() {

 
  const  getRating=(e)=>{

   return Math.floor(parseInt(e))
  }

  
  return (
    <div style={{backgroundColor:'#D3D3D3'}}  className='mt-6'>
      <h1 className='text-center mt-6'>Big Discount</h1>
      {/* <p>lorem12</p>
      {
        console.log(discoutProducts)
      } */}


<div className='d-flex  flex-wrap container justify-content-center '>
{
  
  discoutProducts.map((p)=>(

        <div class="card mx-3 mt-3 justify-content-around border border-white border-1"  style={{width: "25%" }}  key={p.id}  >
                        {/* <Link to={`/product/${p.id}`}  state={{ from: "occupation" }} > */}
                     
                       <Link  to={`/${p.id}/${p.category}`}>
     
<button className='btn btn-primary btn-group btn-group-sm btn-group btn-group-sm position-absolute top-0 start-0 ' style={{borderRadius:"45%"}}>{p.discount}%off</button>

          <img src={p.imgUrl} class="card-img-top" alt="..."/> 
          </Link>
         
            <h5 class="card-title">{p.productName}</h5>     
             
            {/* {
            setRatings(
              Math.floor(parseInt(p.avgRating))
            )

          } */}
           


  

 <p>{ getRating(p.avgRating) === 1 ? <FaRegStar /> : getRating(p.avgRating)===4 ? <><FaRegStar /> <FaRegStar />  <FaRegStar /> <FaRegStar /> </> :  getRating(p.avgRating)===3  ? <><FaRegStar /> <FaRegStar />  <FaRegStar /> </>:null}</p>

           
            
            <span  className="row">
               <p className='col-md-6'>  <b> ${p.price} </b>  </p>
              <button className='btn  col-md-6'>+</button>
              </span>

          </div>

  ))
}

</div>




    </div>
   
  )
}

export default BigDiscount
