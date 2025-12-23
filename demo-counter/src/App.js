import { useState } from "react";

// Custom Hook
function useIncrement(addAmount) {
  const [count, setCount] = useState(0);

  function increase() {
    setCount(count + addAmount);
  }

  return [count, increase];
}

// Counter 1
function Counter1() {
  const [count, increase] = useIncrement(1);

  return (
    <div>
      <p>Counter 1 Count: {count}</p>
      <button onClick={increase}>ADD 1</button>
    </div>
  );
}

// Counter 2
function Counter2() {
  const [count, increase] = useIncrement(2);

  return (
    <div>
      <p>Counter 2 Count: {count}</p>
      <button onClick={increase}>ADD 2</button>
    </div>
  );
}

// App
export default function App() {
  return (
    <div>
      <Counter1 />
      <Counter2 />
    </div>
  );
}
