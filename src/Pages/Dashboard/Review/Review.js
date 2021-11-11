import React from 'react';
import useAuth from '../../../hooks/useAuth';
import { useForm } from "react-hook-form";
import './Review.css';

const Review = () => {
    const {user} = useAuth();
  const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        fetch(`http://localhost:5000/reviews`, {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(data),
        })
          .then((res) => res.json())
          .then((result) => {
            if (result.insertedId) {
              alert("Review Proceed Successfully");
            }
          });
        console.log(data)
      };
    return (
        <div>
            <h1>All reviews here</h1>
            <div className="review-form">
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
          

          <textarea
            type="text"
            {...register("description")}
            placeholder="Write about your experiance"
            required
          />
          <input
            type="number"
            {...register("rattings")}
            placeholder="Rattings"
            required
          />
          
          
          <input style={{
                backgroundColor: "#232628",
                border: "none",
                color: "white",
                fontWeight: "bold",
              }} 
              type="submit" 
              value="Give us review" />
        </form>
      </div>
        </div>
    );
};

export default Review;