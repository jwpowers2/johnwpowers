import { useEffect, useState } from "react";
import {Container,Box,Stack, Grid} from "@mui/material";
import { green } from "@mui/material/colors";

export default function Ticker(props) {
  let [displayArr, setDisplayArr] = useState(props.arr);
  const setPositions = () => {
    let tempDisplay = displayArr;
    const first = tempDisplay.shift();
    tempDisplay.push(first);
    setDisplayArr([...tempDisplay]);
  };
  useEffect(() => {
    const interval = setInterval(() => {
      setPositions();
    }, 2000);
    return () => clearInterval(interval);
  }, []);
  return (
    
    <Container>
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
        >
      <div id="tickerBox">
        <div className="headlineBox" style={{ display: "block" }}>
            <Grid containerspacing={2}>
              <Grid item xs={4} md={4}></Grid>
              <Grid item xs={4} md={4}>
                  <Grid containerspacing={2}>
                    <Grid item xs={4} md={4}>
                      <h3>John Powers is:</h3>
                    </Grid>
                    <Grid item xs={4} md={4}>
                      <h3>{displayArr[0]}</h3>
                    </Grid>----
                    <Grid item xs={4} md={4}></Grid>
                  </Grid>
              </Grid>
              <Grid item xs={4} md={4}></Grid>
            </Grid>
        </div>
      </div>
      </Box>
      </Container>
    
  );
}