import React, { useState } from "react";
import './Layout.module.css'
import { Outlet } from "react-router-dom";
import Nav from "../Nav/Nav";
import SideBar from "../SideBar/SideBar";
import { Box } from "@mui/material";
import { useTheme } from "@emotion/react";

export default function Layout() {
  
  const showDrawer = () => { 
    setNoneOrBlock("block")
    setVariant("temporary")
   }

   const hideDrower = () => { 
    setNoneOrBlock("none");setVariant("permanent")
    }
  const theme = useTheme();

  const [noneOrBlock, setNoneOrBlock] = useState("none");

  const [variant, setVariant] = useState("permanent");
  
  
  return <>
  
  <Nav showDrawer={showDrawer}/>

  <Box component="main" marginLeft={"240px"} sx={{[theme.breakpoints.down('md')]: {marginLeft:"0"}, }} className = " d-flex justify-content-center  mt-5 "  >
 
  <Outlet/>
  </Box>

  <SideBar  {...{hideDrower,noneOrBlock,variant}}  />

  </>
}