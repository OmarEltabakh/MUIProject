import React from "react";
import './Nav.module.css'
import logo from "../../Assets/Images/me.png"
// <=====================================>
import MenuIcon from '@mui/icons-material/Menu';
import { Avatar, Link, Typography, AppBar, Toolbar, IconButton, } from "@mui/material";
import { useTheme } from "@emotion/react";
// <=====================================>

const Nav = (props) => {
let {showDrawer} = props;

  let theme = useTheme();
  const drawerWidth = 240;
  return <>
    <AppBar sx={{ width: { md: `calc(100% - ${drawerWidth}px)` }, ml: { md: `${drawerWidth}px` }, }} position="static">
      <Toolbar>

        <IconButton
          onClick={() => {
            showDrawer()
          }}
          size="large"
          edge="start"
          sx={{ mr: 2, [theme.breakpoints.up('md')]: { display: "none" }, }}
        >
          <MenuIcon />
        </IconButton>

        <Link underline="none" color={"inherit"} sx={{ flexGrow: 1 }} href="">My Expenses</Link>

        <Typography mr={2} variant="p" color="white">Omar Mohamed</Typography>
        <Avatar alt="Remy Sharp" src={logo} />
      </Toolbar>
    </AppBar>

  </>
}


export default Nav;

