import { Button, Grid, Container } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";
import notfoundLogo from "../../images/notfound/error.jpg";

const NotFound = () => {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <Container>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6} sx={{ mt: 30 }}>
              <h2>PAGE NOT FOUND</h2>
              <Link style={{ textDecoration: "none" }} to="/home">
                <Button
                  style={{ backgroundColor: "#232628", borderRadius: "0px" }}
                  variant="contained"
                >
                  {" "}
                  Back To Home
                </Button>
              </Link>
            </Grid>
            <Grid item xs={12} md={6}>
              <img style={{ width: "100%" }} src={notfoundLogo} alt="" />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  );
};

export default NotFound;
