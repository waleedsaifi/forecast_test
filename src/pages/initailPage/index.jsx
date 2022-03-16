import { Typography, Box, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import axios from "axios";

import Header from "../../components/header";
import CityCard from "../../components/cityCard";
import "./index.css";
import { Cities } from "../../data/data";
import WeatherComp from "../../components/weatherComp";
const API_URL = "https://api.openweathermap.org/data/2.5";
const CITIES_COUNT = 18;
const APP_ID = process.env.WeatherAPI || "920ecebafee2bcc8878d5e974c9b753d";
let city = "Lahore";

export default function Index() {
  const [citiesArray] = useState(getRandomInt(Cities, CITIES_COUNT));
  const [selectedCity, setSelectedCity] = useState();

  function getRandomInt(cities, count) {
    let shuffled = cities.sort(() => 0.5 - Math.random());
    let selected = shuffled.slice(0, count);
    return selected;
  }

  useEffect(() => {
    if (selectedCity) {
      axios.get(`${API_URL}/weather?q=${selectedCity}&appid=${APP_ID}`);
    }
  }, [selectedCity]);

  return (
    <Box>
      <Header />
      <WeatherComp />
      <Grid container justifyContent="center" mt={25}>
        <Grid item>
          <Typography className="mian_txt">
            Pick a day to see the full forecast
          </Typography>
        </Grid>
      </Grid>
      <Grid
        container
        mt={20}
        justifyContent="center"
        spacing={2}
        sx={{ padding: "20px" }}
      >
        {citiesArray.map((x) => (
          <Grid item xs={2}>
            <CityCard data={x} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
