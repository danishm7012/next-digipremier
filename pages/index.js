/* import { server } from '../config' */
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/services/Services";
import Team from "../components/team/team";
import Contact from "../components/Contact";
import Testimonial from "../components/Testimonial";
import LogoSlider from "../components/LogoSlider";

export default function Home({ services }) {
  return (
    <div>
      <Hero />

      <About />
      {/* <Services serviceData={services} /> */}
      <Contact />
      <Testimonial />
      <LogoSlider />
      <Team />
    </div>
  );
}

// export const getStaticProps = async () => {
//   const res = await fetch(`https://digipremier.herokuapp.com/api/service/all`);
//   const services = await res.json();

//   return {
//     props: {
//       services,
//     },
//   };
// };
