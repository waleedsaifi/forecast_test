import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Time from "../dateTime";
import "./index.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "black",
  border: "2px solid #0a84ff",
  borderRadius: "10px",
  boxShadow: 24,
  p: 3,
  minWidth: "500px",
  minHeight: "350px",
};

export default function TransitionsModal({ open, setOpen, setSetting }) {
  const handleClose = () => setOpen(false);
  const units = ["standard", "metric", "imperial"];
  const time = ["AM/PM", "24h"];

  function handleSettings(data) {
    setSetting(data);
  }

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography className="modal_txt">Settings</Typography>
            <Typography className="modal_txt" mt={2}>
              Units
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-evenly",
                marginTop: "10px",
              }}
            >
              {units.map((x) => (
                <Typography
                  className="forecard_btn2"
                  onClick={() => handleSettings(x)}
                >
                  {x}
                </Typography>
              ))}
            </Box>
            <Typography className="modal_txt" mt={2}>
              Time
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                marginTop: "10px",
              }}
            >
              {time.map((x) => (
                <Typography
                  className="forecard_btn2"
                  onClick={() => handleSettings(x)}
                >
                  {x}
                </Typography>
              ))}
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                marginTop: "45px",
              }}
            >
              <Typography
                className="forecard_btn2"
                onClick={() => setOpen(false)}
              >
                Cancel
              </Typography>
              <Typography
                className="forecard_btn2"
                ml={2}
                onClick={() => setOpen(false)}
              >
                Save
              </Typography>
            </Box>
            <Box sx={{ float: "right", marginTop: "20px" }}>
              <Time />
            </Box>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
