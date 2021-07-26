import Meta from '../Meta'

import { Container } from 'react-bootstrap'
/* import BlogData from '../../companiesData/BlogsData' */
import Title from '../proServiceDetail/Title'
import Blog from './Blog'
const Blogs = ({ blogs }) => {
  return (
    <>
      <Title img='/images/Banners/blogs.jpg' />
      <div className='mt-3 section'>
        <Meta title='Blogs - ProGcc' />
        <div className='section-title container'>
          {console.log(blogs)}
          <h2>Our Blogs</h2>
          <p>
            You can get started with your business in UAE, especially in the
            sectors of travel, real estate, information technology, legal
            affairs, finance, banking and human resources, and that many
            companies are digitizing their operations to improve their
            performance.
          </p>
        </div>
        {/* <Container>
          {blogs.map((blog) => (
            <Blog blog={blog} />
          ))}
        </Container> */}
      </div>
    </>
  )
}

export default Blogs
