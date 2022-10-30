import express from 'express';

const app = express()

import routerCustomers from './routes/customers.js'

app.get('/',(req, res)=>{
   res.send('<h1>Hello Hresa<h1>')
})

app.use(routerCustomers)

app.listen(3000,  ()=>{
   console.log('Server start on port 3000');
})
