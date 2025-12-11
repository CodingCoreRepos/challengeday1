import { useState } from "react";

function App() {
  const [count, setCount] = useState<number>(0);

  const handleIncrement = (): void => {
    setCount(prev => prev + 1);
  };

  const handleDecrement = (): void => {
    setCount(prev => prev - 1);
  };

  const handleReset = (): void => {
    setCount(0);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Counter App</h1>
      <h2>{count}</h2>

      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement} style={{ margin: "0 10px" }}>-</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default App;