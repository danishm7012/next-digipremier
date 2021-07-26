import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'
import Link from 'next/link'

const BankingServices = ({ services }) => {
  return (
    <div id='bankingServices' className='section banking-h1'>
      <Row>
        <Col>
          <div className='section-title container'>
            <h2>Banking and finanace services</h2>
          </div>
        </Col>
      </Row>
      <Container>
        <Row>
          {services
            .filter((service) => service.category === 'Banking')
            .map((s) => (
              <Col lg={4}>
                <Link href={`${s.slug}`}>
                  <Card className='banking-servcie'>
                    <Card.Title>
                      <img className='banking-icon' src={s.icon} alt={s.slug} />
                      {s.name}
                    </Card.Title>
                  </Card>
                </Link>
              </Col>
            ))}
        </Row>
      </Container>
    </div>
  )
}

export default BankingServices
