import React from "react";
import { Container, Row, Col, Table, Image } from "react-bootstrap";
import { FiPhoneCall } from "react-icons/fi";
import { ImMobile } from "react-icons/im";
import { AiOutlineMail } from "react-icons/ai";
const Contact = () => {
  
  return (
    <>
      <Container style={{ marginTop: "50px" }}>
        <Row>
          <Col md={6}>
            <h1>Pizza Express shop</h1>
            <p>
            At Pizza Express, we take pride in delivering an extraordinary pizza experience to our valued customers. Our commitment to quality, taste, and innovation sets us apart from the rest. We strive to provide a memorable culinary journey that tantalizes your taste buds and leaves you craving for more.

We believe that pizza is more than just a dish; it's an art form. Our dedicated team of chefs brings their expertise, passion, and creativity to every pizza they craft. Using only the finest ingredients, we ensure that each bite is a burst of flavors and textures that delight your senses. From the perfect balance of sauce and cheese to the carefully selected toppings, our pizzas are a symphony of taste that will leave you wanting another slice.

Our menu showcases a wide variety of pizzas, catering to different preferences and dietary needs. Whether you're a fan of classic Margherita, a meat lover craving a loaded BBQ chicken pizza, or a vegetarian seeking a flavorful veggie delight, we have something for everyone. We also offer gluten-free and vegan options, so no one has to miss out on the pizza experience.

At Pizza Express, we prioritize customer satisfaction above all else. We are committed to providing exceptional service, ensuring that your dining experience is seamless and enjoyable. Our knowledgeable and friendly staff are always ready to assist you, whether it's guiding you through the menu

 
            </p>

            <Table striped bordered hover className="text-center">
              <thead>
                <tr>
                  <th className="bg-warning text-center" colSpan={3}>
                    --- Contact Details ---
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <FiPhoneCall />
                  </td>
                  <td>Phone</td>
                  <td>0123-456789</td>
                </tr>
                <tr>
                  <td>
                    <ImMobile />
                  </td>
                  <td>Call</td>
                  <td>1234567890</td>
                </tr>
                <tr>
                  <td>
                    <AiOutlineMail />
                  </td>
                  <td>Email</td>
                  <td>Help@urdomain.com</td>
                </tr>
              </tbody>
            </Table>
          </Col>
          <Col md={6}>
            <Image
              src="images/farmhouse.jpg"
              style={{ width: "100%", height: "500px" }}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Contact;