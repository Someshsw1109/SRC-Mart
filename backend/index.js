import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv'
dotenv.config();

const MONGO=process.env.MONGO_URI;

mongoose.connect(MONGO, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('hmlo hmlo from the db');
  })
  .catch((error) => {
    console.error(error);
  });

const app = express();




app.post("/create-order", async (req, res) => {

    try {
        const { amount, currency, receipt, order_id, email } = req.body;
        const options = {
            amount: amount * 100,
            currency,
            receipt,
            order_id,
        };
        const order = await razorpay.orders.create(options);
        const newOrder = new Order({
            amount: order.amount,
            currency: order.currency,
            receipt: order.receipt,
            order_id: order.id,
            email: email
        });
        await newOrder.save();
        console.log(newOrder, "new order from server.js")

        res.json({
            success: true,
            order,
            message: "Order created and saved successfully!",
        });
        console.log(order.id + "order id from server.js")
    } catch (error) {
        console.error("Error creating order:", error);
        res.status(500).json({
            success: false,
            message: "Error creating order",
            error: error.message,
        });
    }
});
app.listen(3000, () => {
    console.log(`server is listening in the port ${3000}`);
})