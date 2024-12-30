import mongoose from "mongoose";
const orderSchema = new mongoose.Schema({
    order_id: { type: String, required: true },
    amount: { type: Number, required: true },
    currency: { type: String, required: true },
    receipt: { type: String, required: true },
    name: { type: String },
    method: { type: String },
    vpa: { type: String },
    status: { type: String },
    payment_id: { type: String },
    createdAt: { type: Date, default: Date.now },
    email: { type: String }
});

const Order = mongoose.model('Order', orderSchema);
export default Order;
