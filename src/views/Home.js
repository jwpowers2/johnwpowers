import {useState, useEffect} from 'react';
import Navbar from "../components/Navbar";
import { Container, Box } from "@mui/material";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Stack from '@mui/material/Stack';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Typography from "@mui/material/Typography";
import Experience from './Experience';
import { isMobile } from "react-device-detect";
import { NavLink, Outlet, useNavigate } from 'react-router-dom';

export default function Home() {
  const [age, setAge] = useState('');
  //let [borderVal, setBorderVal] = useState("4px solid #e65c00")
  let [borderVal, setBorderVal] = useState("4px solid white")
  const navigate = useNavigate();
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  useEffect(()=>{
    navigate("/experience")
    if (isMobile === true) {setBorderVal("0px solid #e65c00")}
  },[])
  return (
    <>
    <Navbar/>
    <Container>
        <Box sx={{ mt: "6em", pl: "2em", pr: "2em", borderRight: `${borderVal}`, borderLeft: `${borderVal}`, backgroundColor:"white"}} >  
            <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                mb="1em"
            >
              <Stack direction="row">
                  <Box sx={{p:"1em"}}><NavLink  style={{color:"black", textDecoration: "none"}} to="/objective">Objective</NavLink></Box>
                  <Box sx={{p:"1em"}}><NavLink style={{color:"black", textDecoration: "none"}} to="/experience">Experience</NavLink></Box>
                  <Box sx={{p:"1em"}}><NavLink style={{color:"black", textDecoration: "none"}} to="/skills">Skills</NavLink></Box>
                  <Box sx={{p:"1em"}}><NavLink style={{color:"black", textDecoration: "none"}} to="/education">Education</NavLink></Box>
              </Stack>
            </Box>
            <Outlet/>
        </Box>
    </Container>
    </>
  )
}