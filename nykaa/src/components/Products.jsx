import React, { useEffect, useState } from 'react'
import Nav from './Nav';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';

function Products() {
    const [data,setData]=useState([])
    const products = useSelector((state) => state.allProducts.products);
  
  return (<>
    <Nav />
 <div>{products.map((e)=>(<div className='product'> <Link to={`/products/${e.id}`}><div className='products' >{<h2>{e.title}</h2>}<img src ={e.image}/><p>{e.price}</p></div></Link></div>))}</div>
 </>  )
}

export default Products