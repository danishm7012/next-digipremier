/* import { server } from '../config' */
import Hero from '../components/Hero'
import About from '../components/About'
import Services from '../components/services/Services'
import Team from '../components/team/team'
import Contact from '../components/Contact'

export default function Home({ services }) {
  return (
    <div>
      <Hero />

      <About />
      <Services serviceData={services} />
      <Contact />
      <Team />
    </div>
  )
}

export const getStaticProps = async () => {
  const res = await fetch(`http://digipremier.herokuapp.com/api/service/all`)
  const services = await res.json()

  return {
    props: {
      services,
    },
  }
}
