import { Typography, Box, Grid } from "@mui/material";
import React, { useEffect } from "react";
import Header from "../../components/header";
import CityCard from "../../components/cityCard";
import "./index.css";
import { Cities } from "../../data/data";

export default function Index() {
  const [cities, setCities] = React.useState([]);
  // function getRandomInt(cities, count) {
  //   let item = [];
  //   item = cities[Math.floor(Math.random() * count)];
  //   console.log("item", item);
  //   return item;
  // }

  useEffect(() => {
    let array = Cities[Math.floor(Math.random() * Cities.length)];
    console.log("array", array);
    // setCities()
  }, []);

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
        {Cities.map((x) => (
          <Grid item xs={2}>
            <CityCard data={x} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
