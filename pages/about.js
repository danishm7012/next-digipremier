import Meta from '../components/Meta'
import About from '../components/About'
import Title from '../components/proServiceDetail/Title'

const about = () => {
  return (
    <div>
      <Meta title='About' />
      <Title img='/images/Banners/About-Us.jpg' />

      <About />
    </div>
  )
}

export default about
