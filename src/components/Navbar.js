import Stack from "@mui/material/Stack";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CloseIcon from "@mui/icons-material/Close";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


export default function Navbar(props) {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const toggleDrawer = open => event => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    //changes the function state according to the value of open
    setOpen(open);
  };
  const followLink = e => {
    setOpen(false);
    navigate(e.target.value);
  };

  return (
    <AppBar
      className="NavBarTop"
      position="absolute"
      sx={{
        zIndex: theme => theme.zIndex.drawer + 10,
        color: "black",
        backgroundColor: "white",
        boxShadow: "none"
      }}
    >
      <Toolbar sx={{ borderBottom: "4px solid #e65c00" }}>
      
        <Typography
          variant="h5"
          display="flex"
          justifyContent="center"
          sx={{
            flexGrow: "1",
            fontWeight: 700,
            paddingLeft: ".5em",
            paddingTop: ".5em",
            color: "black",
            textDecoration: "none",
            
          }}
        >
          <svg id="svg" height="70" width="70">
            <polygon points="10,0 60,0 60,40 50,40 40,40 40,30 30,30 30,20 20,20 20,10 10,10" style={{fill:"#e65c00",stroke:"white",strokeWidth:"5"}}/>
            <polygon points="10,50 60,50 60,40 40,40 40,30 30,30 30,20 20,20 20,10 10,10" style={{fill:"#e65c00",stroke:"white",strokeWidth:"5"}}>
            </polygon>
            <circle cx="30" cy="10" r="5" style={{fill:"white",stroke:"black",strokeWidth:"2"}} />
            <circle cx="30" cy="10" r="2" style={{fill:"black"}} />
            <polygon points="45,40 50,30 55,40" style={{fill:"white"}}/>
          </svg>
          <Typography variant="h4" sx={{paddingTop: ".25em",fontWeight: 700,fontFamily: "'Rajdhani', sans-serif"}}>John W Powers</Typography>
        </Typography>
        <IconButton
          edge="start"
          color="black"
          aria-label="open drawer"
          onClick={toggleDrawer(true)}
          sx={{
            display: {
              xs: "block",
              color: "black"
            }
          }}
        >
          <MenuIcon />
        </IconButton>
        <Drawer
          anchor="right"
          open={open}
          onClose={toggleDrawer(false)}
          onOpen={toggleDrawer(true)}
        >
          <Box
            sx={{
              pt: 10,
              height: 1,
              backgroundColor: "white",
              color: "black"
            }}
          >
            <IconButton sx={{ pb: ".5em", color: "black", pr: ".5em" }}>
              <CloseIcon onClick={toggleDrawer(false)} />
            </IconButton>
            <Stack sx={{p:"2em"}}>
              <Link to="https://www.linkedin.com/pub/john-powers/54/35a/46"><LinkedInIcon fontSize="large" style={{color: "black"}}/></Link>
              <Link to="https://www.github.com/jwpowers2"><GitHubIcon fontSize="large" style={{color: "black"}}/></Link>
            </Stack>
          </Box>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
}