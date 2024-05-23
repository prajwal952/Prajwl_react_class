import React from 'react'
import { TbTruckDelivery } from "react-icons/tb";
import { RiSecurePaymentFill } from "react-icons/ri";
import { MdSafetyCheck } from "react-icons/md";
import { FaBasketShopping } from "react-icons/fa6";

const DummayCard = () => {
  return (
    <div className="d-flex justify-content-md-evenly mt-3 mb-6 container ">
        <div className="row">

        <div className='card w-25 bg-info border border-1 rounded-end  shadow ms-3 col mb-6' style={{width: "25%", height:'150px' ,textAlign:'center', justifyContent:'center'}}>
        <span className='icons mb-3 bg-light rounded mx-auto' style={{alignItems:"center", height:'30px', width:'30px' ,justifyContent:'center'}}> <TbTruckDelivery/> </span>
            <h3 className='card-subtitle mb text-muted'>Free Shipping</h3>
            <p className='card-text mt-1'>Lorem ipsum dolor sit amet.</p>
        </div>


        <div className='card w-25 bg-warning border border-1 rounded-end  shadow ms-4 col' style={{width: "25%", height:'150px' ,textAlign:'center', justifyContent:'center'}}>
        <span className='icons mb-3 bg-light rounded mx-auto' style={{alignItems:"center", height:'30px', width:'30px' ,justifyContent:'center'}}> <MdSafetyCheck/> </span>
            <h3 className='card-subtitle mb text-muted'>Safe Payment</h3>
            <p className='card-text mt-1'>Lorem ipsum dolor sit amet.</p>
        </div>

        <div className='card w-25 bg-light border border-1 rounded-end  shadow ms-4 col' style={{width: "25%", height:'150px' ,textAlign:'center', justifyContent:'center'}}>
        <span className='icons mb-3 bg-light rounded mx-auto' style={{alignItems:"center", height:'30px', width:'30px' ,justifyContent:'center'}}><RiSecurePaymentFill/> </span>
            <h3 className='card-subtitle mb text-muted'>Secure Pay</h3>
            <p className='card-text mt-1'>Lorem ipsum dolor sit amet.</p>
        </div>

        <div className='card w-25 bg-danger bg-gradient border border-1 rounded-end  shadow ms-4 col' style={{width: "25%", height:'150px' ,textAlign:'center', justifyContent:'center'}}>
        <span className='icons mb-3 bg-light rounded mx-auto' style={{alignItems:"center", height:'30px', width:'30px' ,justifyContent:'center'}}><FaBasketShopping/> </span>
            <h3 className='card-subtitle mb text-muted'>Buy Back</h3>
            <p className='card-text mt-1'>Lorem ipsum dolor sit amet.</p>
        </div>

    </div>
    </div>
  )
}

export default DummayCard