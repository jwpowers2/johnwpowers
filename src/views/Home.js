import {useState} from 'react';
import Navbar from "../components/Navbar";
import { Container, Box } from "@mui/material";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Stack from '@mui/material/Stack';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Typography from "@mui/material/Typography";
import Experience from './Experience';
import { Link, Outlet } from 'react-router-dom';

export default function Home() {
  const [age, setAge] = useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <>
    <Navbar/>
    <Container>
        <Box sx={{ mt: "6em", p: "2em", borderRight: "4px solid #e65c00", borderLeft: "4px solid #e65c00"}}>  
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
        >
          <Stack direction="row">
              <Box sx={{p:"1em"}}><Link style={{color:"black", textDecoration: "none"}} to="/objective">Objective</Link></Box>
              <Box sx={{p:"1em"}}><Link style={{color:"black", textDecoration: "none"}} to="/experience">Experience</Link></Box>
              <Box sx={{p:"1em"}}><Link style={{color:"black", textDecoration: "none"}} to="/skills">Skills</Link></Box>
              <Box sx={{p:"1em"}}><Link style={{color:"black", textDecoration: "none"}} to="/education">Education</Link></Box>
          </Stack>
      </Box>
            <Outlet/>
        </Box>
    </Container>
    </>
  )
}