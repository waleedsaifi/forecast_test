import React from "react";
import "./index.css";
import { Box, Typography, Grid } from "@mui/material";

export default function index({ data, setSelectedCity }) {
  return (
    <Grid onClick={() => setSelectedCity(data)}>
      <Box className="card_main">
        <Typography className="card_txt">{data} </Typography>
      </Box>
    </Grid>
  );
}
