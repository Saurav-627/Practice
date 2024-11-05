import "bootstrap/dist/css/bootstrap.min.css";
import "./Hero.scss";

import { Container, Row, Col, Button } from "react-bootstrap";
import ImageGrid from "./Images";

const Hero = () => {
  return (
    <div className="landing-section">
      <div className="bg-svg"><img src="public/Illustration.svg"></img></div>
      <div className="rotating-background"></div> {/* Added rotating background div */}
      <Container
        fluid
        className="d-flex flex-column justify-content-center align-items-center px-3"
      >
        <Row className="justify-content-center">
          <Col xs={12} md={10} lg={7} className="d-flex flex-column gap-2">
            <h1 className="head text-center">
              GET YOUR ANSWERS <br /> INSTANTLY FOR <span>FREE !!</span>
            </h1>
            <p className="para">
              Lorem ipsum dolor sit amet consectetur. Pellentesque nascetur sed
              tellus ut vehicula eu consectetur elit at. Nulla erat nunc nisl
              dui sed cras semper vitae. odio ullamcorper non sed dignissim eu.
              Lorem ipsum dolor sit amet consectetur. Pellentesque nascetur sed
              tellus ut vehicula eu consectetur elit at. Nulla erat nunc nisl
              dui sed cras semper vitae. odio ullamcorper non sed dignissim eu.
            </p>
            <Button
              style={{ backgroundColor: "#01658E" }}
              variant="primary"
              className="btn d-block mx-auto"
            >
              Chat Now <img src="../public/fluent_chat-12-regular.svg" alt="" />
            </Button>
          </Col>
        </Row>
        <Row className="mt-5">
          <div>
            <ImageGrid />
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default Hero;
