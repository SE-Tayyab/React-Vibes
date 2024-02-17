import React from 'react';
import { nanoid } from '@reduxjs/toolkit';
import {useDispatch} from 'react-redux'
import { useSelector } from 'react-redux';
import { remove } from '../store/cartSlice';
import "./cart.css"

function Cart() {
  
  const products = useSelector((state) => state.cart);
  
  const dispatch = useDispatch();
  // const dispatch = useDispatch();
  // console.log("tayayaya",products)

  const handleRemove = (product) => {
    dispatch(remove(product))
  }

  return (
    <div className='container'>
      <h3>Cart</h3>
      <div className='cartWrapper'>
        {products.map((product) => (
          <div className='cartCard' key={product.id}>
            <div className="cart-img">
            <img src={product.image} alt={product.title} />
            </div>
            <div className="Cart-content">
            <h5>{product.title}</h5>
            <h5>${product.price}</h5>
            <button className="btn btn-remove" onClick={()=>handleRemove(product.id)}>Remove</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cart;
