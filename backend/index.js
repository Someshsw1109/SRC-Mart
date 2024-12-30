import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Order from './Schema/Order.js';
import Razorpay from 'razorpay';
import cors from 'cors';
import { validateWebhookSignature } from 'razorpay/dist/utils/razorpay-utils.js';
dotenv.config();

const MONGO = process.env.MONGO_URI;

mongoose.connect(MONGO, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('hmlo hmlo from the db');
    })
    .catch((error) => {
        console.error(error);
    });

const app = express();
app.use(express.json());
app.use(cors());


var razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET,

});

app.post("/create-order", async (req, res) => {
    try {

        const { amount, currency, receipt, order_id, } = req.body;
        // console.log(req.body);
        const options = {
            amount: amount * 100,
            currency,
            receipt,
            order_id,
        };
        const order = await razorpay.orders.create(options);
        console.log(order);
        const newOrder = new Order({
            amount: order.amount,
            currency: order.currency,
            receipt: order.receipt,
            order_id: order.id,
        });
        await newOrder.save();
        // console.log(newOrder, "new order from server.js")

        res.json({
            success: true,
            order,
            message: "order created",
        });
        // console.log(order.id + "order id from server.js")
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "error creating order",
            error: error.message,
        });
    }
});
app.post("/verify-payment", async (req, res) => {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;
    const secret = razorpay.key_secret;
    console.log(req.body, "req.body from the verify payment");
    const body = razorpay_order_id + "|" + razorpay_payment_id;
    try {
        const isValidSignature = validateWebhookSignature(body, razorpay_signature, secret);
        const order = await Order.findOne({ order_id: razorpay_order_id });
        console.log(order, "order from the verify");
        if (isValidSignature && order) {
            order.status = "paid";
            order.payment_id = razorpay_payment_id;
            await order.save();
        }
    } catch (error) {
        console.log(error.message);
        res.status(500).json({
            success: false,
            message: "error"
        })
    }
});
app.get("/payment-success", (req, res) => {
    console.log("payment succes get called");
    res.sendFile(path.join(__dirname, "payment.html"));
});
app.get("/fetch-payment-details", async (req, res) => {
    const { order_id } = req.query;
    if (!order_id) {
        return res.status(400).json({ error: "Order ID is required" });
    }
    try {
        const order = await Order.findOne({ order_id });
        if (!order) {
            return res.status(404).json({ error: "Order not found" });
        }

        const paymentDetails = {
            order_id: order.order_id,
            amount: order.amount,
            currency: order.currency,
            payment_id: order.payment_id,
            status: order.status,
        };

        res.json(paymentDetails);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error fetching payment details" });
    }
});

const port = 5000
app.listen(port, () => {
    console.log(`server is listening in the port ${port}`);
})