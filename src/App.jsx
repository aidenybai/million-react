import { useState } from 'react';
import viteLogo from './assets/vite.svg';
import reactLogo from './assets/react.svg';
import millionLogo from '/million.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo" alt="React logo" />
        </a>
        <a href="https://millionjs.org" target="_blank">
          <img src={millionLogo} className="logo" alt="Million logo" />
        </a>
      </div>
      <h1>Vite + React + Million</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite, React, and Million logos to learn more
      </p>
    </div>
  );
}

export default App;
