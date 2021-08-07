import React, { useState } from 'react'
import Message from '../components/common/Message'
import axios from 'axios'
import { Col, Form, Button, Row } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' // Import the FontAwesomeIcon component
import {
  faEnvelope,
  faPhoneAlt,
  faMapMarkedAlt,
} from '@fortawesome/free-solid-svg-icons' // import the icons you needz
const Contact = () => {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')

  const [success, setSuccess] = useState('')
  const [errors, setErrors] = useState({})

  const submitHandler = (event) => {
    event.preventDefault()

    let contactData = { name, email, subject, message }
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }

    axios
      .post('https://digipremier.org/api/contact/add', contactData, config)
      .then((res) => {
        setErrors({})
        alert(res.data.success)
        setSuccess(res.data.success)
      })
      .catch((err) => {
        setSuccess(false)
        setErrors(err.response.data)
      })
  }

  return (
    <section id='contact' className='contact'>
      <div className='container' data-aos='fade-up'>
        <br />
        <br />
        <div className='py-4 text-center'>
          <Form onSubmit={submitHandler}>
            <h1>GET IN TOUCH WITH US.</h1>
            <Form.Row as={Row}>
              <Form.Group as={Col} controlId='formGridName'>
                <Form.Control
                  type='text'
                  placeholder='Your Name'
                  value={name}
                  isInvalid={errors.name}
                  className='text-line'
                  onChange={(e) => setName(e.target.value)}
                />

                <Form.Control.Feedback type='invalid'>
                  {errors.name}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col} controlId='formGridEmail'>
                <Form.Control
                  type='email'
                  placeholder='Your Email'
                  value={email}
                  isInvalid={errors.email}
                  className='text-line'
                  onChange={(e) => setEmail(e.target.value)}
                />

                <Form.Control.Feedback type='invalid'>
                  {errors.email}
                </Form.Control.Feedback>
              </Form.Group>
            </Form.Row>

            <Form.Group controlId='formGridAddress1'>
              <Form.Control
                type='text'
                placeholder='Subject'
                value={subject}
                isInvalid={errors.subject}
                className='text-line'
                onChange={(e) => setSubject(e.target.value)}
              />

              <Form.Control.Feedback type='invalid'>
                {errors.subject}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId='formTextarea'>
              <Form.Control
                as='textarea'
                placeholder='Your Message'
                value={message}
                isInvalid={errors.message}
                className='text-line'
                onChange={(e) => setMessage(e.target.value)}
                rows={6}
              />

              <Form.Control.Feedback type='invalid'>
                {errors.message}
              </Form.Control.Feedback>
            </Form.Group>
            {success && <Message variant='success'>{success}</Message>}
            <div className='text-center'>
              <Button className='contact-btn' type='submit'>
                Send Message
              </Button>
            </div>
          </Form>
        </div>

        <div className='row'>
          <div className='pt-3 col-lg-12'>
            <iframe
              style={{ width: '100%', height: '270px' }}
              title='map location'
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.5269363452203!2d55.25959091434539!3d25.185446483901682!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f69d0ffbfffff%3A0x561a6d9c9da2b17d!2sPARK%20LANE%20TOWER!5e0!3m2!1sen!2s!4v1618552117335!5m2!1sen!2s'
              frameBorder='0'
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
