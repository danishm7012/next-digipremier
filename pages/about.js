import Meta from '../components/Meta'
import About from '../components/About'
import Title from '../components/proServiceDetail/title'

const about = () => {
  return (
    <div>
      <Meta title='About' />
      <Title img='/images/banners/About-Us.jpg' heading='About US' />

      <About />
    </div>
  )
}

export default about
