import React, { useState, useEffect } from 'react'
import Logo from '../../assets/images/logo.png'
//componnents
import Burger from '../Burger/_burger'
import Navbar from '../Navbar/_navbar'
import User from '../User/_user'


const Header = () => {

  const [isOpen, setIsOpen] = useState(false)
  const [isHeadCap, setIsHeadCap] = useState(false)

  return (
    <header className="header">
      <div className="header__element">
        <Burger />
        <a className="logo">
          <img src={Logo} alt="logo" />
        </a>
      </div>
      <Navbar/>

      <User/>
    </header>
  )
}

export default Header
