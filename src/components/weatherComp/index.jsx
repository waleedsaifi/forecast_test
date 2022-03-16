import React from "react";
import { Grid, Typography, Box } from "@mui/material";
import { ReactComponent as YourSvg } from "../../images/icon-weather/weather-sunny.svg";
import "./index.css";
export default function index({ selectedCityData }) {
  console.log("selectedCityData in Compoonet: ", selectedCityData);
  return (
    <>
      <Grid container justifyContent="center" spacing={2} mt={20}>
        <Grid item sx={{ textAlign: "center" }}>
          <Typography className="card_txt">Orlando</Typography>
          <YourSvg />
          <Typography className="card_txt">Sunny</Typography>
        </Grid>
        <Grid item>
          <Typography className="card_txt">Temp:78</Typography>
          <Typography className="card_txt">Feels Like 80</Typography>
          <Typography className="card_txt">Humidity:100%</Typography>
          <Typography className="card_txt">Sunrise: 6:48 AM</Typography>
          <Typography className="card_txt">Sunset: 7:23 PM</Typography>
        </Grid>
      </Grid>
      <Grid container justifyContent="center" mt={3}>
        <Grid item sx={{ textAlign: "center" }}>
          <Typography className="card_txt">Forecast</Typography>
          <Box sx={{ display: "flex", marginTop: "20px" }}>
            <Box className="forecard_btn">
              <Typography className="card_txt">Now</Typography>
            </Box>
            <Box className="forecard_btn">
              <Typography className="card_txt">Now</Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
