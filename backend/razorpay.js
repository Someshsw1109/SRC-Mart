const Razorpay = require('razorpay');

const razorpayInstance = new Razorpay({
  key_id: 'rzp_live_hh9FzKxfOAinEy', 
  key_secret: '2Q2SAcKas2n38HvAHReePvE4' 
});

module.exports = razorpayInstance;
