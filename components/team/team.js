import { Card, Col, Container, Row } from 'react-bootstrap'
import TeamCard from './teamCard'
import Slider from 'react-slick'
import { TeamData } from '../../companiesData/TeamData'
const OurTeam = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },

      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  }
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
          <Slider {...settings}>
            {TeamData.map((Data) => {
              return (
                <Col md={3} sm={6} xs={12}>
                  <TeamCard
                    img={Data.img}
                    Name={Data.Name}
                    desig={Data.desig}
                    details={Data.details}
                    facebook={Data.facebook}
                    twitter={Data.twitter}
                    linkedin={Data.linkedin}
                    insta={Data.instagram}
                  />
                </Col>
              )
            })}
          </Slider>
        </Row>
      </Container>
      <br />
      <br />
      <br />
    </div>
  )
}

export default OurTeam
