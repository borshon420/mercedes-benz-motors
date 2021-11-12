import React, { useEffect, useState } from "react";
import { Card, Container, Button } from "react-bootstrap";
import Navigation from "../../Shared/Navigation/Navigation";
import useAuth from "../../../hooks/useAuth";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";
import "./BuyNow.css";
import exploreLogo from "../../../images/logo/benz-motors.png";

const BuyNow = () => {
  const { user } = useAuth();
  const [details, setDetails] = useState({});
  const { register, handleSubmit } = useForm();
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://powerful-forest-52418.herokuapp.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setDetails(data));
  }, []);

  const onSubmit = (data) => {
    fetch(`https://powerful-forest-52418.herokuapp.com/orders`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.insertedId) {
          alert("Orders Proceed Successfully");
        }
      });
    console.log(data);
  };
  return (
    <>
      <div>
        <Navigation></Navigation>
      </div>
      <div className="product-info">
        <div className="product-details">
          <Container>
            <Card className="buying-card">
              <Card.Img variant="top" src={details.img} />
              <Card.Body>
                <Card.Title>{details.name}</Card.Title>
                <Card.Text>{details.description}</Card.Text>
                <Card.Title>Price: ${details.price}</Card.Title>
              </Card.Body>
            </Card>
          </Container>
        </div>
        <div className="buying-form">
          <div>
            <img style={{ height: "100px" }} src={exploreLogo} alt="" />
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              defaultValue={user.displayName}
              {...register("name", { required: true, maxLength: 20 })}
              placeholder="Name"
            />
            <input
              defaultValue={user.email}
              {...register("email")}
              placeholder="Username or Email"
            />
            {/* <input type="text" {...register("address")} placeholder="address" required/> */}

            <input
              type="text"
              {...register("address")}
              placeholder="Address"
              required
            />
            <input
              type="number"
              {...register("phone")}
              placeholder="Phone"
              required
            />
            <input
              style={{
                backgroundColor: "#4971FF",
                border: "none",
                color: "white",
                fontWeight: "bold",
              }}
              type="submit"
              value="Buy Now"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default BuyNow;
