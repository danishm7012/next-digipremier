import React from 'react'
// import Logo2 from "/images/logos/adam_property.png";
import { LogoSliderData } from '../data/logoSliderData'
import Slider from 'react-slick'
import { Container, Row, Col } from 'react-bootstrap'
import Image from 'next/image'

const LogoSlider = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
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
    <div style={{ background: '#000' }}>
      <Container>
        <Slider {...settings}>
          {LogoSliderData.map((Data) => {
            return (
              <div className='p-2'>
                <div className='logo-slider'>
                  <Image src={Data.img} width={250} height={300} alt='Logo 1' />
                </div>
              </div>
            )
          })}
        </Slider>
      </Container>
      <br />
      <br />
      <br />
    </div>
  )
}

export default LogoSlider
