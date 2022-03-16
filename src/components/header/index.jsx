import React from "react";
import { Grid, Typography } from "@mui/material";
import "./index.css";
import DateTime from "../dateTime";
export default function index() {
  return (
    <Grid container justifyContent="space-between" className="header_bg">
      <Grid item>
        <DateTime></DateTime>
        {/* <Typography className="header_txt">3:25 PM</Typography> */}
      </Grid>
      <Grid item className="header_right">
        <Typography className="header_txt">Search</Typography>
        <Typography className="header_txt" ml={4}>
          Settings
        </Typography>
      </Grid>
    </Grid>
  );
}
