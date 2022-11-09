import React from 'react'

const Pagination = (props) => {

   let customersNumbers = []

   for(let i = 1 ; i <= Math.ceil(props.quantityCustomers / 8); i++ ){
      customersNumbers.push(i)
   }
   return (
      <div className="pagination">
         <button>&#60;</button>
         <ul className="pagination__list">
            {
              customersNumbers.map(number =>{
               <li key={number} className="pagination__item">
                  {/* <a href="">{number}</a>    */}
                  {number}
               </li> 
              })

            }

         </ul>
         <button>&#62;</button>
      </div>
   )
}

export default Pagination


            {/* <li className="pagination__item pagination__item_active">1</li>
            <li className="pagination__item">2</li>
            <li className="pagination__item">3</li>
            <li className="pagination__item">4</li>
            <li className="points">...</li>
            <li className="pagination__item">40</li> */}