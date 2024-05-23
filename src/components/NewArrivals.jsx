import React from 'react'
import { FaRegStar } from "react-icons/fa";
import {discoutProducts} from '../Assets/producttest'



const NewArrivals = () => {


    const  getRating=(e)=>{

        return Math.floor(parseInt(e))
       }

  return (
    <div>

<div style={{backgroundColor:'white'}}  className='mt-6'>
      <h1 className='text-center mt-6'>New Arrivals</h1>
      {/* <p>lorem12</p>
      {
        console.log(discoutProducts)
      } */}


<div className='d-flex  flex-wrap container justify-content-center '>
{
  
  discoutProducts.map((p)=>(

        <div class="card mx-3 mt-3 justify-content-around border border-grey border-3"  style={{width: "25%" ,backgroundColor:'#D3D3D3'}}  key={p.id}>




<button className='btn btn-primary btn-group btn-group-sm btn-group btn-group-sm position-absolute top-0 start-0 ' style={{borderRadius:"45%"}}>{p.discount}%off</button>
          <img src={p.imgUrl} class="card-img-top" alt="..."/> 
        
         
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

    </div>
  )
}

export default NewArrivals