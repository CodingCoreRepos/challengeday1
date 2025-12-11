import { useState } from "react";
import "./App.css";  // import the CSS file
import mushroomImage from "./assets/mushroom-image.png"; // import the image

function App() {
  const [count, setCount] = useState<number>(0);

  return (
    <div className="app-container">
      <h1>Mushroom Counter</h1>
       <img src={mushroomImage} alt="Mushroom illustration" className="mushroom-image" />
      <h2>{count}</h2>
      <div>
        <button onClick={() => setCount(prev => prev + 1)}>+</button>
        <button onClick={() => setCount(prev => prev - 1)}>-</button>
        <button onClick={() => setCount(0)}>Reset</button>
      </div>
    </div>
  );
}

export default App;