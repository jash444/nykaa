import React from 'react'
import { useSelector } from 'react-redux';

function Cart() {
    let cart = useSelector((state) => state.add);
  return (
    <div></div>
  )
}

export default Cart