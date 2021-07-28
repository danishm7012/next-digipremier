import React from "react";
import Slider from "react-slick";
import { Container, Row, Col } from "react-bootstrap";
import { FaQuoteRight, FaQuoteLeft } from "react-icons/fa";

const Testimonial = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  return (
    <div className="py-5 testimonials" style={{ background: "#000" }}>
      <Container>
        <br />
        <br />
        <div className="testimonials">
          <h2 className="text-center">Testimonials</h2>
        </div>
        <br />
        <Row>
          <Col></Col>
          <Col md={7} xs={12}>
            <Slider {...settings}>
              <div>
                <div className="text-center">
                  <FaQuoteRight className="icon" />
                  <br />
                  <p>
                    I was very sceptical about SEO services in advanced of being
                    introduced to Matt, but whatever it is Matt does, works like
                    magic!
                  </p>

                  <FaQuoteLeft className="icon" />
                  <br />
                  <span>
                    <strong>Brilliant Highly recomended</strong>
                  </span>
                </div>
              </div>
              <div>
                <div className="text-center">
                  <FaQuoteRight className="icon" />
                  <br />
                  <p>
                    I was very sceptical about SEO services in advanced of being
                    introduced to Matt, but whatever it is Matt does, works like
                    magic!
                  </p>

                  <FaQuoteLeft className="icon" />
                  <br />
                  <span>
                    <strong>Brilliant Highly recomended</strong>
                  </span>
                </div>
              </div>
            </Slider>
          </Col>
          <Col></Col>
        </Row>
      </Container>
      <br />
      <br />
    </div>
  );
};

export default Testimonial;
