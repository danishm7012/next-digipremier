import Link from "next/link";
import Meta from "../../components/Meta";
import MarkdownIt from "markdown-it";
import Image from "next/image";
import { Container } from "react-bootstrap";

const md = new MarkdownIt();

const Service = ({ service }) => {
  const { url, alternativeText, height, width } = service.image;
  return (
    <div className="section">
      <Meta
        title={service.metaTitle}
        description={service.metaDescription}
        keywords={service.metaKeyword}
      />
      <Container>
        <div className="section-title">
          <h1>{service.title}</h1>
        </div>
        <div className="container p-4 back-to-home ">
          <Link href="/">
            <a className="btn-1">Go Back</a>
          </Link>
        </div>
        <div
          className="service-content container"
          dangerouslySetInnerHTML={{ __html: md.render(service.detail) }}
        ></div>
        <br />
      </Container>
    </div>
  );
};

export const getStaticProps = async (context) => {
  const res = await fetch(
    `https://cms-digipremier.herokuapp.com/services/${context.params.slug}`
  );

  const service = await res.json();

  return {
    props: {
      service,
    },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch(`https://cms-digipremier.herokuapp.com/services`);

  const services = await res.json();

  const slugs = services.map((service) => service.slug);
  const paths = slugs.map((slug) => ({ params: { slug: slug.toString() } }));

  return {
    paths,
    fallback: false,
  };
};

export default Service;
