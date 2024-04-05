import React, { useState } from "react";
import './Create.module.css'
import { Box, Button, InputAdornment, TextField, styled } from "@mui/material";
import { purple } from "@mui/material/colors";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { useNavigate } from "react-router-dom";

export default function Create() {

  let navigate = useNavigate();
  const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: theme.palette.myColor.main,
    '&:hover': {
      backgroundColor: theme.palette.myColor.main,
    },
  }));

  // state for input<==============================>
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  // state for input<==============================>
  return <>
    <Box autoComplete="off" sx={{ width: "380px" }} component="form">

      
      {/* input<====================================> */}
      <TextField
        onChange={(e) => {
          setTitle(e.target.value)
        }}
        fullWidth={true}
        label="Transaction Title"
        id="filled-start-adornment"
        sx={{ mt: "22px", display: "block" }}
        InputProps={{
          startAdornment: <InputAdornment position="start">👉</InputAdornment>,
        }}
        variant="filled"
      />
      <TextField
        onChange={(e) => {
          setPrice(Number(e.target.value))
        }}
        fullWidth={true}
        label="Amount"
        id="filled-start-adornment"
        sx={{ mt: "22px", display: "block" }}
        InputProps={{
          startAdornment: <InputAdornment position="start">$</InputAdornment>,
        }}
        variant="filled"
      />

      <ColorButton sx={{ mt: "20px" }} variant="contained" onClick={() => {
        fetch("  http://localhost:3100/myData", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ title, price }),
        })
          .then(() =>
            navigate("/")
          )
      }}>
        SUBMIT
        <KeyboardArrowRightIcon />
      </ColorButton>
      {/* input<====================================> */}

    </Box>

  </>
}
