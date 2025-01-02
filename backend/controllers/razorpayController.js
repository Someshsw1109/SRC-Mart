
//Vishal Thombare
import Order from '../models/Order.js'; 
import Razorpay from 'razorpay';
import crypto from 'crypto';

// Initialize Razorpay instance with API key and secret
const instance = new Razorpay({
  key_id: process.env.RAZORPAY_API_KEY,
  key_secret: process.env.RAZORPAY_API_SECRET,
  
});

export const createOrder = async (req, res) => {
  try {
    const { amount } = req.body;
    console.log("vjhvjdhkfhjfh");
    const options = {
      amount: amount, 
      currency: "INR",
      receipt: "order_rcptid_11", 
      payment_capture: 1, 
    };

    const razorpay = new Razorpay({
      key_id: process.env.RAZORPAY_API_KEY,
      key_secret: process.env.RAZORPAY_API_SECRET,
    });

    const order = await razorpay.orders.create(options);
    console.log("Order created:", order);
    res.json({
      success: true,
      order_id: order.id,
      key: process.env.RAZORPAY_API_KEY, 
    });

    
  } catch (error) {
    console.error("Error creating Razorpay order:", error);
    res.status(500).json({ success: false, message: "Failed to create order" });
  }
};

export const verifyPayment = async (req, res) => {
  const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;

  try {
    const shasum = crypto.createHmac('sha256', process.env.RAZORPAY_API_SECRET);
    shasum.update(`${razorpay_order_id}|${razorpay_payment_id}`);
    const digest = shasum.digest('hex');

    if (digest === razorpay_signature) {
      const order = await Order.findOneAndUpdate(
        { order_id: razorpay_order_id },
        { status: "paid", payment_id: razorpay_payment_id },
        { new: true }
      );

      res.json({ success: true, message: "Payment verified successfully" });
    } else {
      res.status(400).json({ success: false, message: "Payment verification failed" });
    }
  } catch (error) {
    console.error("Error verifying payment:", error);
    res.status(500).json({ success: false, message: "Error verifying payment" });
  }
};
