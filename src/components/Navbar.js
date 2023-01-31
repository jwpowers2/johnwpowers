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
          sx={{
            flexGrow: "1",
            fontWeight: 700,
            paddingLeft: ".5em",
            color: "black",
            textDecoration: "none",
            fontFamily: "'Rajdhani', sans-serif"
          }}
        >
          John W Powers
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
            <Stack>
              <h4>test</h4>
            </Stack>
          </Box>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
}