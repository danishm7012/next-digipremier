import Blogs from '../../components/Blogs/Blogs'
import { server } from '../../config/index'
const index = ({ blogs }) => {
  return (
    <>
      <Blogs blogs={blogs} />
    </>
  )
}

/* export const getServerSideProps = async () => {
  const res = await fetch(`${server}/blogs`)
  const blogs = await res.json()
  console.log(blogs)

  return {
    props: {
      blogs,
    },
  }
}
 */
export default index
