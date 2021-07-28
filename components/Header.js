import { Nav, Navbar, Container, NavDropdown, Button } from "react-bootstrap";
import HeaderTop from "./TopCTA";
import Link from "next/link";

const Header = () => {
  return (
    <>
      <HeaderTop />
      <Navbar
        collapseOnSelect
        className="navbar"
        expand="lg"
        style={{
          backgroundColor: "#012c47",
        }}
        variant="dark"
        sticky="top"
      >
        <Container>
          <Navbar.Brand href="/">
            <img src="/images/logo.png" alt="logo" height="50" width="200" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto text-center">
              <Nav.Link href="/" className="links-nav">Home</Nav.Link>

              <NavDropdown
                className="links-nav"
                style={{ marginRight: "0px", color: "#fff" }}
                title="Digital Marketing"
                id="collasible-nav-dropdown"
                
              >
                <NavDropdown.Item>
                  <Link href="/organic-seo-services">Organic SEO </Link>
                </NavDropdown.Item>

                <NavDropdown.Item>
                  <Link href="/local-seo-services">Local SEO </Link>
                </NavDropdown.Item>

                <NavDropdown.Item>
                  <Link href="/search-engine-marketing-services-ppc">
                    SEM (PPC)
                  </Link>
                </NavDropdown.Item>

                <NavDropdown.Item>
                  <Link href="/email-marketing-services">Email Marketing</Link>
                </NavDropdown.Item>

                <NavDropdown.Item>
                  <Link href="/google-display-marketing-services">
                    Google Display Marketing
                  </Link>
                </NavDropdown.Item>

                <NavDropdown.Item>
                  <Link href="/best-smm-agency-services">SMM</Link>
                </NavDropdown.Item>

                <NavDropdown.Item>
                  <Link href="/best-lead-generation-services">
                    Lead Generation
                  </Link>
                </NavDropdown.Item>

                <NavDropdown.Item>
                  {" "}
                  <Link href="/complete-website-audit-services">
                    Website Audit
                  </Link>
                </NavDropdown.Item>

                <NavDropdown.Item>
                  <Link href="/">SEO Audit</Link>
                </NavDropdown.Item>

                <NavDropdown.Item>
                  {" "}
                  <Link href="/you-tube-seo-optimization-services">
                    YouTube video Optimization
                  </Link>
                </NavDropdown.Item>

                <NavDropdown.Item>
                  <Link href="/app-store-optimization-services">
                    App Store Optimization
                  </Link>
                </NavDropdown.Item>

                <NavDropdown.Item>
                  {" "}
                  <Link href="/website-content-creation-services">
                    Content Creation
                  </Link>
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown
                className="links-nav"
                style={{ marginRight: "0px" }}
                title="Development"
                id="collasible-nav-dropdown"
              >
                <NavDropdown.Item>
                  <Link href="/android-application-development">
                    Android Development
                  </Link>
                </NavDropdown.Item>

                <NavDropdown.Item>
                  {" "}
                  <Link href="/ios-app-development">iOS Development</Link>
                </NavDropdown.Item>

                <NavDropdown.Item>
                  <Link href="/software-development-company">
                    Software Development
                  </Link>
                </NavDropdown.Item>

                <NavDropdown.Item>
                  {" "}
                  <Link href="/">Web Development</Link>
                </NavDropdown.Item>

                <NavDropdown.Item>
                  <Link href="/custom-bespoke-software-development">
                    Bespoke Software Development
                  </Link>
                </NavDropdown.Item>

                <NavDropdown.Item>
                  <Link href="/front-end-development-agency">
                    Front-end Development
                  </Link>
                </NavDropdown.Item>

                <NavDropdown.Item>
                  <Link href="/">eCommerce Development</Link>
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown
                className="links-nav"
                style={{ marginRight: "0px" }}
                title="Designing"
                id="collasible-nav-dropdown"
              >
                <NavDropdown.Item>
                  <Link href="/custom-brand-logo-design-services">
                    Logo Designing
                  </Link>
                </NavDropdown.Item>

                <NavDropdown.Item>
                  <Link href="/web-designing-company">Web Designing</Link>
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown
                className="links-nav"
                style={{ marginRight: "0px" }}
                title="Video Production"
                id="collasible-nav-dropdown"
              >
                <NavDropdown.Item>
                  <Link href="">Training Videos </Link>
                </NavDropdown.Item>

                <NavDropdown.Item>
                  <Link href="">Products Videos</Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link href="">Fashion And Textile Ads</Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link href="">Short Movies</Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link href="">Model Portfolios</Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link href="">Commercial Shots</Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link href="">Commercial Shoots</Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link href="">2D Animations</Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link href="">Corporate Profile Videos</Link>
                </NavDropdown.Item>
              </NavDropdown>

              <Nav.Link className="links-nav"></Nav.Link>

              <Nav.Link href="/testimonial" className="links-nav">Testimonial</Nav.Link>

              <Nav.Link href="/team" className="links-nav">Team</Nav.Link>

              <Nav.Link className="links-nav">News Updates</Nav.Link>

              <button className="btn btn-1" size="sm">
                <Link href="/GetQuote">
                  <a style={{ color: "#fff", textDecoration: "none" }}>
                    Request a Quote
                  </a>
                </Link>
              </button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
