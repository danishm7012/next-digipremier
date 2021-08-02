import Meta from '../components/Meta'
import Pro from '../components/Pro'
import Title from '../components/proServiceDetail/title'
import { server } from '../config/index'
const proServices = ({ services }) => {
  return (
    <>
      <Title img='/images/banners/pro.jpg' heading='Pro Services' />
      <Meta title='proServices' />
      <Pro services={services} />
    </>
  )
}

export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/services`)
  const services = await res.json()

  return {
    props: {
      services,
    },
  }
}

export default proServices
