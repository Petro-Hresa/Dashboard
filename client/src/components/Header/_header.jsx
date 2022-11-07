import React, { useState, useEffect, useRef } from 'react'
import Logo from '../../assets/images/logo.png'
import { observer } from '../../App'
//componnents
import Burger from '../Burger/_burger'
import Navbar from '../Navbar/_navbar'
import User from '../User/_user'


const Header = () => {

  const [burgerIsOpen, setBurgerStatus] = useState(true)
  const headerRef = useRef()
  const headerElementRef = useRef()

  useEffect(() => {
    // changeState(setBurgerStatus, 'header')


  //  const observer = new ResizeObserver((entrise) => {
  //     let isMedium = entrise[0].contentRect.width >= 768;

  //     // isMedium && console.log('burgerIsOpen',burgerIsOpen);
  //     // if(burgerIsOpen == false && isMedium) setBurgerStatus(!burgerIsOpen)
      
  //   })

    // observer.observe(document.body)
    // console.log(document.body);

    document.addEventListener('mousedown', (e) => {
      e.stopPropagation();
      if (!headerRef.current.contains(e.target)) {
        setBurgerStatus(true)
      }
    })

    document.addEventListener("touchmove", (e) => {
      if (window.innerWidth <= 768) {
        headerRef.current.className = "header header-mob header_active-touch"
        setBurgerStatus(false)
      }
    });


  }, [headerRef, burgerIsOpen])




  return (
    <header ref={headerRef} className={`header preload-transition ${burgerIsOpen ? '' : 'header_active'}`}>

    <div ref={headerElementRef} className={`header__element ${burgerIsOpen ? "shadow-block": ""}`}>
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
