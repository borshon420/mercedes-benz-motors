import React from "react";
import "./Footer.css";
import { Container } from "react-bootstrap";
const Footer = () => {
  return (
    <div>
      <div className="footer-container">
        <Container className="footer-container-2">
          <div>
            <img style={{ height: "100px" }} src="" alt="" />
          </div>
          <div>
            <div className="mb-3 me-2">
              <h5>Sales Hours</h5>
              <hr />
            </div>
            <p>Monday – Friday: 09:00AM – 09:00PM</p>
            <p>Saturday: 09:00AM – 07:00PM</p>
            <p>Sunday: Closed</p>
          </div>
          <div>
            <div className="mb-3 me-2">
              <h5>Service Hours</h5>
              <hr />
            </div>
            <p>Monday – Friday: 09:00AM – 09:00PM</p>
            <p>Saturday: 09:00AM – 07:00PM</p>
            <p>Sunday: Closed</p>
          </div>
          <div>
            <div className="mb-3 me-2">
              <h5>Parts Hours</h5>
              <hr />
            </div>
            <p>Monday – Friday: 09:00AM – 09:00PM</p>
            <p>Saturday: 09:00AM – 07:00PM</p>
            <p>Sunday: Closed</p>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Footer;