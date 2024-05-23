import React, { useState } from 'react';
import { Button, Form, FormGroup, Input, Label, InputGroup, InputGroupText } from 'reactstrap';
import { FaSearch } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import {discoutProducts} from '../Assets/producttest'
import { Link } from 'react-router-dom';




const Shop = () => {
const [selectedValue, setSelectedValue] = useState('');
const [productData, setproductData] = useState(discoutProducts)
const [newProductData, setnewproductData] = useState(discoutProducts)


const  getRating=(e)=>{

  return Math.floor(parseInt(e))
 }

const OnSearch=(e)=>{
  e.preventDefault()
  console.log(e.target.value)



  setnewproductData(
    productData.filter((p)=>{
     let pdata= p.productName.toLowerCase();
     let key =e.target.value.toLowerCase();

        return pdata.includes(key) 
  
      })
  )
 
}


  // Event handler to handle changes in the dropdown
  const handleDropdownChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    
    <div>
      <img
        src='https://img.freepik.com/premium-photo/celebration-independence-day-bahama-website-covers_307791-3840.jpg?w=1800'
        alt=''
        className='img-fluid'
        style={{ height: 250, width: '100%' }}
      />
      <h1>SHOP</h1>


      <div className="container">
        <div className="row">
          {/* Dropdown start */}
          <div className="col-3">
            <div>
              <select id="dropdown" value={selectedValue} onChange={handleDropdownChange} className="form-control">
                <option value="">Category...</option>
                <option value="sofa">Sofa</option>
                <option value="bat">Bat</option>
                <option value="cat">Cat</option>
              </select>
            </div>
          </div>
          {/* Dropdown end */}

          {/* Search bar implementation */}
          <div className="col-9">
            <Form>
              <FormGroup>
                <InputGroup>
                  <Input
                    id="search"
                    name="search"
                    placeholder="Search the product of your choice"
                    type="text"
                    onChange={OnSearch}
                  />
                  <InputGroupText>
                    <FaSearch />
                  </InputGroupText>
                </InputGroup>
              </FormGroup>
            </Form>


{/* my code starts here */}

            <div className='d-flex  flex-wrap container justify-content-center '>
{
  
  newProductData.map((p)=>(

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
          {/* Search bar implementation end */}
        </div>
      </div>
    </div>
  );
}

export default Shop;
