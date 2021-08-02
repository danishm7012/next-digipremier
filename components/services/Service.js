import { Col, Button, Card } from 'react-bootstrap'
import Link from 'next/link'

const Service = ({ _id, image, name, text }) => {
  return (
    <>
      <Col lg={4} md={4} sm={12} xs={12} className='services-card'>
        <Card style={{ width: '100%', height: 'auto', background: 'black' }}>
          <Card.Img height='200' width='250' src={image} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>{text}</Card.Text>
            <Link href={`/${_id}`}>
              <button className='btn btn-1' size='md'>
                Learn More
              </button>
            </Link>
          </Card.Body>
        </Card>
      </Col>
    </>
  )
}

export default Service
