import Link from 'next/link'
import Meta from '../../components/Meta'
import MarkdownIt from 'markdown-it'
import Image from 'next/image'

const md = new MarkdownIt()

const Service = ({ service }) => {
  const { url, alternativeText, height, width } = service.image
  return (
    <div className='section'>
      <Meta
        title={service.metaTitle}
        description={service.metaDescription}
        keywords={service.metaKeyword}
      />

      <div className='section-title'>
        <h1>{service.title}</h1>
      </div>
      <div className='container p-4'>
        <Link href='/'>Go Back</Link>
      </div>
      <div
        className='service-content container'
        dangerouslySetInnerHTML={{ __html: md.render(service.detail) }}
      ></div>
      <br />
    </div>
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
