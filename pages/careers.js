import React, { useState } from 'react'
import Title from '../components/proServiceDetail/title'
import axios from 'axios'
import { Container, Row, Form, Button, Col } from 'react-bootstrap'
import Meta from '../components/Meta'

const Career = () => {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [job, setJob] = useState('')

  const [success, setSuccess] = useState('')
  const [errors, setErrors] = useState({})
  const submitHandler = (event) => {
    event.preventDefault()

    let careerData = { name, email, phone, job }
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }

    axios
      .post('https://digipremier.org/api/career/add', careerData, config)
      .then((res) => {
        setErrors({})
        alert('submitted!')
        setSuccess(res.data.success)
      })
      .catch((err) => {
        setSuccess(false)
        setErrors(err.response.data)
      })
  }

  return (
    <>
      <Title img='/images/banners/hero.jpg' heading='Careers' />

      <div className='py-5' style={{ background: '#222222' }}>
        <Meta
          title='Careers - ProGcc'
          description='Being a part of the ProGcc'
        />
        <div>
          <Container className='careers-section'>
            <Row>
              <Col className='left-block' sm={6}>
                <h2>Overview</h2>
                <p>
                  We, at ProGcc create opportunities for our employees to grow
                  and expand their knowledge horizons substantially. The Company
                  is an equal opportunity employer and hires people from various
                  ethnicities and both genders without prejudice or bias.
                </p>
                <br />
                <p>
                  Being a part of the ProGcc, our employees’ commitment and
                  determination never goes unnoticed, therefore we encourage
                  performance based reinforcement along with acknowledgement by
                  the whole team. The Company has a coherent and market driven
                  performance and reward policy which encourages employees to
                  participate enthusiastically in the achievement of company’s
                  objectives.
                </p>
              </Col>
              <Col className='right-block' sm={6}>
                <h3>Get in touch with us</h3>
                <Form onSubmit={submitHandler}>
                  <Form.Row>
                    <Form.Group as={Col} md='10' controlId='validationFormik01'>
                      <Form.Label>Your Name</Form.Label>
                      <Form.Control
                        type='text'
                        name='Name'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        isInvalid={errors.name}
                      />
                      <Form.Control.Feedback type='invalid'>
                        {errors.name}
                      </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md='10' controlId='validationFormik02'>
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        type='text'
                        name='Email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        isInvalid={errors.email}
                      />

                      <Form.Control.Feedback type='invalid'>
                        {errors.email}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Form.Row>
                  <Form.Row>
                    <Form.Group as={Col} md='10' controlId='validationFormik03'>
                      <Form.Label>Contact Number</Form.Label>
                      <Form.Control
                        type='text'
                        name='phone'
                        value={phone}
                        onChange={(e) => setPhone(e.target.phone)}
                        isInvalid={errors.phone}
                      />

                      <Form.Control.Feedback type='invalid'>
                        {errors.phone}
                      </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md='10' controlId='validationFormik04'>
                      <Form.Label>Job Nature</Form.Label>
                      <Form.Control
                        type='text'
                        name='job'
                        value={job}
                        onChange={(e) => setJob(e.target.job)}
                        isInvalid={errors.job}
                      />
                      <Form.Control.Feedback type='invalid'>
                        {errors.job}
                      </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group>
                      <Form.Label>Upload CV</Form.Label>
                      <Form.File
                        className='position-relative my-3'
                        name='file'
                        isInvalid={!!errors.file}
                        feedback={errors.file}
                        id='validationFormik107'
                      />
                    </Form.Group>
                  </Form.Row>

                  {success && <Message variant='success'>{success}</Message>}

                  <button className='btn btn-1' type='submit'>
                    Submit
                  </button>
                </Form>
              </Col>
            </Row>
          </Container>
          <br />
          <br />
        </div>
      </div>
    </>
  )
}

export default Career
