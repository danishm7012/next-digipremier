import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import Meta from '../../components/Meta'
import MarkdownIt from 'markdown-it'
import { Container, Row, Col, Image } from 'react-bootstrap'
import { useRouter } from 'next/router'
import ServicesImg from '../../companydata/servicesImg'

const md = new MarkdownIt()

const Service = ({ service }) => {
  const router = useRouter()
  const { slug } = router.query
  const [ServiceImg, setServiceImg] = useState({})

  useEffect(() => {
    setServiceImg(ServicesImg.find((s) => s.slug === slug))
  }, [slug])

  return (
    <>
      <Row>
        <Col>
          <Image
            src={ServiceImg.image}
            alt={ServiceImg.slug}
            height='auto'
            width='100%'
            className='service-title'
          />
        </Col>
      </Row>
      <div className='section'>
        <Meta
          title={service.metaTitle}
          description={service.metaDescription}
          keywords={service.metaKeyword}
        />
        <Container>
          <div className='section-title'>
            <h1>{service.title}</h1>
          </div>
          <div className='container p-4 back-to-home '>
            <Link href='/'>
              <a className='btn-1'>Go Back</a>
            </Link>
          </div>
          <div
            className='service-content container'
            dangerouslySetInnerHTML={{ __html: md.render(service.detail) }}
          ></div>
          <br />
        </Container>
      </div>
    </>
  )
}

export const getStaticProps = async (context) => {
  const res = await fetch(
    `https://cms-digipremier.herokuapp.com/services/${context.params.slug}`
  )

  const service = await res.json()

  return {
    props: {
      service,
    },
  }
}

export const getStaticPaths = async () => {
  const res = await fetch(`https://cms-digipremier.herokuapp.com/services`)

  const services = await res.json()

  const slugs = services.map((service) => service.slug)
  const paths = slugs.map((slug) => ({ params: { slug: slug.toString() } }))

  return {
    paths,
    fallback: false,
  }
}

export default Service
