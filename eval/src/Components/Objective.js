import React from "react";
import "./Home.css";
import {
  Row,
  Container,
  Col,
  Navbar,
  Nav,
  Card,
  Button,
} from "react-bootstrap";

import info1 from '../Images/Info1.png';
import info2 from '../Images/Info2.png';
import info3 from '../Images/Info3.png';

function Objective() {
  return (
    <div className="background">
      <Container>
        <Row>
          <Col className="mt-4 MarginLeft">
            <h1 className="TitleObjective mx-5">Objective</h1>
          </Col>
        </Row>
        <Row>
          <Col className="d-flex justify-content-center mt-2">
            <Card style={{ width: "50rem", height: "21rem" }}>
              <Card.Body className="">
                <Card.Title className="CardTitleText">Location</Card.Title>
                <Card.Subtitle className="mb-2 text-muted CardObjectiveText">
                  Undisclosed Desert <br />
                  <br />
                  Aerial- 7,500,000 (km2) <br />
                  Ground - 8,000,000 (km2) <br />
                  Subterranean - 5,000,000 (km2)
                </Card.Subtitle>
                <Card.Text className="CardBodyText">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam bibendum ipsum fringilla velit rutrum, ac maximus dui
                  porttitor. Vestibulum varius pellentesque odio eu laoreet.
                  Proin est metus, egestas id accumsan eu, semper ac urna. Nam
                  ac auctor eros. Sed vestibulum libero ut tincidunt ornare.
                  Donec fermentum lectus leo, tincidunt gravida augue laoreet
                  ut.
                  <br />
                  <br /> Pellentesque sed libero vehicula, euismod nisl ac,
                  vehicula lectus. Cras in ex laoreet, lacinia orci lobortis,
                  varius dolor. Praesent ut metus semper, lacinia velit et,
                  cursus diam. Nullam eu elit nec diam vehicula pretium.
                  Vestibulum vel elit sed arcu tristique mollis vitae vehicula
                  quam.{" "}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col md={12} className="mt-5">
            <h2>Task Choices</h2>
          </Col>
        </Row>

        <Row>
          <Col md={4}>
            <Card style={{ width: "18rem" }} className="CardImage">
              <Card.Img variant="top" src={info1}/>
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card style={{ width: "18rem" }} className="CardImage">
              <Card.Img variant="top" src={info2} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card style={{ width: "18rem" }} className="CardImage">
              <Card.Img variant="top" src={info3} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Objective;
