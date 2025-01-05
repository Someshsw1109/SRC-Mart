
//Vishal Thombare
export const initializePayment = async (totalAmountInPaise) => {
  try {
    const response = await fetch('http://localhost:5000/create-order', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ amount: totalAmountInPaise }),
    });

    const orderData = await response.json();
    console.log(orderData);
    if (orderData.success) {
      const { order_id, key } = orderData;

      const options = {
        key: key, 
        amount: 10, 
        currency: "INR",
        name: "Your Shop Name",
        description: "Order Payment",
        order_id:"bbb",
        handler: async function (response) {
          const paymentData = {
            order_id: order_id,
            payment_id: response.razorpay_payment_id,
            signature: response.razorpay_signature,
          };

          await verifyPayment(paymentData);
        },
        prefill: {
          name: "User Name",
          email: "user@example.com",
          contact: "1234567890",
        },
        theme: {
          color: "#3399cc",
        },
      };

      const razorpay = new Razorpay(options);
      razorpay.open();
    } else {
      throw new Error("Failed to initialize payment");
    }
  } catch (error) {
    console.error("Error initializing payment:", error);
  }
};