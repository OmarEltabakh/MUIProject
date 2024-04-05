import React from "react";
import './NotFound.module.css'
import { Box, Typography } from "@mui/material";
import { useTheme } from "@emotion/react";

export default function NotFound() {

const theme = useTheme()
  return <>
  <Box>
    <Typography color={theme.palette.error.main} variant="h3" >Not found</Typography>
  </Box>
  
  </>
}
