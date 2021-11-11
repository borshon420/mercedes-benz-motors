import React from "react";
import { Carousel } from "react-bootstrap";
import img1 from "../../../images/banner/banner.jpg";
import img2 from "../../../images/banner/banner2.jpg";
import img3 from "../../../images/banner/banner3.jpg";
import './Welcome.css';

const Welcome = () => {
  return (
    <div>
      <div className="my-5">
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
              <h3>Mercedes-Benz CLK</h3>
              <p>France and Europe, especially in winter. His customers included the Rothschild family and other well</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={img2} alt="Second slide" />

            <Carousel.Caption>
              <h3>Mercedes-Benz YC</h3>
              <p>But Jellinek's plans went further, in as early as 1901, he was selling Mercedes cars in the "New Wor</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={img3} alt="Third slide" />

            <Carousel.Caption>
              <h3>Mercedes-Benz CLA</h3>
              <p>
              Daimler automobiles among the highest circles of society in his adopted home. At the time, it was a
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
