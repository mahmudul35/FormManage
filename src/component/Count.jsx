import React from "react";
import { useState } from "react";

const Count = () => {
  let [count, setCount] = useState(0);
  let handler = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <h1>count:{count}</h1>
      <button onClick={handler}>Click Me</button>
    </div>
  );
};

export default Count;
