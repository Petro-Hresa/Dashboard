import React from 'react'

const Pagination = () => {
   return (
      <div className="pagination">
         <button>&#60;</button>
         <ul className="pagination__list">
            <li className="pagination__item pagination__item_active">1</li>
            <li className="pagination__item">2</li>
            <li className="pagination__item">3</li>
            <li className="pagination__item">4</li>
            <li className="points">...</li>
            <li className="pagination__item">40</li>
         </ul>
         <button>&#62;</button>
      </div>
   )
}

export default Pagination
