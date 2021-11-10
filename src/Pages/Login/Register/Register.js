import { Button, CircularProgress, Container, Grid, TextField, Typography, Alert } from "@mui/material";
import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const Register = () => {
    const [loginData, setLoginData] = useState({});
    const { registerUser, user, isLoading, setError} = useAuth();
    const history = useHistory()

  const handleOnBlur = e => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = {...loginData};
    newLoginData[field] = value;
    setLoginData(newLoginData);
  }

  const handleLoginSubmit = (e) => {
    registerUser(loginData.email, loginData.password, loginData.name, history)
    e.preventDefault();
  };
    return (
        <Container>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} sx={{mt:8}}>
          <Typography variant="body1" gutterBottom>
            Register
          </Typography>
          {!isLoading && <form onSubmit={handleLoginSubmit}>
            <TextField
              sx={{width: '75%', m:1}}
              id="standard-basic"
              label="Your Name"
              name="name"
              onBlur={handleOnBlur}
              variant="standard"
            />
            <TextField
              sx={{width: '75%', m:1}}
              id="standard-basic"
              label="Your Email"
              type="email"
              name="email"
              onBlur={handleOnBlur}
              variant="standard"
            />
            <TextField
              sx={{width: '75%', m:1}}
              id="standard-basic"
              label="Your Password"
              type="password"
              name="password"
              onBlur={handleOnBlur}
              variant="standard"
            />
            
            <Button style={{ backgroundColor: "#37B5BB" }} sx={{width: '75%', m:1}} type="Submit" variant="contained">Register</Button>
            <NavLink style={{textDecoration: 'none'}} to="/login">
            <Button variant="text">Already Registered? Please Login</Button>
            </NavLink>
          </form>}
          {isLoading && <CircularProgress />}
          {user?.email && <Alert severity="success">User Created Successfully!</Alert>}
        </Grid>
        
      </Grid>
    </Container>
    );
};

export default Register;