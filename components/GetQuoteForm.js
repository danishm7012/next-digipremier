import React, { useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const GetQuoteForm = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [weburl, setWeburl] = useState("");
  const [message, setMessage] = useState("");
  const [phone, setPhone] = useState("");

  const [success, setSuccess] = useState("");
  const [errors, setErrors] = useState({});

  const submitHandler = (event) => {
    event.preventDefault();

    let contactData = { name, email, weburl, phone, message };
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    axios
      .post("https://digipremier.org/api/quote/add", contactData, config)
      .then((res) => {
        setErrors({});
        alert(res.data.success);
        setSuccess(res.data.success);
      })
      .catch((err) => {
        setSuccess(false);
        setErrors(err.response.data);
      });
  };

  return (
    <div>
      <div className="get-quote-form">
        <Container>
          <h2 className="text-center">GET A PERFECT QUOTE</h2>
          <p className="text-center">
            We're eager to work with you. Please share your project goals and
            contact information. Our team will respond to you within 1-2
            business day.
          </p>
          <br />
          <br />
          <form action="" onSubmit={submitHandler}>
            <Row>
              <Col>
                <Form.Group>
                  <Form.Control
                    type="text"
                    placeholder="Full Name"
                    value={name}
                    isInvalid={errors.name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <div className="error">{errors.name}</div>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group>
                  <Form.Control
                    type="email"
                    placeholder="Your Email"
                    value={email}
                    isInvalid={errors.email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <div className="error">{errors.email}</div>
                </Form.Group>
              </Col>
            </Row>
            <br />
            <Row>
              <Col>
                <Form.Group>
                  <Form.Control
                    type="text"
                    placeholder="Website URL"
                    value={weburl}
                    isInvalid={errors.weburl}
                    onChange={(e) => setWeburl(e.target.value)}
                  />
                  <div className="error">{errors.weburl}</div>
                </Form.Group>
              </Col>
            </Row>
            <br />
            <Row>
              <Col>
                <Form.Group>
                  <Form.Control
                    type="text"
                    placeholder="Contact No"
                    value={phone}
                    isInvalid={errors.phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                  <div className="error">{errors.phone}</div>
                </Form.Group>
              </Col>
            </Row>
            <br />
            <Row>
              <Col>
                <textarea
                  rows="5"
                  placeholder="Additional Info"
                  className="form-control"
                  value={message}
                  isInvalid={errors.message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
                <div className="error">{errors.message}</div>
              </Col>
            </Row>
            <br />
            <br />
            <div className="text-center">
              <button className="btn btn-1 " type="submit">
                Submit
              </button>
            </div>
          </form>
        </Container>
      </div>
    </div>
  );
};

export default GetQuoteForm;
