import Team from '../components/team/team'
import { Image } from 'react-bootstrap'
const team = () => {
  return (
    <>
      <Image
        src='/images/About-Us.jpg'
        height='auto'
        width='100%'
        alt='about our team'
      />

      <Team />
    </>
  )
}

export default team
