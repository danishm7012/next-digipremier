import React, { useState, useEffect } from 'react'
import { Col, Row, Container, Image, Button } from 'react-bootstrap'
import blogs from '../../companiesData/BlogsData'
import { Link } from 'react-router-dom'
import Meta from '../common/Meta'

const BlogDetail = ({ match }) => {
  const blogId = match.params._id
  const [Blog, setBlog] = useState({})

  useEffect(() => {
    setBlog(blogs.find((b) => b._id === blogId))
  }, [blogId])
  return (
    <div className='section'>
      <Container>
        <Meta
          title={`${Blog.title}- ParadiseGOC`}
          description='Stay Update With Our Company'
        />

        <Row>
          <Col>
            <Link to={`/info/blogs`}>
              <Button
                variant='outline-dark'
                size='sm'
                style={{ fontSize: 14, float: 'left', marginTop: '0.7rem' }}
              >
                <i class='fas fa-caret-left'></i> Back
              </Button>
            </Link>
          </Col>
        </Row>
        <Row>
          <Col className='text-center py-2'>
            <h1>{Blog.title}</h1>
            <strong>
              <p style={{ color: '#c11e8a' }}>
                {Blog.auther} | {Blog.date}
              </p>
            </strong>
            <p className='text-left p-2'>{Blog.detail}</p>
          </Col>
        </Row>
        <Row>
          <Image
            style={{ height: '90vh', width: '100%' }}
            src={Blog.image}
            alt={Blog.title}
          />
        </Row>
      </Container>
    </div>
  )
}

export default BlogDetail
