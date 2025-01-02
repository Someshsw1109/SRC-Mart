// models/Order.js
//Vishal Thombare
import mongoose from 'mongoose';

const OrderSchema = new mongoose.Schema({
  order_id: {
    type: String,
    required: true,
    unique: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  currency: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    default: 'created',  
  },
  payment_id: {
    type: String,
  },
});

const Order = mongoose.model('Order', OrderSchema);

export default Order;
