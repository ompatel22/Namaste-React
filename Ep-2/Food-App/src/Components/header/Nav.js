import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  //console.log("Nav rendered");
  const arr=useState("Login");
  const [status,setStatus]=arr;
  return (
    <div className='nav'>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><button onClick={()=>{
                status==="Login"?setStatus("Logout"):setStatus("Login");
            }}>{status}</button></li>
        </ul>
    </div>
  )
}

export default Nav;