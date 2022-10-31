import React, { useState, useEffect } from 'react'
import { debounce } from '../../App'

//componnents
import Logo from '../../assets/images/logo.png'
import Burger from '../Burger/_burger'
import Navbar from '../Navbar/_navbar'
import User from '../User/_user'

const Header = (props) => {

  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {

    window.addEventListener('resize', debounce(() => {

      if (window.innerWidth < 768) {
        setIsOpen(false)
      }
    }))

  }, [isOpen])

  function ClickBurger() {
    if (window.innerWidth > 768) {
      setIsOpen(!isOpen)
    }
  }

  return (
    <header className="header">
        <div className="header__start">
          <a className="logo">
              <img src={Logo} alt="logo" />
          </a>

          <Burger />
        </div>
    
        <div className="greeting">Hello Evano &#128075;, </div>
    </header>
  )
}

export default Header
