//Vishal Thombare
import express from 'express';
import { createOrder, verifyPayment } from '../controllers/razorpayController.js';

const router = express.Router();
console.log("vjhvjdhkfhjfh");
router.post('/create-order', createOrder);
router.post('/verify-payment', verifyPayment);

export { router as razorpayRoutes };
