import {useState} from 'react';
import Navbar from "../components/Navbar";
import { Container, Box } from "@mui/material";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Casual from "./Casual";

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
        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-standard-label">John Powers is ...</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={age}
          onChange={handleChange}
          label="John Powers is ..."
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Casual</MenuItem>
          <MenuItem value={20}>Formal</MenuItem>
          <MenuItem value={30}>A Honeypot</MenuItem>
        </Select>
      </FormControl>
      </Box>
            <Casual/>
        </Box>
    </Container>
    </>
  )
}