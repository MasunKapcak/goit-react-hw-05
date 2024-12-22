import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <p
          style={{
            fontSize: "2rem",
            fontWeight: "bold",
            color: "red",
            margin: "0",
            padding: "0",
            textAlign: "center",
            marginBottom: "20px",
            border: "1px solid red",
            borderRadius: "5px",
          }}
        >
          {count}
        </p>
        <button onClick={() => setCount((count) => count + 1)}>count +</button>
        <button onClick={() => setCount((count) => count - 1)}>count -</button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
