import React from 'react'
import { NavLink, useParams } from 'react-router-dom'
import IconSvg from '../Elements/svg'
import User from '../User/_user'


const Navbar = (props) => {

   const linkAndPoint = useParams()
   console.log(linkAndPoint);
   return (
      <div className="navbar">

         <nav className="nav">
            <ul>

               <li className='nav__item'>
                
                  <NavLink to="/dashboard"  className="nav__link text-500">
                     <IconSvg name="dashboard" class="nav__icon"/>
                     Dashboard
                  </NavLink>
               </li>

               <li className='nav__item'>
                  <NavLink exact={true} to="/customers" className="nav__link text-500">
                     <IconSvg name="customers" class="nav__icon"/>
                     Customers
                  </NavLink>
               </li>
       
            </ul>
         </nav>

         <User/>
      </div>
   )
}

export default Navbar
