import React, { useState, useEffect } from 'react'
import Logo from '../../assets/images/logo.png'
import { changeState } from '../../App'
//componnents
import Burger from '../Burger/_burger'
import Navbar from '../Navbar/_navbar'
import User from '../User/_user'


const Header = () => {

  const [burgerIsOpen, setBurgerStatus] = useState(false)
  const [isHeadCap, setIsHeadCap] = useState(false)

  // useEffect(()=>{
  //   changeState(setBurgerStatus,'header')
  // },[])

  return (
    <header className={`header ${burgerIsOpen ? '' : 'header_active'}`}>
      <div className="header__element">
        <Burger
          setBurgerStatus={setBurgerStatus}
          burgerIsOpen={burgerIsOpen}
        />
        <a className={`header__link-logo logo `}>
          <img src={Logo} alt="logo" />
        </a>
      </div>
      <Navbar burgerIsOpen={burgerIsOpen}/>

      {/* <User/> */}
    </header>
  )
}

export default Header
