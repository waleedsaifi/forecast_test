import React from "react";
import { Grid, Typography, Box } from "@mui/material";

export default function index({ setIsCurrentWeather, setIsClick, isClick }) {
  return (
    <Grid container justifyContent="center" mt={3}>
      <Grid item sx={{ textAlign: "center" }}>
        <Typography className="card_txt2">Forecast</Typography>
        <Box sx={{ display: "flex", marginTop: "20px" }}>
          <Box
            onClick={() => {
              setIsCurrentWeather(true);
              setIsClick("Now");
            }}
            className={
              isClick !== "Now" ? "forecard_btn_before" : "forecard_btn_after"
            }
          >
            <Typography className="card_txt2">Now</Typography>
          </Box>
          <Box
            onClick={() => {
              setIsCurrentWeather(false);
              setIsClick("7 Days");
            }}
            className={
              isClick !== "7 Days"
                ? "forecard_btn_before"
                : "forecard_btn_after"
            }
          >
            <Typography className="card_txt2">7 Days</Typography>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}
