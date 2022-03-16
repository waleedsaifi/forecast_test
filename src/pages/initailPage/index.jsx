import { Typography, Box, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import axios from "axios";
import SDays from "../../components/7Days";
import Header from "../../components/header";
import CityCard from "../../components/cityCard";
import WeatherComp from "../../components/weatherComp";
import "./index.css";
import { Cities } from "../../data/data";
import SettingModal from "../../components/settingsModal";
const API_URL = "https://api.openweathermap.org/data/2.5";
const CITIES_COUNT = 18;
const APP_ID = process.env.WeatherAPI || "920ecebafee2bcc8878d5e974c9b753d";

export default function Index() {
  const [selected, setSelected] = React.useState(false);
  const [selectedItem, setSelectedItem] = React.useState(0);
  const [citiesArray] = useState(getRandomInt(Cities, CITIES_COUNT));
  const [selectedCity, setSelectedCity] = useState();
  const [selectedCityData, setSelectedCityData] = useState({});
  const [open, setOpen] = React.useState(false);
  const [isClick, setIsClick] = React.useState(false);
  const [setting, setSetting] = React.useState();

  const [selectedCityForecast, setSelectedCityForecast] = useState([]);

  const [isCurrentWeather, setIsCurrentWeather] = useState(true);

  function getRandomInt(cities, count) {
    let shuffled = cities.sort(() => 0.5 - Math.random());
    let selected = shuffled.slice(0, count);
    return selected;
  }

  /****************Weather*******************/
  useEffect(async () => {
    if (selectedCity) {
      let res = await axios.get(
        `${API_URL}/weather?q=${selectedCity}&appid=${APP_ID}&units=${setting}`
      );
      setSelectedCityData(res.data);
    }
  }, [selectedCity, setting]);
  /***********************************/

  /****************Forcasting*******************/
  useEffect(async () => {
    if (!isCurrentWeather) {
      let res = await axios.get(
        `${API_URL}/forecast?q=${selectedCity}&appid=${APP_ID}`
      );
      setSelectedCityForecast(res.data?.list);
    }
  }, [isCurrentWeather]);
  /***********************************/

  return (
    <Box>
      <Header setOpen={setOpen} />
      <Grid container justifyContent="center" mt={25}>
        <Grid item>
          {!selectedCity ? (
            <Typography className="mian_txt">
              Pick a day to see the full forecast
            </Typography>
          ) : (
            <>
              {isCurrentWeather ? (
                <WeatherComp selectedCityData={selectedCityData} />
              ) : (
                <SDays selectedCityForecast={selectedCityForecast} />
              )}
            </>
          )}
        </Grid>
      </Grid>

      {selectedCity ? (
        <Grid container justifyContent="center" mt={3}>
          <Grid item sx={{ textAlign: "center" }}>
            <Typography className="card_txt">Forecast</Typography>
            <Box sx={{ display: "flex", marginTop: "20px" }}>
              <Box
                onClick={() => {
                  setIsCurrentWeather(true);
                }}
                className="forecard_btn"
              >
                <Typography className="card_txt">Now</Typography>
              </Box>
              <Box
                onClick={() => {
                  setIsCurrentWeather(false);
                }}
                className="forecard_btn"
              >
                <Typography className="card_txt">7 Days</Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      ) : null}

      <Grid
        container
        mt={20}
        justifyContent="center"
        spacing={2}
        sx={{ padding: "20px" }}
      >
        {citiesArray.map((x, index) => (
          <Grid item xs={2}>
            <CityCard
              data={x}
              index={index}
              setSelectedCity={setSelectedCity}
              setSelectedItem={setSelectedItem}
              setSelected={setSelected}
              selected={selected}
              selectedItem={selectedItem}
            />
          </Grid>
        ))}
      </Grid>
      <SettingModal open={open} setOpen={setOpen} setSetting={setSetting} />
    </Box>
  );
}
