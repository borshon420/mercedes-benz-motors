import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  const { name, description, img, price, _id } = product;
  
  return (
    <div>
      <Card>
        <Card.Img style={{height: '300px'}} variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            {description}
          </Card.Text>
          <Card.Title>Price: ${price}</Card.Title>
          <Link to={`/buynow/${_id}`}><Button  variant="primary">Buy Now</Button></Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Product;
