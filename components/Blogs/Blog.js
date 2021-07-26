import { Col, Row, Image } from 'react-bootstrap'
import Link from 'next/link'

const Blog = ({ blog }) => {
  return (
    <div className='section'>
      <Row>
        <Col lg={6} sm={12} className='order-2 order-lg-1'>
          <h3>{blog.title}</h3>
          <p className='m-2 py-2'>
            {blog.details.slice(0, 500)}...{' '}
            <Link href={`/news/[blogID]`} as={`/news/${blog.slug}`}>
              <strong>Read more</strong>
            </Link>{' '}
            <br />
            <br />
            <strong>
              {blog.auther} | {blog.date}
            </strong>
          </p>
        </Col>
        <Col lg={6} sm={12} className='text-center order-1 order-lg-2'>
          <Image src={blog.image} height='80%' width='100%' rounded></Image>
        </Col>
      </Row>
    </div>
  )
}

export default Blog
