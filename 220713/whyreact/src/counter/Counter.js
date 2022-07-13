import React from "react";
import { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  function countUp() {
    setCounter(counter + 1);
  }

  return (
    <>
      <h1>{counter > 0 ? counter : "I am Counter"}</h1>
      <button onClick={countUp}>+할게연</button>
    </>
  );
};

export default Counter;
