import React from "react";
import "./index.css";
import { Box, Typography } from "@mui/material";

export default function index({ data }) {
  return (
    <Box className="card_main">
      <Typography className="card_txt">{data}</Typography>
    </Box>
  );
}
