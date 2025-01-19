import React from 'react'
import { LOGO_URL } from '../../Utils/constants'
const Logo = () => {
  return (
    <div className='logo'>
        <img src={LOGO_URL} alt="logo"></img>
    </div>
  )
}

export default Logo