import React from "react";
import { Container, Row, Col,Image } from "react-bootstrap";

const About = () => {
  return (
    <>
      <Container style={{ marginTop: "50px" }}>
        <h1>Who we are</h1>
        <p>
        "At Pizza Express, we are passionate about delivering the finest and most delicious pizzas right to your doorstep. With a team of skilled pizzaiolos and a commitment to using only the freshest ingredients, we strive to create mouthwatering pizzas that satisfy your cravings. Our menu features a variety of classic and innovative pizza flavors, crafted with love and attention to detail. Whether you prefer a traditional Margherita or crave something more adventurous, our diverse range of toppings and crust options caters to every taste. We pride ourselves on exceptional quality, prompt service, and ensuring a delightful pizza experience for our valued customers. Order from Pizza Express and indulge in the perfect blend of flavors, handcrafted for your enjoyment."

Feel free to customize this description to align with your brand's vision, values, and unique selling points.
"Continuing our pizza journey, Pizza Express is dedicated to providing a seamless and convenient online ordering experience. Our user-friendly website and mobile app make it effortless for you to browse our menu, customize your pizza to perfection, and place your order with just a few clicks. We understand that time is valuable, which is why we prioritize efficient delivery services to ensure your hot and fresh pizza arrives at your doorstep promptly. 
        </p>
        <h1>Our Speciality</h1>
        <Row>
          <Col md={6}>
            <p>
            At Pizza Express, we take pride in our culinary expertise and our dedication to delivering exceptional flavors. Our specialty lies in creating mouthwatering pizzas that are crafted with the finest ingredients and prepared with precision. Each pizza is a work of art, from the hand-stretched dough to the carefully selected toppings that burst with flavor. We offer a diverse range of specialty pizzas that cater to every palate, from classic favorites to innovative creations that push the boundaries of traditional pizza. Our commitment to quality extends to every aspect of our pizzas, from sourcing fresh, locally sourced ingredients to using authentic, artisanal techniques in our cooking process. Whether you're a fan of classic Margherita, a meat lover craving our signature Meat Feast, or an adventurous foodie seeking unique flavor combinations, our specialty pizzas are sure to delight your taste buds and leave you craving for more. Experience the passion and expertise behind our specialty pizzas at Pizza Express, where every bite is a celebration of flavor and quality.
            </p>
          </Col>
          <Col md={6}>
            <p>
            <Image
              src="images/sp.jpg"
              style={{ width: "100%", height: "300px" }}
            />
            </p>
          </Col>
        </Row>
        <Row>
          <h1>Our chef</h1>
          <Col md={3}>
          Chef Alessandro Rossi:
Chef Alessandro Rossi is a renowned Italian chef with over 20 years of experience in the culinary industry. He is a master in the art of pizza making and brings a wealth of traditional Italian recipes and techniques to Pizza Express. 
          </Col>
          <Col md={3}>
          Chef Maria Sanchez:
Chef Maria Sanchez is a talented and innovative chef known for her creative approach to pizza. With a background in international cuisine, she infuses her unique flavors and ingredients into Pizza Express's menu. 
          </Col>
          <Col md={3}>
          Chef Giovanni Bianchi is a seasoned chef with a deep passion for artisanal pizza. His dedication to sourcing the finest local and seasonal ingredients shines through in every pizza he prepares. 
          </Col>
          <Col md={3}>
          Chef Sofia Martinez:
Chef Sofia Martinez brings a modern twist to traditional pizza recipes. With her flair for contemporary flavors and presentation, she adds an element of elegance and sophistication to Pizza Express's menu. 
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default About;