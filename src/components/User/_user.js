import React from 'react'
import UserImg from '../../assets/images/user.jpg'
const User = (props) => {
   return (
      <div className="user">
         <div className={`user__icon ${props.isOpen ? '' : 'user__icon_center'} `}>
            <img className="user__img" src={UserImg} alt="Evano" />
         </div>

         <div className={`user__text ${props.isOpen ? '' : 'nav__text_hidden'} `}>
            <div className="user__name text-500">Evano</div>
            <div className="user__position">Project Manager</div>
         </div>
      </div>
   )
}

export default User
