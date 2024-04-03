import React from "react";
import "./footer.css";

import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";

import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";

const quick_links = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/about",
    display: "About",
  },
  {
    path: "/tours",
    display: "Tours",
  },
];

const quick_links2 = [
  {
    path: "/galleryImages",
    display: "Gallery",
  },
  {
    path: "/login",
    display: "Login",
  },
  {
    path: "/register",
    display: "Register",
  },
];

const Footer = () => {

  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="3">
            <div className="logo">
              <img src={logo} alt="" />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Commodi, enim.
              </p>

              <div className="social_links d-flex align-items-center gap-4">
                <span>
                <a href="https://www.youtube.com/@amankumar-iy5cm">
             <i className="ri-youtube-fill"></i>
                </a>
                </span>
                <span>
                <a href="https://github.com/Amanydav">
                       <i className="ri-github-fill"></i>
                   </a>
                </span>
                <span>
                <a href="https://www.facebook.com/profile.php?id=100015732731302&mibextid=ZbWKwL">
               <i className="ri-facebook-circle-fill"></i>
                </a>
                </span>
                <span>
                <a href="https://www.instagram.com/_prince___y_a_d_a_v/?igshid=OGQ5ZDc2ODk2ZA==">
                <i className="ri-instagram-fill"></i>
                  </a>
                </span>
              </div>
            </div>
          </Col>
          <Col lg="3">
            <h5 className="footer_link-title">Discover</h5>

            <ListGroup className="footer_quick-links">
              {quick_links.map((item, index) => (
                <ListGroupItem key={index} className="ps-0 border-0">
                  <Link to={item.path}>{item.display}</Link>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>
          <Col lg="3">
            <h5 className="footer_link-title">Quick Links</h5>

            <ListGroup className="footer_quick-links">
              {quick_links2.map((item, index) => (
                <ListGroupItem key={index} className="ps-0 border-0">
                  <Link to={item.path}>{item.display}</Link>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>
          <Col lg="3">
            <h5 className="footer_link-title">Contact</h5>

            <ListGroup className="footer_quick-links">
              <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-3">
                <h6 className="mb=0 d-flex align-items-center gap-2">
                  <span>
                    <i className="ri-map-pin-fill"></i>
                  </span>
                  Address:
                </h6>

                <p className="mb-0">Patna Bihar</p>
              </ListGroupItem>
              <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-3">
                <h6 className="mb=0 d-flex align-items-center gap-2">
                  <span>
                  <i className="ri-mail-fill"></i>
                  </span>
                  Email:
                </h6>

                <p className="mb-0">ak7519240651@gmail.com</p>
              </ListGroupItem>
              <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-3">
                <h6 className="mb=0 d-flex align-items-center gap-2">
                  <span>
                  <i className="ri-phone-fill"></i>
                  </span>
                  Phone:
                </h6>

                <p className="mb-0">+91 7061188736</p>
              </ListGroupItem>
            </ListGroup>
          </Col>
          <Col lg='12' className="text-center pt-5">
            <p className="copyright">Copyrights {year} All rights reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
