import React from 'react'
import { Link } from 'react-router-dom'


function Nav() {
  return (
    <div><div id="nav">
        
    <div id="top">
      <div className="beauty">Nykaa Summer Super Saver Days Are Live - Shop Now!</div>
    
      <div id="getapp">
        
      <p>Help</p>
      <i className="fa fa-question-circle-o" aria-hidden="true"></i>
      <p>Gift Card</p>
      <i className="fa fa-gift" aria-hidden="true"></i>
      <p>Store & Events</p>
      <i className="fa fa-map-marker" aria-hidden="true"></i>
       <p> Get App</p>
       <i className="fa fa-mobile" aria-hidden="true"></i>
      </div>
      
    </div>

    <div id="navbar">
      <div className="container">
          <div className="logo">
              <a href="index.html"><img src="data:image/png;base64,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"/></a>
                  
          </div>
          

          <div className="twoItem margin">
          <Link to={`/products`}> <p id="hover">CATEGORIES</p></Link>
          </div>
          
          <div className="twoItem margin">
              <p id="hover">BRANDS</p>
              
          </div>
          <div className="twoItem margin">
              <p id="hover">NYKAA FASHION</p>
              
          </div>
          <div className="twoItem margin">
              <p id="hover"></p>
              
          </div>
          <div className="twoItem margin">
              <p id="hover">NYKAA NETWORK</p>
              
          </div>
         
          <form action="">
              <input type="text" id="search" placeholder="Search for products, brands etc ..." />
          </form>

          <div className="threeItem margin">
              <div className="userBox">
                  <i className="fa fa-user" aria-hidden="true" id="fafa"></i>
                  <p id="hover">ACCOUNT</p>
                  
              </div>
              <div className="userLogin">
                  <button id="loginBtn"><a href="login.html">Login</a></button>
                  <button id="signUp"><a id="a" href="signup.html">New User?/ Sign Up</a></button>
              </div>
          </div>

          <div id="cartClick">
              <img src="https://cdn-icons-png.flaticon.com/512/253/253298.png" alt="" id="cartItem" />
          </div>
      </div>
    
      </div>
     
  </div>
</div>
  )
}

export default Nav