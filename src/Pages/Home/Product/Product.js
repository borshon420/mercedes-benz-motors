import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Product.css";

const Product = ({ product }) => {
  const { name, description, img, price, _id } = product;

  return (
    <div>
      <Card className="card-content">
        <Card.Img style={{ height: "300px" }} variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Card.Title style={{ display: "inline-block", marginRight: "80px" }}>
            Price: ${price}
          </Card.Title>
          <Link to={`/buynow/${_id}`}>
            <Button
              style={{
                backgroundColor: "#4971FF",
                color: "white",
                borderRadius: "0px",
                padding: "10px 25px",
              }}
              variant="none"
            >
              Buy Now
            </Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Product;
