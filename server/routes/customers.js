import { Router } from "express";
const router = Router();

import { getAllCustomers } from '../controllers/customers.js'

router.get('/api/customers', getAllCustomers)

export default router;