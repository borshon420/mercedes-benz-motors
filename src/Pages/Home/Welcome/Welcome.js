import React from "react";
import { Carousel } from "react-bootstrap";
import img1 from "../../../images/banner/banner.jpg";
import img2 from "../../../images/banner/banner2.jpg";
import img3 from "../../../images/banner/banner3.jpg";
import './Welcome.css';

const Welcome = () => {
  return (
    <div>
      <div>
        <h1>
          WELCOME TO{" "}
          <span style={{ color: "#FFB129" }}>MERCEDES BENZ MOTORS</span>
        </h1>
        <p>
          With specialists on hand to help with any part of the car shopping or
          vehicle ownership experience, Motors provides financing,
          <br />
          car service and a great selection of vehicles for luxury car shoppers
          in Chicago, IL. Motors is ultimate Car Dealer
        </p>
      </div>
      <div>
        <Carousel>
          <Carousel.Item>
            <img className="d-block w-100" src={img1} alt="First slide" />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={img2} alt="Second slide" />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={img3} alt="Third slide" />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="qeustion-content">
          <h2>HAVE A QUESTIONS? FEEL FREE TO ASK...</h2>
          <h4>+1 878-9674-4455</h4>
      </div>
    </div>
  );
};

export default Welcome;
