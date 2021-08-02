import { Image } from 'react-bootstrap'
import TestimonialPage from '../components/testimonials'

const testimonial = () => {
  return (
    <>
      <Image
        src='/images/testimonial.jpg'
        height='auto'
        width='100%'
        alt='testimonial'
      />
      <TestimonialPage />
    </>
  )
}

export default testimonial
