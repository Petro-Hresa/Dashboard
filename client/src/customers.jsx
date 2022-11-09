import React, { useEffect, useState } from 'react'
// import { customers } from './elements/customers.members';
//componnents
import Search from './components/Search/_search';
import Pagination from './components/Pagination/_pagination';
import axios from 'axios';

const CustomersSE = () => {

   const [arrCustomers, setArrCustomers] = useState([])
   const [currentPage, setCurrentPage] = useState(1)
   const [quantityCustomers, setQuantityCustomers] = useState(5)

   const indexLastCustomer = currentPage * quantityCustomers
   const indexFirstCustomer = indexLastCustomer - quantityCustomers
   const currentCustomers =  arrCustomers.slice(indexFirstCustomer, indexLastCustomer)

   const customersLangth = arrCustomers.length

   useEffect(() => {
      axios.get('http://localhost:3001/customers').then((req, res) => {
         setArrCustomers(req.data);
         console.log(req);
      })
   }, [])

   const updataStatus = (id, status) => {
      axios.put('http://localhost:3001/customers/status', { id, status })
         .then((res) => {
            setArrCustomers(
               arrCustomers.map(customer => {
                  return customer.id == id ?
                     {
                        ...customer,
                        status
                     } 
                  : customer
               })
            );
         })

   }

   return <CustomersUI
      arrCustomers={customersLangth}
      updataStatus={updataStatus}
      quantityCustomers={quantityCustomers}
      currentCustomers={currentCustomers}
   />

}

export default CustomersSE


const CustomersUI = (props) => {
   console.log(props.arrCustomers); 
   return (
      <section className="customers">


         
         <header className="customers__head">
            <div className="gtoup-title">
               <h1 className='gtoup-title__title'>All Customers</h1>
               <h5 className="gtoup-title__subtitle text-400">Active Members</h5>
            </div>
            <Search />
         </header>

            <table className='table'>
               <thead className='table__thead'>
                  <tr>
                    <th className='text-500'>Customer Name</th>
                    <th className='text-500'>Company</th>
                    <th className='text-500'>Phone Number</th>
                    <th className='text-500'>Email</th>
                    <th className='text-500'>Country</th>
                    <th className='text-500'>Status</th>
                  </tr>
               </thead>
               <tbody className='table__tbody'>
                  {
                     props.currentCustomers.map((costomer) => {
                        return <tr key={costomer.id} className="table__row text-500">
                           <td data-label="Customer Name">{costomer.name}</td>
                           <td data-label="Company">{costomer.company}</td>
                           <td data-label="Phone Number">{costomer.phone}</td>
                           <td data-label="Email">{costomer.email}</td>
                           <td data-label="Country">{costomer.country}</td>
                           <td data-label="Status">
                              <button
                                 className={`text-500 ${costomer.status ? "active" : "inactive"}`}
                                 onClick={(e) => props.updataStatus(costomer.id, !costomer.status)}
                              >
                                 {costomer.status ? "Active" : "Inactive"}
                              </button>
                           </td>
                          
                        </tr>
                     })
                  }
               </tbody>
            </table>

            <footer className="more">
               <div className="more__show-data text-500">Showing data 1 to 8 of  256K entries</div>
               <Pagination 
                  quantityCustomers={props.quantityCustomers}
                  // totalCustomers = {props.arrCustomers} 
               />
            </footer>

      </section>
   )
}


