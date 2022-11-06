import React, { useState, useEffect, useRef } from 'react'
import Logo from '../../assets/images/logo.png'
import { changeState } from '../../App'
//componnents
import Burger from '../Burger/_burger'
import Navbar from '../Navbar/_navbar'
import User from '../User/_user'


const Header = () => {

  const [burgerIsOpen, setBurgerStatus] = useState(false)
  const headerRef = useRef()

  useEffect(() => {
    changeState(setBurgerStatus, 'header')
  }, [headerRef])

  document.addEventListener('touchmove', (event) => { });

  window.addEventListener('mouseup', (e) => {
  

  })

  useEffect(() => {

    document.addEventListener('mousedown', (e) => {
      e.stopPropagation();
      if (!headerRef.current.contains(e.target)) {
        changeState(setBurgerStatus, 'header')
      }
    })

  }, [])

  document.addEventListener("touchmove", (e) => {
    if (window.innerWidth <= 768) {
      headerRef.current.className = "header header-mob header_active-touch"
      setBurgerStatus(false)
    }
  });



  return (
    <header ref={headerRef} className={`header ${burgerIsOpen ? '' : 'header_active'}`}>
      <div className="header__element">
        <Burger
          setBurgerStatus={setBurgerStatus}
          burgerIsOpen={burgerIsOpen}
        />
        <a className={`header__link-logo logo `}>
          <img src={Logo} alt="logo" />
        </a>
      </div>
      <Navbar burgerIsOpen={burgerIsOpen} />

      <User  burgerIsOpen={burgerIsOpen} />
    </header>
  )
}

export default Header
