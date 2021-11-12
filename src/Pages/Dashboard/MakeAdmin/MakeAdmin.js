import { Button, TextField } from "@mui/material";
import React, { useState } from "react";

const MakeAdmin = () => {
  const [email, setEmail] = useState("");

  const handleOnBlur = (e) => {
    const user = { email };
    
    fetch("https://powerful-forest-52418.herokuapp.com/users/admin", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          
          alert("Created admin successfully");
        }
      });
    setEmail(e.target.value);
  };

  const handleAdminSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <h1>Make an Admin</h1>
      <form onSubmit={handleAdminSubmit}>
        <TextField
          sx={{ width: "25%" }}
          label="Email"
          type="email"
          onBlur={handleOnBlur}
          variant="standard"
        />
        <Button
          style={{ backgroundColor: "#232628" }}
          type="submit"
          variant="contained"
        >
          Make Admin
        </Button>
      </form>
    </div>
  );
};

export default MakeAdmin;
