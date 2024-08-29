import { useState } from "react";

export default function Counter() {
  const [counter, setCounter] = useState(0);
  // function to increment:
  const increment = () => {
    setCounter(counter + 1);
  };
  // function to decrement:
  const decrement = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };
  return (
    <div>
      <button onClick={increment}>+</button>
      <h1>{counter}</h1>
      <button onClick={decrement}>-</button>
    </div>
  );
}
