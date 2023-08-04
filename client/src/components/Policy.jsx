import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Policy = () => {
  return (
    <>
      <Container style={{ marginTop: "50px" }}>
        <h1>Terms and policy</h1>
        <Row>
          <Col md={10}>
            <h6>
            Ordering Process:
            </h6>
            <p>
            You can place your order through our website or by calling our designated phone number.
We offer a variety of pizzas and menu items for you to choose from.
Ensure that you provide accurate and up-to-date contact and delivery information.
            </p>
            <h6>
            Pricing and Payment:
            </h6>
            <p>
            All prices displayed on our menu are in the local currency and inclusive of applicable taxes.
We accept various payment methods, including cash, credit cards, and online payment platforms.
Payment is required at the time of delivery or pickup.
            </p>
            <h6>
            Delivery:
            </h6>
            <p>
            We strive to deliver your order within the estimated timeframe; however, unforeseen circumstances may cause delays.
Delivery charges may apply, depending on your location. Please check our website or contact us for specific details.
Our delivery service may have specific operating hours and delivery radius. Please check with us for availability.
            </p>
            <h6>
            Cancellations and Refunds:
            </h6>
            <p>
            If you need to cancel your order, please notify us as soon as possible.
Refunds, if applicable, will be processed according to our refund policy, which may vary based on individual circumstances.
            </p>
            <h6>
            Quality and Satisfaction:
            </h6>
            <p>
            We take utmost care to ensure the quality, freshness, and taste of our pizzas. If you are not satisfied with your order, please contact us immediately, and we will address your concerns promptly.
            </p>
            <h6>
            Allergies and Dietary Restrictions:
            </h6>
            <p>
            While we strive to accommodate special dietary needs, please note that cross-contamination may occur in our kitchen. Kindly inform us of any allergies or dietary restrictions when placing your order.
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Policy;