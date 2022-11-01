import React from 'react'
import { NavLink } from 'react-router-dom'
import IconSvg from '../Elements/svg'


const Navbar = () => {


   return (

      <nav className="nav">
         <ul>

            <li className='nav__item'>
               <NavLink
                  to="/dashboard"
                  className="nav__link text-500"
               >
                  <IconSvg name="dashboard" class="nav__icon" />
                  Dashboard
               </NavLink>
            </li>

            <li className='nav__item'>
               <NavLink
                  to="/product"
                  className="nav__link text-500"
               >
                  <IconSvg name="product" class="nav__icon" />
                  Product
                  <IconSvg name="arrow" class="nav__arrow" />
               </NavLink>
            </li>


            <li className='nav__item'>
               <NavLink
                  to="/customers"
                  className="nav__link text-500"
               >
                  <IconSvg name="customers" class="nav__icon" />
                  Customers
                  <IconSvg name="arrow" class="nav__arrow" />
               </NavLink>
            </li>

            <li className='nav__item'>
               <NavLink
                  to="/income"
                  className="nav__link text-500"
               >
                  <IconSvg name="income" class="nav__icon" />
                  Income
                  <IconSvg name="arrow" class="nav__arrow" />
               </NavLink>
            </li>

            <li className='nav__item'>
               <NavLink
                  to="/promote"
                  className="nav__link text-500"
               >
                  <IconSvg name="promote" class="nav__icon" />
                  Promote
                  <IconSvg name="arrow" class="nav__arrow" />
               </NavLink>
            </li>

            <li className='nav__item'>
               <NavLink
                  to="/help"
                  className="nav__link text-500"
               >
                  <IconSvg name="help" class="nav__icon" />
                  Help
                  <IconSvg name="arrow" class="nav__arrow" />
               </NavLink>
            </li>

         </ul>
      </nav>

   )
}

export default Navbar
