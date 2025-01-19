import React from 'react'
import Logo from './header/Logo'
import Nav from './header/Nav'
const Header = () => {
  return (
    <div className='header'>
        <Logo/>
        <Nav/>
    </div>
  )
}

export default Header