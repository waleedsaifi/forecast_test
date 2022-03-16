import React from "react";
import { Grid, Typography, Box } from "@mui/material";
import { ReactComponent as SunnySvg } from "../../images/icon-weather/weather-sunny.svg";
import { ReactComponent as CloudySvg } from "../../images/icon-weather/weather-cloudy.svg";
import { ReactComponent as FogSvg } from "../../images/icon-weather/weather-fog.svg";
import { ReactComponent as HailSvg } from "../../images/icon-weather/weather-hail.svg";

import "./index.css";
export default function index({ selectedCityData, nanoToTime }) {
  let { name, main, sys, weather } = selectedCityData;
  console.log("selectedCityData in Compoonet: ", selectedCityData?.weather);

  function RenderSvg(param) {
    switch (param) {
      case "sunny":
        return <SunnySvg fill="yellow" />;
      case "Clouds":
        return <CloudySvg fill="white" />;
      case "fog":
        return <FogSvg fill="grey" />;
      case "hail":
        return <HailSvg fill="yellow" />;
      case "Mist":
        return <HailSvg fill="yellow" />;
      case "Clear":
        return <HailSvg fill="yellow" />;
      default:
        return <SunnySvg fill="yellow" />;
    }
  }

  return (
    <>
      <Grid container justifyContent="center" spacing={2} mt={20}>
        <Grid item sx={{ textAlign: "center" }}>
          <Typography className="card_txt">{name}</Typography>
          {RenderSvg(selectedCityData?.weather[0]?.main)}

          <Typography className="card_txt">
            {selectedCityData?.weather[0]?.main}
          </Typography>
        </Grid>
        <Grid item>
          <Typography className="card_txt">Temp: {main?.temp}</Typography>
          <Typography className="card_txt">
            Feels Like: {main?.feels_like}
          </Typography>
          <Typography className="card_txt">
            Humidity: {main?.humidity}%
          </Typography>
          <Typography className="card_txt">Sunrise: {sys?.sunrise}</Typography>
          <Typography className="card_txt">Sunset: {sys?.sunset}</Typography>
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
              <Typography className="card_txt">7 Days</Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
