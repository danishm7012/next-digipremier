import { Row, Col, Container, Image, Button } from 'react-bootstrap'
import MarkdownIt from 'markdown-it'
import Title from '../../components/common/Title'
import Link from 'next/link'
const md = new MarkdownIt()

const Package = ({ packageData }) => {
  return (
    <div className='section'>
      <Title img='/images/banners/hero.jpg' heading='Our Packages' />
      <Container>
        {packageData &&
          packageData.map((p) => (
            <Row key={p.slug} className='package-row'>
              <Col lg={5} sm={6} xs={12}>
                <Image
                  src={p.image.url}
                  alt={p.title}
                  height='auto'
                  width='100%'
                  className='package-image'
                />
              </Col>
              <Col lg={7} sm={6} xs={12} className='pakage-detail'>
                <h2>{p.title}</h2>
                {p.detail && (
                  <div
                    className='package-content container'
                    dangerouslySetInnerHTML={{
                      __html: md.render(p.detail),
                    }}
                  ></div>
                )}
                <button className='btn btn-1' size='sm'>
                  <Link href='/GetQuote'>
                    <a style={{ color: '#fff', textDecoration: 'none' }}>
                      Get a Quote
                    </a>
                  </Link>
                </button>
              </Col>
            </Row>
          ))}
      </Container>
    </div>
  )
}

export default Package
