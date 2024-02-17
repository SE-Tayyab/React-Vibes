import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import "./component.css";


function Navbar() {
    const items = useSelector((state)=>state.cart)
    // console.log(items.length)
    return (
        <div className="Header">
            <div className='headerLogo'>TayyabSattar</div>
            <div className='headerPage'>
                <div className="nav-con">
                <Link className='navLink' to='/'>Home</Link>
                <Link className='navLink' to='/cart'>Cart</Link>
                </div>
            </div>
            <div className='cardItems'>Items in Cart: {items.length}</div>
        </div>
    );
}

export default Navbar;
