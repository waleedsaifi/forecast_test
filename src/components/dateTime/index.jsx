import React, { useState, useEffect } from "react";
import { Typography } from "@mui/material";
export const DateTime = () => {
  var [date, setDate] = useState(new Date());

  useEffect(() => {
    var timer = setInterval(() => setDate(new Date()), 1000);
    return function cleanup() {
      clearInterval(timer);
    };
  });

  return (
    <div>
      <Typography className="header_txt">
        {date.toLocaleTimeString()}
      </Typography>
    </div>
  );
};

export default DateTime;
