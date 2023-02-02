import { useEffect, useState } from "react";

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
    <>
      <div id="tickerBox">
        <div className="headlineBox" style={{ display: "block" }}>
          {displayArr.map((item) => {
            return (
              <span style={{ display: "inline-block", padding: "1em" }}>
                <h3>{item}</h3>
              </span>
            );
          })}
        </div>
      </div>
    </>
  );
}