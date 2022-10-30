import mysql from 'mysql2';

const connection = mysql.createPool({
   host     : 'localhost',
   user     : 'root',
   password : '',
   database : 'dashboard'
})

export const getAllCustomers = (req, res) =>{
   connection.query(
      'SELECT * FROM `customers` WHERE 1',
      function(err, results, fields) {
        res.send(results); // results contains rows returned by server
      }
    );
}