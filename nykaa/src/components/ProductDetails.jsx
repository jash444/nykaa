import React, { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  selectedProduct,
  removeSelectedProduct,addCart} from "../redux/action/productActions";
const ProductDetails = () => {
  const { productId } = useParams();
  let product = useSelector((state) => state.product);
  const {id, image, title, price, category, description } = product;
  const dispatch = useDispatch();
  console.log(productId,id)
  const fetchProductDetail = async (productId) => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .catch((err) => {
        console.log("Err: ", err);
      });
    dispatch(selectedProduct(response.data));
  };

  useEffect(() => {
    if (productId && productId !== "") fetchProductDetail(productId);
    return () => {
      dispatch(removeSelectedProduct(productId));
    };
  }, [productId]);
  const handelcart=(id)=>{
    dispatch(addCart(id))
     
  }
  return (
    <div className="ui grid container">
      {Object.keys(product).length === 0 ? (
        <div>...Loading</div>
      ) : (
        <div >
          <div>
           
            <div >
              <div style={{margin:"200px"}}>
                <img style={{width:"200px",float:"left"}} src={image} />
              </div>
              <div style={{margin:"200px" ,textAlign:"center"}}>
                <h1 >{title}</h1>
                <h2>
                  <a>${price}</a>
                </h2>
                <h3 >{category}</h3>
                <p>{description}</p>
                <div  >
                  <div >
                    <i ></i>
                  </div>
                  <div style={{margin:"100px" ,textAlign:"center"}}><button onClick={()=>{handelcart(id)}}>Add to Cart</button></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;