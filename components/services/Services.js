import { Row, Col, Container } from 'react-bootstrap'
import Service from './Service'

const Services = ({ serviceData }) => {
  return (
    <div className='services'>
      <Container>
        <Row>
          <Col className='text-center'>
            <h1 className='py-5'>Our Services</h1>
          </Col>
        </Row>
        <Row>
          {serviceData.map((s) => (
            <Service
              _id={s.slug}
              image={s.image}
              name={s.name}
              text={s.text}
              icon={s.icon}
            />
          ))}
        </Row>
      </Container>
    </div>
  )
}

export default Services
