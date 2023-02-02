import { useEffect, useState } from "react";
import {Container,Box,Stack} from "@mui/material";
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
          {displayArr.map((item, index) => {
            let color = "black";
            if (index % 2 === 0) {
              color = "gray";
            }
            return (
              <span style={{ display: "inline-block", padding: "1em", color: `${color}` }}>
                <h3>{item}</h3>
              </span>
            );
          })}
        </div>
      </div>
      </Box>
      </Container>
    
  );
}