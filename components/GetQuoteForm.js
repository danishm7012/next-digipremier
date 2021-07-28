import React from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useFormik } from "formik";
import * as Yup from "yup";

const initialValues = {
  fname: "",
  email: "",
  phone: "",
  weburl: "",
  message: "",
};
const onSubmit = (values, submitProps) => {
  console.log("Form data", values);
  toast.success("Message Submit Sucessfully", {
    position: "top-center",
  });
  submitProps.setSubmitting(false);
  submitProps.resetForm();
};

const validationSchema = Yup.object({
  fname: Yup.string()
    .min(3, "Name must be three or more characters")
    .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field ")
    .required("Name is required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  phone: Yup.string()
    .matches(/^[0-9\s]+$/, "Only number are allowed for this field ")
    .required("Phone Number is required"),
  weburl: Yup.string().required("Website URL is required"),
  message: Yup.string().required("Message is required"),
});

const GetQuoteForm = () => {
  const formik = useFormik({
    initialValues,
    onSubmit,
    // validate,
    validationSchema,
  });
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
          <form action="" onSubmit={formik.handleSubmit}>
            <Row>
              <Col>
                <Form.Group>
                  <Form.Control
                    type="text"
                    placeholder="Full Name"
                    name="fname"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.fname}
                  />
                  {formik.touched.name && formik.errors.name ? (
                    <div className="error">{formik.errors.name}</div>
                  ) : null}
                </Form.Group>
                {formik.touched.fname && formik.errors.fname ? (
                  <div className="error">{formik.errors.fname}</div>
                ) : null}
              </Col>
              <Col>
                <Form.Group>
                  <Form.Control
                    type="email"
                    placeholder="Your Email"
                    name="email"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                  />
                  {formik.touched.email && formik.errors.email ? (
                    <div className="error">{formik.errors.email}</div>
                  ) : null}
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
                    name="weburl"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.weburl}
                  />
                  {formik.touched.weburl && formik.errors.weburl ? (
                    <div className="error">{formik.errors.weburl}</div>
                  ) : null}
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
                    name="phone"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.phone}
                  />
                  {formik.touched.phone && formik.errors.phone ? (
                    <div className="error">{formik.errors.phone}</div>
                  ) : null}
                </Form.Group>
              </Col>
            </Row>
            <br />
            <Row>
              <Col>
                <textarea
                  name="message"
                  rows="5"
                  placeholder="Additional Info"
                  className="form-control"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.message}
                ></textarea>
                {formik.touched.message && formik.errors.message ? (
                  <div className="error">{formik.errors.message}</div>
                ) : null}
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
