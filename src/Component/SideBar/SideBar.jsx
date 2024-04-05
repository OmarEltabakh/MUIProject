import React, { useContext } from "react";
import './SideBar.module.css'
import { Box, Divider, Drawer, IconButton, ListItem } from "@mui/material";
import { useTheme } from '@emotion/react';

//icons <====================================================>
import HomeSharpIcon from '@mui/icons-material/HomeSharp';
import CreateSharpIcon from '@mui/icons-material/CreateSharp';
import PersonSharpIcon from '@mui/icons-material/PersonSharp';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
//icons <====================================================>


//list <====================================================>
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { useLocation, useNavigate } from "react-router-dom";
import { darkModeCotext } from "../../Context/DarkModeContext";
import { Brightness4, Brightness7 } from "@mui/icons-material";
//list <====================================================>

export default function SideBar(props) {
  let { noneOrBlock, variant, hideDrower } = props;

  let { pathname } = useLocation();

  let navigate = useNavigate()

  const theme = useTheme();

  let { setMyMode } = useContext(darkModeCotext);
  const drawerWidth = 240;


  const myList = [
    { text: "Home", icon: <HomeSharpIcon />, path: "/" },
    { text: "Create", icon: <CreateSharpIcon />, path: "/create" },
    { text: "profile", icon: <PersonSharpIcon />, path: "/profile" },
    { text: "setting", icon: <SettingsRoundedIcon />, path: "/setting" },
  ]

  return <>
    <Box component="nav">


      <Drawer
        open={true}
        onClose={() => { hideDrower() }}

        sx={{
          [theme.breakpoints.down('md')]: {
            display: noneOrBlock
          },
          width: `${drawerWidth}px`,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: `${drawerWidth}px`,
            boxSizing: 'border-box',
          },
        }}
        variant={variant}
        anchor="left"
      >




        {/*list <======================================> */}
        <List>

          <ListItem disablePadding sx={{ display: "flex", justifyContent: "center", mb: "14px" }}>
            <IconButton onClick={() => { setMyMode(theme.palette.mode === "light" ? "dark" : "light"); localStorage.setItem("currentMode", theme.palette.mode === "light" ? "dark" : "light") }} color="inherit">
              {theme.palette.mode === 'dark' ? <Brightness7 sx={{ color: "orange" }} /> : <Brightness4 />}
            </IconButton>


          </ListItem>

          <Divider />

          {myList.map((list, index) =>

            <ListItem key={index} sx={{ bgcolor: pathname === list.path ? theme.palette.gray.main : null }} disablePadding>
              <ListItemButton onClick={() => {
                navigate(list.path)
              }} >

                <ListItemIcon>
                  {list.icon}
                </ListItemIcon>

                <ListItemText primary={list.text} />

              </ListItemButton>
            </ListItem>

          )}

          <ListItem disablePadding sx={{ bgcolor: pathname === "/logout" ? theme.palette.gray.main : null }}>

            <ListItemButton>
              <ListItemIcon>
                <LogoutRoundedIcon />
              </ListItemIcon>
              <ListItemText primary="Logout" />
            </ListItemButton>
          </ListItem>

        </List>
        {/*list <======================================> */}

      </Drawer>
    </Box>

  </>
}
