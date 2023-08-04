const express = require("express");
const router = express.Router();
const { v4: uuidv4 } = require("uuid");
const stripe = require("stripe")("sk_test_51NJdmvSCPCoB7v42K839tmpbtvlEfVoofUJEp9pv3W46zYhrKX8DgFH32DTPA4DFSTtYPXinqOiAUYOCFhub0pls00Bf3bFYjD");
const Order = require("../models/orderModel.jsx");

router.post("/placeorder", async (req, res) => {
  const { token, subTotal, currentUser, cartItems } = req.body;
  
try {
    const customer = await stripe.customers.create({
      email: token.email,
      source: token.id,
    });

    const paymentIntent = await stripe.paymentIntents.create({
      amount: subTotal * 100,
      currency: "inr",
      customer: customer.id,
      receipt_email: token.email,
      payment_method_types: ["card"],
      payment_method: token.card.id,
      confirm: true,
      setup_future_usage: "off_session",
    });

    if (paymentIntent.status === "succeeded") {
      const newOrder = new Order({
        name: currentUser.name,
        email: currentUser.email,
        userid: currentUser._id,
        orderItems: cartItems,
        shippingAddress: {
          street: token.card.address_line1,
          city: token.card.address_city,
          country: token.card.address_country,
          postalCode: token.card.address_zip,
        },
        orderAmount: subTotal,
        transactionId: paymentIntent.id,
      });

      try {
        await newOrder.save();
        res.status(201).json({ message: "Order placed successfully" });
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Failed to save the order" });
      }
    } else if (paymentIntent.status === "requires_action" && paymentIntent.next_action.type === "use_stripe_sdk") {
      // The payment requires additional authentication, redirect the client to complete the payment
      res.status(200).json({
        requiresAction: true,
        clientSecret: paymentIntent.client_secret,  
      });
      
    } 
    else {
      res.status(400).json({ message: "Payment Failed" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Something went wrong" });
  }
});


router.post("/getuserorder", async (req, res) => {
  const { userid } = req.body;
  try {
    const orders = await Order.find({ userid }).sort({ _id: "-1" });
    res.status(200).send(orders);
  } catch (error) {
    res.status(400).json({
      message: "Something Went Wront",
      error: error.stack,
    });
  }
});

module.exports = router;
