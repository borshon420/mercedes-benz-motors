import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Product from "../../Home/Product/Product";
import Navigation from "../../Shared/Navigation/Navigation";


const Explore = () => {
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/products/explore')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    return (
        <div>
            <Navigation></Navigation>
            <div>
            <div className="my-5">
            <h2>Our Cars</h2>
        </div>
        <Container>
        <div className="products-container">
        {products.map((product) => (
          <Product 
          key={product._id} 
          product={product}
          ></Product>
        ))}
        </div>
        </Container>
    </div>
        </div>
    );
};

export default Explore;