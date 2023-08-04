import React from "react";
import { Button } from "react-bootstrap";
import { useDispatch,useSelector } from "react-redux";
import { placeOrder } from "../actions/orderAction";
import Loader from "./Loader";
import Error from "./Error";
import Success from "./Success";
import StripeCheckout from "react-stripe-checkout";

const Checkout = ({ subTotal }) => {
  const orderState = useSelector((state) => state.placeOrderReducer);
  const { loading, error, success } = orderState;
  const dispatch = useDispatch();

  const tokenHandler = (token) => {
    dispatch(placeOrder(token, subTotal));
  };

  return (
    <>
       {loading && <Loader />}
      {error && <Error error="something went wrong" />}
      {success && <Success success="order placed success" />}
      <StripeCheckout
        amount={subTotal * 100}
        shippingAddress
        token={tokenHandler}
        stripeKey="pk_test_51NJdmvSCPCoB7v42lZJQ9a7tgJtAk62yaGOaRpMmEN4FvrQfQZdagnkcnt78PuUhQiTbwb1tL1pBQ5yAB7Lq6dOR00e1wpT8Ev"
        currency="INR"
      >
        <Button>Pay Now</Button>
      </StripeCheckout>
    </>
  );
};

export default Checkout;
