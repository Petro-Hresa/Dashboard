import React from 'react'
import { NavLink } from 'react-router-dom'
import IconSvg from '../Elements/svg'


const Navbar = (props) => {


   return (

      <nav className="nav">
         <ul>

            <li className='nav__item'>
               <NavLink
                  to="/dashboard"
                  className="nav__link text-500"
               >
                  <span className="nav__icon">
                     <IconSvg name="dashboard" />
                  </span>
                  Dashboard
               </NavLink>
            </li>

            <li className='nav__item'>
               <NavLink
                  to="/product"
                  className="nav__link text-500"
               >
                  <span className="nav__icon">
                  <IconSvg name="product"/>
                  </span>
                  Product
                  <IconSvg name="arrow" className={`nav__arrow ${props.burgerIsOpen ? '' : 'nav__arrow_hide'}`} />
               </NavLink>
            </li>


            <li className='nav__item'>
               <NavLink
                  to="/customers"
                  className="nav__link text-500"
               >
                  <span className="nav__icon">
                  <IconSvg name="customers"/>
                  </span>
                  Customers
                  <IconSvg name="arrow" className={`nav__arrow ${props.burgerIsOpen ? '' : 'nav__arrow_hide'}`} />
               </NavLink>
            </li>

            <li className='nav__item'>
               <NavLink
                  to="/income"
                  className="nav__link text-500"
               >
                  <span className="nav__icon"> 
                  <IconSvg name="income" />
                  </span>
                  Income
                  <IconSvg name="arrow" className={`nav__arrow ${props.burgerIsOpen ? '' : 'nav__arrow_hide'}`} />
               </NavLink>
            </li>

            <li className='nav__item'>
               <NavLink
                  to="/promote"
                  className="nav__link text-500"
               >
                  <span className="nav__icon">
                  <IconSvg name="promote"  />
                  </span> 
                  Promote
                  <IconSvg name="arrow" className={`nav__arrow ${props.burgerIsOpen ? '' : 'nav__arrow_hide'}`} />
               </NavLink>
            </li>

            <li className='nav__item'>
               <NavLink
                  to="/help"
                  className="nav__link text-500"
               >
                  <span className="nav__icon">
                  <IconSvg name="help"  />
                  </span>
                  Help
                  <IconSvg name="arrow" className={`nav__arrow ${props.burgerIsOpen ? '' : 'nav__arrow_hide'}`} />
               </NavLink>
            </li>

         </ul>
      </nav>

   )
}

export default Navbar
