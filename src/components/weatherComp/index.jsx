import React, { useState, useEffect } from "react";
import { Grid, Typography, Box } from "@mui/material";
import { ReactComponent as SunnySvg } from "../../images/icon-weather/weather-sunny.svg";
import { ReactComponent as CloudySvg } from "../../images/icon-weather/weather-cloudy.svg";
import { ReactComponent as FogSvg } from "../../images/icon-weather/weather-fog.svg";
import { ReactComponent as HailSvg } from "../../images/icon-weather/weather-hail.svg";

import "./index.css";
export default function Index({ selectedCityData }) {
  console.log("selectedCityData in Compoonet: ", selectedCityData);

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
          <Typography className="card_txt">{selectedCityData?.name}</Typography>
          {/* // {RenderSvg(selectedCityData?.weather[0]?.main)} */}
          <Typography className="card_txt2">
            {/* {selectedCityData ? selectedCityData?.weather[0]?.main : ""} */}
          </Typography>
        </Grid>
        <Grid item>
          <Typography className="card_txt2">
            Temp: {selectedCityData?.main?.temp}
          </Typography>
          <Typography className="card_txt2">
            Feels Like: {selectedCityData?.main?.feels_like}
          </Typography>
          <Typography className="card_txt2">
            Humidity: {selectedCityData?.main?.humidity}%
          </Typography>
          <Typography className="card_txt2">
            Sunrise: {selectedCityData?.sys?.sunrise}
          </Typography>
          <Typography className="card_txt">
            Sunset: {selectedCityData?.sys?.sunset}
          </Typography>
        </Grid>
      </Grid>
    </>
  );
}
