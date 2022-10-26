import React from 'react'
import IconSvg from '../../elements/svg'

const Navbar = (props) => {
   return (
      <nav className="nav">
         <ul>
            <li data-tooltip="Dashboard" className={props.isOpen ? '' : 'nav__tooltip'}>
               <a href="#" className="nav__link text-500">
                  <span className="nav__icon">
                     <IconSvg name="dashboard" />
                  </span>
                  <span className={`nav__text ${props.isOpen ? '' : 'nav__text_hidden'}`}>Dashboard</span>
               </a>
            </li>

            <li data-tooltip="Product" className={props.isOpen ? '' : 'nav__tooltip'}>
               <a href="#" className="nav__link text-500">
                  <span className="nav__icon">
                     <IconSvg name="product" />
                  </span>
                  <span className={`nav__text ${props.isOpen ? '' : 'nav__text_hidden'}`}>Product</span>
                  <span className={`nav__arrow ${props.isOpen ? '' : 'nav__arrow_hidden'}`}>
                     <IconSvg name="arrow" />
                  </span>
               </a>
            </li>

            <li data-tooltip="Customers" className={props.isOpen ? '' : 'nav__tooltip'}>
               <a href="#" className="nav__link nav__link_active text-500">
                  <span className="nav__icon">
                     <IconSvg name="customers" />
                  </span>
                  <span className={`nav__text ${props.isOpen ? '' : 'nav__text_hidden'}`}>Customers</span>
                  <span className={`nav__arrow ${props.isOpen ? '' : 'nav__arrow_hidden'}`}>
                     <IconSvg name="arrow" />
                  </span>
               </a>
            </li>


            <li data-tooltip="Income" className={props.isOpen ? '' : 'nav__tooltip'}>
               <a href="#" className="nav__link text-500">
                  <span className="nav__icon">
                     <IconSvg name="income" />
                  </span>
                  <span className={`nav__text ${props.isOpen ? '' : 'nav__text_hidden'}`}>Income</span>

                  <span className={`nav__arrow ${props.isOpen ? '' : 'nav__arrow_hidden'}`}>
                     <IconSvg name="arrow" />
                  </span>
               </a>
            </li>

            <li data-tooltip="Promote" className={props.isOpen ? '' : 'nav__tooltip'}>
               <a href="#" className="nav__link text-500">
                  <span className="nav__icon">
                     <IconSvg name="promote" />
                  </span>
                  <span className={`nav__text ${props.isOpen ? '' : 'nav__text_hidden'}`}>Promote</span>
                  <span className={`nav__arrow ${props.isOpen ? '' : 'nav__arrow_hidden'}`}>
                     <IconSvg name="arrow" />
                  </span>
               </a>
            </li>

            <li data-tooltip="Help" className={props.isOpen ? '' : 'nav__tooltip'}>
               <a href="#" className="nav__link text-500">
                  <span className="nav__icon">
                     <IconSvg name="help" />
                  </span>

                  <span className={`nav__text ${props.isOpen ? '' : 'nav__text_hidden'}`}>Help </span>

                  <span className={`nav__arrow ${props.isOpen ? '' : 'nav__arrow_hidden'}`}>
                     <IconSvg name="arrow" />
                  </span>
               </a>
            </li>
         </ul>
      </nav>
   )
}

export default Navbar
