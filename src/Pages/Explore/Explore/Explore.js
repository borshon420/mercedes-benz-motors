import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Product from "../../Home/Product/Product";
import Footer from "../../Shared/Footer/Footer";
import Navigation from "../../Shared/Navigation/Navigation";
import './Explore.css';


const Explore = () => {
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        fetch('https://powerful-forest-52418.herokuapp.com/products/explore')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    return (
        <div>
            <Navigation></Navigation>
            <div>
                <div className="explore-content">
                <Container><h2>OUR RECENT <span style={{ color: "#4971FF" }}>CARS</span></h2></Container>
            </div>
        <Container>
        <div className="products-container my-5">
        {products.map((product) => (
          <Product 
          key={product._id} 
          product={product}
          ></Product>
        ))}
        </div>
        </Container>
    </div>
    <Footer></Footer>
        </div>
    );
};

export default Explore;