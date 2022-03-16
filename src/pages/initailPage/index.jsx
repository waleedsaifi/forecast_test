import { Typography, Box, Grid } from "@mui/material";
import React, { useEffect } from "react";
import Header from "../../components/header";
import CityCard from "../../components/cityCard";
import "./index.css";
import { Cities } from "../../data/data";

export default function Index() {
  const [cities] = React.useState(getRandomInt(Cities, 18));

  function getRandomInt(cities, count) {
    let shuffled = cities.sort(() => 0.5 - Math.random());
    let selected = shuffled.slice(0, count);
    return selected;
  }

  return (
    <Box>
      <Header />
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
        {cities.map((x) => (
          <Grid item xs={2}>
            <CityCard data={x} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
