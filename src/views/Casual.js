import {useState} from 'react';
import { Container } from "@mui/material";
import Ticker from 'react-ticker';

export default function Casual() {
  let [count, setCount] = useState(0);
  const titles = ["one","two","three","four","five"]
  const handleCount = (num) => {
    if (num >= count.length-1){
        setCount(0);
    }
  }
  const MoveStuffAround = () => {
    let counter = 0;
    return (
    <Ticker onNext={handleCount(counter)}>
        {({ index }) => (
            <>
                <h2>headline of element {titles[index]}</h2>
            </>
        )}
    </Ticker>
  )  
}
  return (
    <>
    <Container>
        <h1>casual</h1>
    </Container>
    </>
  )
}