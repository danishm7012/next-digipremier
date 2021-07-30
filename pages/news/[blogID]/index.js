import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import { Col, Row, Container, Image, Button } from "react-bootstrap";
import blogs from "../../../companiesData/BlogsData";
// import { Blogs } from "../../../companydata/blogs";
import Link from "next/link";
import Meta from "../../../components/Meta";

const index = () => {
  const router = useRouter();
  const { blogID } = router.query;
  const [Blog, setBlog] = useState({});
  useEffect(() => {
    setBlog(blogs.find((b) => b.slug === blogID));
  }, [blogID]);
  return (
    <div className="section">
      <Container>
        <Meta
          title={`${Blog.title}- ProGcc Services`}
          description="Stay Update With Our Company"
        />

        <Row>
          <Col>
            <Link href={`/news`}>
              <button className="btn btn-1">
                <i class="fas fa-caret-left"></i> Back
              </button>
            </Link>
          </Col>
        </Row>
        <br />
        <Row>
          <Image
            style={{ height: "90vh", width: "100%" }}
            src={Blog.image}
            alt={Blog.title}
          />
        </Row>
        <br />
        <Row>
          <Col className=" py-2">
            <h1>{Blog.title}</h1>
            <strong>
              <p style={{ color: "#c11e8a" }}>
                {Blog.auther} | {Blog.date}
              </p>
            </strong>
            <p className="text-justify text-white p-2">{Blog.details}</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default index;
