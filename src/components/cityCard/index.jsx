import React from "react";
import "./index.css";
import { Box, Typography, Grid } from "@mui/material";

export default function Index({ data, index, setSelectedCity }) {
  const [selected, setSelected] = React.useState(false);
  const [selectedItem, setSelectedItem] = React.useState(0);

  function handleSelect(id) {
    setSelectedItem(id);
    if (!selected === true) {
      setSelected(true);
    }
  }

  return (
    <Grid onClick={() => setSelectedCity(data)}>
      <Box
        className={
          selected
            ? selectedItem === index
              ? "card_main_after"
              : "card_main_before"
            : "card_main_before"
        }
        onClick={() => handleSelect(index)}
      >
        <Typography className="card_txt">{data} </Typography>
      </Box>
    </Grid>
  );
}
