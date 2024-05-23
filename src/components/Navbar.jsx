import React from 'react'
import { FaShoppingBag } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from 'react-router-dom';




const Navbar= () => {
  return (
  
      

        <nav className="navbar navbar-expand-lg navbar-light bg-light shadow">
  <div className="container">
  
    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
        <Link  className="navbar-brand ms-6"> <FaShoppingBag className='mb-1 mr-3'/> E-Mart</Link>
    
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
    
      </ul>


      <form className="d-flex">
      
<div
className="collapse navbar-collapse " id="navbarTogglerDemo01"
>

<ul className="navbar-nav me-auto mb-2 mb-lg-0">
         <Link to="/" className="nav-item ms-3"  style={{color:'black', textDecoration: 'none'  }} > Home</Link>
        <Link to="/shop" className="nav-item ms-3"  style={{color:'black', textDecoration: 'none'  }}> Shop</Link>
        <Link to="/cart"  className="nav-item active ms-3"  style={{color:'black', textDecoration: 'none'  }} > Cart</Link>

        <li className="nav-item active ms-3">
        <FaUser/>
        </li>
        <li className="nav-item active ms-3">
        <FaShoppingCart/>
        </li>
      </ul>  
</div>

  

      </form>
    </div>
  </div>
</nav>


  )
}

export default Navbar
