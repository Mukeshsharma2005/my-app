import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  const reset = () => setCount(0);

  return (
    <div className="App">
      <div className="counter-container">
        <h1>Counter App</h1>
        <div className="counter-display">{count}</div>
        <div className="button-group">
          <button className="btn btn-decrease" onClick={decrement}>
            -
          </button>
          <button className="btn btn-reset" onClick={reset}>
            Reset
          </button>
          <button className="btn btn-increase" onClick={increment}>
            +
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
