import React from 'react';
import { useState } from 'react';
const Nav = () => {
  //console.log("Nav rendered");
  const arr=useState("Login");
  const [status,setStatus]=arr;
  return (
    <div className='nav'>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Feedback</li>
            <li><button onClick={()=>{
                status==="Login"?setStatus("Logout"):setStatus("Login");
            }}>{status}</button></li>
        </ul>
    </div>
  )
}

export default Nav;