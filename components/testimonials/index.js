import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import TestimonialCard from "./testimonialCard";
import { TestimonialData } from "../../companiesData/TestimonialData";

const TestimonialPage = () => {
  return (
    <div className="testimonial-page py-5" style={{ background: "#222222" }}>
      <Container>
        <h2 className="text-center">What Client Says</h2>
        <hr className="text-center w-25 mx-auto" />
        <p className="text-center">Some Impressions from our Customers !</p>
        <br />
        <br />
        <Row>
          {TestimonialData.map((Data) => {
            return (
              <Col md={4} sm={6} xs={12} className="mt-5">
                <TestimonialCard
                  img={Data.img}
                  details={Data.details}
                  Name={Data.Name}
                  desig={Data.desig}
                  company={Data.company}
                />
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default TestimonialPage;
