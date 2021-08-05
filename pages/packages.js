import Package from '../components/Packages/Package'

const packages = ({ packages }) => {
  return (
    <>
      <Package packageData={packages} />
    </>
  )
}
export const getStaticProps = async () => {
  const res = await fetch(`http://cms-digipremier.herokuapp.com/packages/`)

  const packages = await res.json()

  return {
    props: {
      packages,
    },
  }
}
export default packages
