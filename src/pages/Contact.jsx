import {
  Grid,
  MenuItem,
  Select,
  TextField,
  InputLabel,
  FormControl,
  Button,
  Container,
  Typography,
} from "@mui/material";

import React, { useState } from "react";

const Contact = () => {
  const [quantity, setQuantity] = useState("");
  const [emirates, setEmirates] = useState("");

  const handleQtyChange = (event) => {
    setQuantity(event.target.value);
  };
  const handleEmirateChange = (event) => {
    setEmirates(event.target.value);
  };
  console.log(quantity, emirates)
  return (
    <>
      <Container style={{maxWidth: 800, margin: 'auto', padding: '50px 30px'}}>
          <Typography gutterBottom variant="h5">
            Order Now
          </Typography> 
            <Typography variant="body2" component="p" gutterBottom>
            Kindly fill the form & we will deliver next day(AbuDhabi 2 days).
          </Typography>
          <form>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={8} md={8}>
                <TextField
                  label="Full Name"
                  type="text"
                  variant="outlined"
                  color="success"
                  placeholder="Enter Your Full Name"
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={12} sm={8} md={8}>
                <TextField
                  label="Email"
                  variant="outlined"
                  color="success"
                  type="email"
                  placeholder="Enter Your Email"
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={12} sm={8} md={8}>
                <TextField
                  label="Phone Number"
                  variant="outlined"
                  color="success"
                  type="number"
                  placeholder="018xxxxxxx"
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={12} sm={8} md={8}>
                <FormControl fullWidth>
                  <InputLabel>Quantity</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={quantity}
                    label="Quantity"
                    color="success"
                    onChange={handleQtyChange}
                    required
                  >
                    <MenuItem value={100}>1-100 AED</MenuItem>
                    <MenuItem value={200}>2-200 AED</MenuItem>
                    <MenuItem value={300}>3-300 AED</MenuItem>
                    <MenuItem value={400}>4-400 AED</MenuItem>
                    <MenuItem value={500}>5-500 AED</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={8} md={8}>
                <FormControl fullWidth>
                  <InputLabel>Emirates</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={emirates}
                    label="Emirates"
                    color="success"
                    onChange={handleEmirateChange}
                    required
                  >
                    <MenuItem value={10}>Dhaka - Free Delivery</MenuItem>
                    <MenuItem value={20}>Chittagong - Free Delivery</MenuItem>
                    <MenuItem value={30}>Kulna - Free Delivery</MenuItem>
                    <MenuItem value={40}>Rajshahi - Free Delivery</MenuItem>
                    <MenuItem value={50}>Jessore - Free Delivery</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={8} md={8}>
                <TextField
                  label="Message"
                  multiline
                  rows={5}
                  variant="outlined"
                  color="success"
                  type="text"
                  placeholder="Enter Your Message"
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={12} sm={8} md={8}>
                <Button
                  sx={{ fontWeight: 'bold', fontSize: 18 }}
                  type="submit"
                  variant="contained"
                  color="success"
                  fullWidth
                >
                  Submit Order
                </Button>
              </Grid>
            </Grid>
          </form>
      </Container>
    </>
  );
};

export default Contact;
