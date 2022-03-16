import React from "react";
import { Grid, Typography } from "@mui/material";
import "./index.css";
import DateTime from "../dateTime";
import SettingModal from "../settingsModal";
export default function Index({ setOpen }) {
  const handleOpen = () => setOpen(true);

  return (
    <>
      <Grid container justifyContent="space-between" className="header_bg">
        <Grid item>
          <DateTime></DateTime>
          {/* <Typography className="header_txt">3:25 PM</Typography> */}
        </Grid>
        <Grid item className="header_right">
          <Typography className="header_txt" style={{ cursor: "pointer" }}>
            Search
          </Typography>
          <Typography
            className="header_txt"
            style={{ cursor: "pointer" }}
            ml={4}
            onClick={handleOpen}
          >
            Settings
          </Typography>
        </Grid>
      </Grid>
    </>
  );
}
