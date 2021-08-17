import React from "react";
import Button from "./Button";
import "./Counter.css";

function Counter({ decrement, increment, number, setNumber }) {
  // console.log(props);
  return (
    <div className="counter">
      <Button onClick={decrement}>-</Button>
      {number}
      <Button onClick={increment}>+</Button>
      <Button
        onClick={() => {
          setNumber(0);
        }}
      >
        Reset
      </Button>
    </div>
  );
}
export default Counter;
