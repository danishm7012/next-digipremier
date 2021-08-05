/* import { Container, Col, Row, Image } from "react-bootstrap";
import Link from "next/link";
import { Blogs } from "../../companydata/blogs";

const Blog = () => {
  return (
    <div className="section blogs-section">
      <Container>
        <h2 className="text-center">Blogs</h2>
        <br />
        <br />
        {Blogs.map((blog) => {
          return (
            <Row className="mt-5">
              <Col lg={6} sm={12} className="order-2 order-lg-1">
                <h3>{blog.title}</h3>
                <p className="m-2 py-2">
                  {blog.details.slice(0, 500)}...{" "}
                  <Link href={`/news/[blogID]`} as={`/news/${blog.slug}`}>
                    <a style={{ textDecoration: "none" }}>
                      <strong>Read more</strong>
                    </a>
                  </Link>{" "}
                  <br />
                  <br />
                  <strong>
                    {blog.auther} | {blog.date}
                  </strong>
                </p>
                <br />
                <br />
              </Col>
              <Col lg={6} sm={12} className="text-center order-1 order-lg-2">
                <Image
                  src={blog.image}
                  height="80%"
                  width="100%"
                  rounded
                ></Image>
                <br />
                <br />
              </Col>
            </Row>
          );
        })}
        <br />
        <br />
        <br />
      </Container>
    </div>
  );
};

export default Blog;
 */
