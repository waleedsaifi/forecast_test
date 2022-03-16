import React from "react";
import { Grid, Typography } from "@mui/material";
import { ReactComponent as YourSvg } from "../../images/icon-weather/weather-sunny.svg";
export default function index() {
  return (
    <>
      <Grid container justifyContent="center" spacing={2}>
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
        <Grid item mt={5} xs={12} sx={{ textAlign: "center" }}>
          <Typography className="card_txt">Forecast</Typography>
        </Grid>
      </Grid>
    </>
  );
}
