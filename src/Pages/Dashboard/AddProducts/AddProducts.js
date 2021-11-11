import React from 'react';
import { useForm } from "react-hook-form";
import './AddProduct.css';



const AddProducts = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        fetch(`http://localhost:5000/products`, {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(data),
        })
          .then((res) => res.json())
          .then((result) => {
            if (result.insertedId) {
              alert("Product added successfully");
            }
          });
        console.log(data)
      };
    return (
        <div>
            <h1>Add a products</h1>
            <div className="buying-form">
      <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            {...register("name")}
            placeholder="Product Name"
            required
          />
          <input
            type="text"
            {...register("img")}
            placeholder="Please send a image link of car"
            required
          />
          <input
            type="text"
            {...register("description")}
            placeholder="Product description"
            required
          />
          <input
            type="text"
            {...register("price")}
            placeholder="Price"
            required
          />          
          <input style={{
                backgroundColor: "#232628",
                border: "none",
                color: "white",
                fontWeight: "bold",
              }} 
              type="submit" 
              value="Add a Product" />
        </form>
      </div>
        </div>
    );
};

export default AddProducts;