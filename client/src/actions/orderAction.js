import axios from "axios";

export const placeOrder = (token, subTotal) => async (dispatch, getState) => {
  dispatch({ type: "PLACE_ORDER_REQUEST" });
  const currentUser = getState().loginUserReducer.currentUser;
  const cartItems = getState().cartReducer.cartItems;
  try {
    const { data } = await axios.post("/api/orders/placeorder", {
      token,
      subTotal,
      currentUser,
      cartItems,
    });
    if (data.error) {
      console.log("Payment Failed:", data.error.message);
      dispatch({ type: "PLACE_ORDER_FAIL", payload: data.error.message });
    } else if (data.requiresAction) {
      handleCardAction(data.clientSecret, dispatch);
    } else if (data.status === "succeeded") {
      dispatch({ type: "PLACE_ORDER_SUCCESS" });
      console.log("Payment Success");
    } else {
      console.log("Payment Failed");
      dispatch({ type: "PLACE_ORDER_FAIL", payload: "Payment Failed" });
    }
  } catch (error) {
    dispatch({ type: "PLACE_ORDER_FAIL", payload: error.message });
    console.log("Something went wrong:", error);
  }
};

const handleCardAction = async (clientSecret, dispatch) => {
  const stripe = window.Stripe("pk_test_51NJdmvSCPCoB7v42lZJQ9a7tgJtAk62yaGOaRpMmEN4FvrQfQZdagnkcnt78PuUhQiTbwb1tL1pBQ5yAB7Lq6dOR00e1wpT8Ev");
  try {
    const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret);
    if (error) {
      console.log("Payment Failed:", error.message);
      dispatch({ type: "PLACE_ORDER_FAIL", payload: error.message });
    } else if (paymentIntent.status === "succeeded") {
      dispatch({ type: "PLACE_ORDER_SUCCESS" });
      console.log("Payment Success");
    } else if (paymentIntent.status === "requires_action") {
      // Additional authentication is required, you can handle it accordingly
      console.log("Additional authentication is required");
    } else {
      console.log("Payment Failed");
      dispatch({ type: "PLACE_ORDER_FAIL", payload: "Payment Failed" });
    }
    
  } catch (error) {
    console.log("Something went wrong:", error);
    dispatch({ type: "PLACE_ORDER_FAIL", payload: error.message });
  }
};
export const getUserOrders = () => async (dispatch, getState) => {
  const currentUser = getState().loginUserReducer.currentUser;
  dispatch({
    type: "USER_ORDER_REQUEST",
  });
  try {
    const response = await axios.post("/api/orders/getuserorder", {
      userid: currentUser._id,
    });
    // console.log(response);
    dispatch({ type: "USER_ORDER_SUCCESS", payload: response.data });
  } catch (error) {
    dispatch({ type: "USER_ORDER_FAIL", payload: error });
  }
};