import { useState } from 'react';
import reactLogo from '/react.svg';
import millionLogo from '/million.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div>
        <a href="https://millionjs.org" target="_blank">
          <img src={millionLogo} className="logo" alt="Million logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo" alt="React logo" />
        </a>
      </div>
      <h1>Million + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Million and React logos to learn more
      </p>
      <p>
        <a href="https://github.com/aidenybai/million-react">Fork on GitHub</a>
      </p>
    </div>
  );
}

export default App;
