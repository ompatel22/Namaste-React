import React from 'react'
import Logo from './header/Logo'
import Nav from './header/Nav'
const Header = () => {
  //console.log("Header rendered");
  return (
    <div className='header'>
        <Logo/>
        <Nav/>
    </div>
  )
}

export default Header