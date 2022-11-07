import React from 'react'
import UserImg from '../../assets/images/user.jpg'
const User = (props) => {
   return (
      <div className={`user ${props.burgerIsOpen ? 'user_center' : ''}`}>
         <div className={`user__icon`}>
            <img className="user__img" src={UserImg} alt="Evano" />
         </div>

         <div className={`user__text ${props.burgerIsOpen ? 'user__text_hide' : ''} `}>
            <div className="user__name text-500">Evano</div>
            <div className="user__position">Project Manager</div>
         </div>
      </div>
   )
}

export default User
