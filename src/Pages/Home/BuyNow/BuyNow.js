import React, { useEffect, useState } from "react";
import { Card, Container, Button } from "react-bootstrap";
import { useParams } from "react-router";

const BuyNow = () => {
  const [details, setDetails] = useState({});
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:5000/products/${id}`)
      .then((res) => res.json())
      .then((data) => setDetails(data));
  }, []);
  return (
    <div>
      <Container>
        <Card style={{ width: "40rem" }}>
          <Card.Img variant="top" src={details.img} />
          <Card.Body>
            <Card.Title>{details.name}</Card.Title>
            <Card.Text>{details.description}</Card.Text>
            <Card.Title>Price: ${details.price}</Card.Title>
          </Card.Body>
          <Button  variant="primary">Buy Now</Button>
        </Card>
      </Container>
    </div>
  );
};

export default BuyNow;
