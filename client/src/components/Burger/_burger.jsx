import React from 'react';

const Burger = (props) => {
   
   return (

      <div className={`burger ${props.burgerIsOpen ? '':'burger_active'}`} onClick={()=> props.setBurgerStatus(!props.burgerIsOpen)}>

         <div className='burger__line'></div>
         <div className='burger__line'></div>
         <div className='burger__line'></div>

      </div>

   );

}

export default Burger