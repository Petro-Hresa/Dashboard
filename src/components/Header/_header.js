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
    <div className={`header__wrap ${isOpen ? '' : 'header__wrap_convolute'} ${props.isOpenMob ? 'header__wrap_openMobBurger' : ''} `}>
      <header className={`header ${isOpen ? '' : 'header_convolute'} ${props.isOpenMob ? 'header_openMobBurger' : ''} `}>

        <div className="cap">
          <div className={`logo ${isOpen ? '' : 'logo__hidden'} `}>
            <img src={Logo} alt="logo" />
          </div>

          <div className={`burger__wrap ${isOpen ? "" : 'burger__transform'} `} onClick={() => ClickBurger()}  >
            <Burger />
          </div>
        </div>

        <Navbar isOpen={isOpen} />

        <User isOpen={isOpen} />

      </header>
    </div>
  )
}

export default Header
