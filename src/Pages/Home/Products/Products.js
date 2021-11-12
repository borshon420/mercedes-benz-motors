import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Product from "../Product/Product";
import "./Products.css";

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://powerful-forest-52418.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div>
      <div className="my-5 text-content">
        <h2>
          RECENT <span style={{ color: "#FFB129" }}>CARS</span>
        </h2>
        <p>
          Mercedes-Benz traces its origins to Karl Benz's
          <br /> creation of the first internal combustion engine in a car, seen
          in the Benz Patent
          <br /> Motorwagen – financed by Bertha Benz's dowry
        </p>
      </div>
      <Container>
        <div className="products-container">
          {products.map((product) => (
            <Product key={product._id} product={product}></Product>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Products;
