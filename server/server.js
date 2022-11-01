import express from 'express';
import cors from 'cors';

const app = express()
app.use(cors()) 
import routerCustomers from './routes/customers.js'

app.use(routerCustomers)

app.listen(3001,  ()=>{
   console.log('Server start on port 3000');
})
