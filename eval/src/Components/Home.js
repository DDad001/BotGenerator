import "../App.css";
import React from "react";
import LogoFull from "../Images/Logo_Full.png";
import { Row, Container, Col, Navbar, Nav, Card, Button} from "react-bootstrap";

function Home() {
  return (
    <div className="HomeHeroImage">
      <Container>
        <Row>
          <Col md={12} className="d-flex justify-content-center mt-2">
            <img src={LogoFull} height="160px" />
          </Col>
        </Row>
        <Row>
          <Col md={12} className="d-flex justify-content-center mt-2">
            <h1 className="TitleText">Welcome Pilot #972</h1>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="d-flex justify-content-center mt-2">
            <p className="bottomText">
              You have been selected to participate in our simulation project.
              <br /> Please read the terms of your contract before moving
              forward to <br />
              the objective page.
            </p>
          </Col>
        </Row>
        <Row>
          <Col className="d-flex justify-content-center mt-2">
            <Card style={{ width: "50rem", height:"21rem"}}>
              <Card.Body className="p-5">
                <Card.Title className="CardTitleText">Deployment Contract</Card.Title>
                <Card.Text className="CardText">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus pretium augue, at placerat augue finibus ut. Aliquam ac egestas ex, vitae sollicitudin dui. Sed iaculis nunc nec accumsan euismod. In quis sapien in elit ultricies elementum non nec justo. Aliquam ut venenatis arcu. Suspendisse id tincidunt eros. Aliquam nisi turpis, efficitur vitae lorem et, lacinia molestie sem. Nullam non nulla fringilla sem porta porta consequat at lectus. Cras pretium turpis eget tortor imperdiet consequat. Donec mollis pulvinar dolor. Nunc placerat massa dui, ut pharetra ex consectetur id. <br/> <br/> Curabitur convallis ex ipsum, ac feugiat ante porta quis. Maecenas eget semper sapien, vel condimentum eros. Fusce varius hendrerit felis, quis lacinia eros bibendum non. Curabitur ipsum sem, mattis posuere vestibulum viverra, faucibus maximus quam. Ut id condimentum est. Maecenas interdum tortor non fringilla vestibulum. Pellentesque eu lacus sollicitudin, lacinia nulla nec, cursus ex. Sed gravida sodales ipsum, ornare ullamcorper velit pulvinar nec. Etiam lacinia lectus vel congue ultrices. Phasellus arcu erat, ultrices nec lectus in, efficitur tempor eros. <br/><br/>Vivamus nec felis vestibulum odio consectetur egestas ut quis nisl. Aliquam non tempor quam. Morbi at orci massa. 
                </Card.Text>
                <div className="d-flex justify-content-center">
                <Button className="ButtonCardText">Agree</Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

        <div>
            <Container fluid>
            <Row className="mt-5">
            <Navbar bg="dark" variant="dark"expand="lg" className="customMargin">
            <Container>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto mx-5">
                  <Nav.Link className="FooterText mx-5">Copyright © Galigate Machines</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
            </Row>
            </Container>
        </div>
          

    </div>
  );
}

export default Home;
