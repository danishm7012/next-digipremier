import Meta from '../components/Meta'
import Contact from '../components/Contact'
import { Image } from 'react-bootstrap'

const contact = () => {
  return (
    <>
      <Image
        src='/images/Contact-us.jpg'
        height='auto'
        width='100%'
        alt='Contact-us'
      />
      <Meta title='contact' />
      <Contact />
    </>
  )
}

export default contact
