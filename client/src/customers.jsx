import React, {useEffect, useState} from 'react'
// import { customers } from './elements/customers.members';
//componnents
import Search from './components/Search/_search';
import Pagination from './components/Pagination/_pagination';
import axios from 'axios';


const Customers = () => {
   const [arrCustomers , setArrCustomers] = useState([])
   const arrNameCols = ['Customer Name', 'Company', 'Phone Number', 'Email', 'Country', 'Status']

   useEffect(()=>{
      axios.get('http://localhost:3001/customers').then((req, res)=>{
         setArrCustomers(req.data);
      })
   },[])


   const postStatus = async (e, id, status) =>{
      e.preventDefault()
      await axios.post('http://localhost:3001/customers/status', {id, status})
   }




   return (
      <section className="customers">
         <header className="customers__head">
            <div className="title">
               <h1 className='title__h1'>All Customers</h1>
               <div className="title__status text-400">Active Members</div>
            </div>
            <Search />
         </header>

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
                     arrCustomers.map((costomer) => {
                        return <tr key={costomer.id} className="table__row text-500">
                           <td data-label="Customer Name">{costomer.name}</td>
                           <td data-label="Company">{costomer.company}</td>
                           <td data-label="Phone Number">{costomer.phone}</td>
                           <td data-label="Email">{costomer.email}</td>
                           <td data-label="Country">{costomer.country}</td>
                           <td data-label="Status">
                              <button 
                                 className={`text-500 ${costomer.status ? "active" : "inactive"}`}
                                 onClick={(e)=>postStatus(e, costomer.id, !costomer.status)}
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
               <Pagination />
            </footer>
         </div>
      </section>
   )
}

export default Customers
