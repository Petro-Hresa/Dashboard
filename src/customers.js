import React from 'react'
import { customers } from './elements/customers.members';
//componnents
import Search from './components/Search/_search';
import Pagination from './components/Pagination/_pagination';


const Customers = () => {

   const arrNameCols = ['Customer Name', 'Company', 'Phone Number', 'Email', 'Country', 'Status']

   return (
      <section className="customers">
         <div className="customers__head">
            <div className="title">
               <h2 className='title__h2'>All Customers</h2>
               <div className="title__status text-400">Active Members</div>
            </div>
            <Search />
         </div>

         <div className="cuctomers-table__wrap">
            <table className='table'>
               <thead className='table__thead'>
                  <tr>
                     {
                        arrNameCols.map((colName, i) => {
                           return <th key={i} className='text-500'>{colName}</th>
                        })
                     }

                  </tr>
               </thead>
               <tbody>
                  {
                     customers.map((costomer) => {
                        return <tr key={costomer.id} className="table__row text-500">
                           <td data-label="Customer Name">{costomer.name}</td>
                           <td data-label="Company">{costomer.company}</td>
                           <td data-label="Phone Number">{costomer.phone}</td>
                           <td data-label="Email">{costomer.email}</td>
                           <td data-label="Country">{costomer.country}</td>
                           <td data-label="Status"><button className={`text-500 ${costomer.status ? "active" : "inactive"}`}>{costomer.status ? "Active" : "Inactive"}</button></td>
                        </tr>
                     })
                  }
               </tbody>
            </table>

            <div className="more">
               <div className="more__show-data text-500">Showing data 1 to 8 of  256K entries</div>
               <Pagination />
            </div>
         </div>
      </section>
   )
}

export default Customers
