import React from 'react'
import { NavLink } from 'react-router-dom'
import IconSvg from '../Elements/svg'


const Navbar = (props) => {


   return (

      <nav className="nav">
         <ul>

            <li className={`nav__item ${props.burgerIsOpen ? 'nav__tooltip' :'' }`} data-tooltip="Dashboard">
               <NavLink
                  to="/dashboard"
                  className="nav__link text-500"
               >
                  <span className="nav__icon">
                     <IconSvg name="dashboard" />
                  </span>
                  <span className='nav__text'> Dashboard </span>
               </NavLink>
            </li>

            <li className={`nav__item ${props.burgerIsOpen ? 'nav__tooltip' :'' }`} data-tooltip="Product">
               <NavLink
                  to="/product"
                  className="nav__link text-500"
               >
                  <span className="nav__icon">
                     <IconSvg name="product" />
                  </span>

                  <span className='nav__text'> Product </span>

                  <IconSvg name="arrow" className={`nav__arrow ${props.burgerIsOpen ? 'nav__arrow_hide' : ''}`} />
               </NavLink>
            </li>


            <li className={`nav__item ${props.burgerIsOpen ? 'nav__tooltip' :'' }`} data-tooltip="Customers">
               <NavLink
                  to="/customers"
                  className="nav__link text-500"
               >
                  <span className="nav__icon">
                     <IconSvg name="customers" />
                  </span>
                  <span className='nav__text'> Customers </span>
                  <IconSvg name="arrow" className={`nav__arrow ${props.burgerIsOpen ? 'nav__arrow_hide' : ''}`} />
               </NavLink>
            </li>

            <li className={`nav__item ${props.burgerIsOpen ? 'nav__tooltip' :'' }`} data-tooltip="Income">
               <NavLink
                  to="/income"
                  className="nav__link text-500"
               >
                  <span className="nav__icon">
                     <IconSvg name="income" />
                  </span>

                  <span className='nav__text'> Income </span>
                  <IconSvg name="arrow" className={`nav__arrow ${props.burgerIsOpen ? 'nav__arrow_hide' : ''}`} />
               </NavLink>
            </li>

            <li className={`nav__item ${props.burgerIsOpen ? 'nav__tooltip' :'' }`} data-tooltip="Promote">
               <NavLink
                  to="/promote"
                  className="nav__link text-500"
               >
                  <span className="nav__icon">
                     <IconSvg name="promote" />
                  </span>
                  <span className='nav__text'> Promote </span>
                  <IconSvg name="arrow" className={`nav__arrow ${props.burgerIsOpen ? 'nav__arrow_hide' : ''}`} />
               </NavLink>
            </li>

            <li className={`nav__item ${props.burgerIsOpen ? 'nav__tooltip' :'' }`} data-tooltip="Help">

               <NavLink
                  to="/help"
                  className="nav__link text-500"
               >
                  <span className="nav__icon">
                     <IconSvg name="help" />
                  </span>

                  <span className='nav__text'> Help </span>
                  <IconSvg name="arrow" className={`nav__arrow ${props.burgerIsOpen ? 'nav__arrow_hide' : ''}`} />
               </NavLink>
            </li>

         </ul>
      </nav>

   )
}

export default Navbar
