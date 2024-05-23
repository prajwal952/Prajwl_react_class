// import React from 'react'
// import { discoutProducts } from '../Assets/producttest'
// import { FaRegStar } from "react-icons/fa";

// import { useParams } from "react-router-dom"


// export default function SinglePorduct() {

//     const { urlId } = useParams()
//     const { cat } = useParams()
//     console.log("url is ", { urlId })
//     console.log("category  is ", cat)


//     const getRating = (e) => {

//         return Math.floor(parseInt(e))
//     }

//     return (
//         <div className='container'>


//             {
//                 discoutProducts.map((p) => (

//                     //  console.log("product info is ",p)




//                     p.id === urlId && (

//                         <div key={p.id}  >
//                             {/* banner image         */}
//                             <img src='https://img.freepik.com/premium-photo/celebration-independence-day-bahama-website-covers_307791-3840.jpg?w=1800' alt='' className='img-fluid max-width: 100%' style={{ height: 250, width: 3000 }} />


//                             <div className="container">
//                                 <div className="row">
//                                     <div className="col-md-6 mt-2 border">
//                                         <img src={p.imgUrl} className="img-fluid" />
//                                     </div>
//                                     <div className="col-md-6 mt-2 border">
//                                         <h2 className="pt-3">{p.productName}</h2>
//                                         <div className="product_price mt-3">
//                                             <span className="bg-info text-light p-2">
//                                                 price: ${p.price}
//                                             </span>
//                                         </div>
//                                         <div className="product_category mt-3">
//                                             <span className="bg-secondary text-white p-1">
//                                                 Category : {p.category}
//                                             </span>
//                                         </div>
//                                         <div className="product_description mt-3">
//                                             <h4>Product Description:</h4>
//                                             <p className="p-2"> {p.description}</p>
//                                         </div>
//                                         <div className="product_addToCart mt-3">
//                                             {/* <button
//                         className="btn btn-info px-3 py-2"
//                         onClick={() => console.log(addToCart(product))}
//                         >
//                         Add to Cart
//                         </button> */}
//                                             <button
//                                             //   className="btn btn-info px-3 py-2"
//                                             //   onClick={() => dispatch(addToCart(product))}
//                                             >
//                                                 Add to Cart
//                                             </button>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>




//                         </div>

//                     )



//                     // p.cat === cat &&{
//                     //     <div>{p.name}</div>
//                     // }





//                 ))

//             }



//         </div>
//     )
// }





import React from 'react';
import { discoutProducts } from '../Assets/producttest';
import { FaRegStar } from 'react-icons/fa';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from './Redux/ProductAction/ProductActions';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';





export default function SingleProduct() {
    const { urlId, cat } = useParams();
    console.log('urlId is ', urlId);
    console.log('category is ', cat);

    const dispatch = useDispatch();

    const getRating = (e) => {
        return Math.floor(parseInt(e));
    };

    const [reviewVisible, setReviewVisible] = useState(true);

    const handleAddToCartOnclick = (p) => {
        console.log("Flow inside handleAddToCartOnclick")
        dispatch(addToCart(p));
        console.log("Trigger notification in adding to cart function")
        toast.success("ADDED TO CART");
    };

    return (
        <div className='container'>
            {discoutProducts.map((p) => {
                if (p.id === urlId) {
                    return (
                        <div key={p.id}>
                            <img
                                src='https://img.freepik.com/premium-photo/celebration-independence-day-bahama-website-covers_307791-3840.jpg?w=1800'
                                alt=''
                                className='img-fluid max-width: 100%'
                                style={{ height: 250, width: 3000 }}
                            />
                            <div className='container'>
                                <div className='row'>
                                    <div className='col-md-6 mt-2 border'>
                                        <img src={p.imgUrl} className='img-fluid' />
                                    </div>
                                    <div className='col-md-6 mt-2 border'>
                                        <h2 className='pt-3'>{p.productName}</h2>
                                        <div className='product_price mt-3'>
                                            <span className='bg-info text-light p-2'>
                                                Price: ${p.price}
                                            </span>
                                        </div>
                                        <div className='product_category mt-3'>
                                            <span className='bg-secondary text-white p-1'>
                                                Category: {p.category}
                                            </span>
                                        </div>
                                        <div className='product_description mt-3'>
                                            {/* <h4>Product Description:</h4> */}

                                            <span className="ms-4 header">Product Description:</span>

                                            <button
                                                className="btn btn-link ms-4"

                                                style={{ color: 'black', textDecoration: 'none' }}

                                                onClick={() => {
                                                    console.log('clicked');
                                                    setReviewVisible(n => !n);
                                                }}> <i>Re-views</i>  </button>

                                            {reviewVisible ? <p className='p-2'>{p.description}</p> : <p className='p-2'>
                                                {p.reviews.map((r) => (
                                                    <ul>
                                                        <div className=''><b><i>Ratings</i></b> {r.rating}<FaRegStar /> </div>
                                                        <div><b><i>Comments: </i></b>{r.text}</div>
                                                        {/* <li> <b><i>Comments: </i></b>{r.text}</li> */}

                                                    </ul>
                                                ))

                                                }
                                            </p>}


                                        </div>
                                        <div className='product_addToCart mt-3'>

                                            {/* <button onClick={()=>{console.log("add to cart clicked",addToCart(p))}}>Add to Cart</button> */}


                                            {/* <button onClick={()=>{dispatch(addToCart(p))}}>Add to Cart</button> */}

                                            <button onClick={() => handleAddToCartOnclick(p)}>Add to cart</button>
                                            <ToastContainer />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <h2>Similar products:-</h2>
                        </div>


                    );

                }


                else if (p.category === cat) {
                    console.log("flow here", p);

                    return <div className='container' >
                        <div className="row">
                            <div class="card mx-3 mt-3 border border-grey border-3 col-lg-6 col-md-4 border" style={{ width: "25%" }}   >

                                <Link to={`/${p.id}/${p.category}`}>
                                    <button
                                        className='btn btn-primary  btn-group-sm  btn-group-sm  '
                                        style={{ borderRadius: "45%" }}
                                    >{p.discount}%off
                                    </button>
                                    <img src={p.imgUrl} class="card-img-top" alt="..." />
                                </Link>

                                <h5 class="card-title">{p.productName}</h5>

                                <span className="row">
                                    <p className='col-md-6'>  <b> ${p.price} </b>  </p>
                                    <button className='btn  col-md-6'>+</button>
                                </span>
                            </div>
                        </div>
                    </div>;
                }

                return null; // Added to handle the case where neither condition matches
            })}
        </div>
    );
}
