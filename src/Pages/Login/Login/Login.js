import React, { useState } from 'react';
import { Button, Container, Grid, TextField, Typography, CircularProgress, Alert } from "@mui/material";
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import { NavLink } from 'react-router-dom';
import car from '../../../images/login/1.svg';

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { signInUsingGoogle, setIsLoading, loginUser, isLoading, user, setError } = useAuth();
  const location = useLocation();
  const history = useHistory();

  const handleOnChnage = e => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = {...loginData};
    newLoginData[field] = value;
    console.log(newLoginData);
    setLoginData(newLoginData);
  }

  const handleLoginSubmit = (e) => {
      
    loginUser(loginData.email, loginData.password, location, history)
      e.preventDefault();
  };

  const redirect_uri = location.state?.from || "/";

  const handleGoogleLogin = () => {
    setIsLoading(true);
    signInUsingGoogle()
      .then((result) => {
        history.push(redirect_uri);
      })
      .finally(() => setIsLoading(false));
  };
    return (
        <div>
             <Container>
      <Grid container spacing={2} sx={{mt: 10}}>
        <Grid item xs={12} md={6} sx={{mt:8}}>
          <Typography variant="body1" gutterBottom>
            Login
          </Typography>
          <form onSubmit={handleLoginSubmit}>
            <TextField
              sx={{width: '75%', m:1}}
              id="standard-basic"
              label="Your Email"
              name="email"
              onChange={handleOnChnage}
              variant="standard"
            />
            <TextField
              sx={{width: '75%', m:1}}
              id="standard-basic"
              label="Your Password"
              type="password"
              name="password"
              onChange={handleOnChnage}
              variant="standard"
            />
            <Button style={{backgroundColor: '#232628', borderRadius: '0px'}} sx={{width: '75%', m:1}} type="Submit" variant="contained">Login</Button>
            <NavLink style={{textDecoration: 'none'}} to="/register">
            <Button style={{fontWeight: 'bold'}} variant="text">New User? Please Register</Button>
            </NavLink>
            {isLoading && <CircularProgress />}
          
          </form>
        </Grid>
        <Grid item xs={12} md={6}>
          <img style={{width: '100%'}} src={car} alt="" />
        </Grid>
      </Grid>
    </Container>
            <div style={{display: 'none'}}>
            <h1>Please Login</h1>
            <button onClick={handleGoogleLogin}>Login using google</button>
            </div>
        </div>
    );
};

export default Login;