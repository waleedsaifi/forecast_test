import React from "react";
import { Grid, Typography, Box } from "@mui/material";
import { ReactComponent as YourSvg } from "../../images/icon-weather/weather-sunny.svg";
import "./index.css";

export default function index({ selectedCityForecast }) {
  return (
    <>
      <Grid container justifyContent="space-evenly" mt={20}>
        {selectedCityForecast.slice(0, 6).map((x) => (
          <Grid item sx={{ textAlign: "center", marginTop: "20px" }} xs={1}>
            {/* <Typography className="days_txt">{x.day}</Typography>
            <Box sx={{ width: "150px", height: "150px" }}>
              <YourSvg fill="yel low" />
            </Box> */}
            <Typography className="days_txt">{x.weather[0]?.main}</Typography>
            <Typography className="days_txt">
              H: {x?.main?.temp_max}/ L: {x?.main?.temp_min}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </>
  );
}
