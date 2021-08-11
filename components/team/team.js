import { Card, Col, Container, Row } from 'react-bootstrap'
import TeamCard from './teamCard'
import { TeamData } from '../../companiesData/TeamData'
const OurTeam = () => {
  return (
    <div id='team' className='section text-center '>
      <h1 style={{ fontSize: '35px', fontWeight: '700', letterSpacing: '1px' }}>
        OUR TEAM
      </h1>
      <p className='text-center text-white'>
        With over 100 Years of Combined Experince, We've got a well seasoned
        team at the helm
      </p>
      <br />
      <Container>
        <Row>
          {TeamData.map((Data) => {
            return (
              <Col md={3} sm={6} xs={12}>
                <TeamCard
                  img={Data.img}
                  Name={Data.Name}
                  desig={Data.desig}
                  details={Data.details}
                />
              </Col>
            )
          })}
        </Row>
      </Container>
      <br />
      <br />
      <br />
    </div>
  )
}

export default OurTeam
