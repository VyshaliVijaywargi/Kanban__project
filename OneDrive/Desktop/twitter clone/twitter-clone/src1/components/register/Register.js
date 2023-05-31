import React from "react";
import { Button, Grid, Paper, TextField } from "@mui/material";

function Register() {
  let paperstyle = {
    padding: 20,
    height: "70vh",
    width: 350,
    margin: "80px auto",
  };
  let box = { marginTop: "20px" };
  function submitted(){
    alert ('"Congratulations" ,you have successfully register')
  }

  return (
    <div>
      <Grid>
        <Paper elevation={20} style={paperstyle}>
          <h2>Registration</h2>
          <TextField
            label="Name"
            placeholder="Enter your Name"
            style={box}
            fullWidth
          />
          <TextField
            label="Email"
            type='email'
            placeholder="Enter your Email"
            style={box}
            fullWidth
          />
          <TextField
            label="Mobile No."
            placeholder="Enter your Mobile No."
            style={box}
            fullWidth
            type="number"
          />
          <TextField
            label="Create Password"
            placeholder="Enter your Password"
            style={box}
            fullWidth
            Password
          />
          <TextField
            label="Confirm Password"
            placeholder=" Password"
            style={box}
            fullWidth
          />
          <Button type="submit" color="primary" onClick={submitted}>
            Sign up
          </Button>
        </Paper>
      </Grid>
    </div>
  );
}

export default Register;
