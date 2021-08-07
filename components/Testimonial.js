import React from 'react'
import Slider from 'react-slick'
import { Container, Row, Col } from 'react-bootstrap'
import { FaQuoteRight, FaQuoteLeft } from 'react-icons/fa'
import TestimonialCard from './testimonials/testimonialCard/index'
import { TestimonialData } from '../companiesData/TestimonialData'

const Testimonial = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
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
    <div className='py-5 testimonials' style={{ background: '#000' }}>
      <Container>
        <br />
        <br />
        <div className='testimonials'>
          <h2 className='text-center'>Testimonials</h2>
        </div>
        <br />

        <Slider {...settings}>
          {TestimonialData.map((Data) => {
            return (
              <div key={Data.id} className='p-2'>
                <TestimonialCard
                  img={Data.img}
                  details={Data.details}
                  Name={Data.Name}
                  desig={Data.desig}
                  company={Data.company}
                />
              </div>
            )
          })}
        </Slider>
      </Container>
      <br />
      <br />
    </div>
  )
}

export default Testimonial
