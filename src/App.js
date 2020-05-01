import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Task from "./components/Task";
import config from "./config";

function App() {
  console.log(config.HostUrl);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Task
          task={{
            id: "1",
            title: "Test Task",
            state: "TASK_INBOX",
            updatedAt: new Date(2018, 0, 1, 9, 0),
          }}
          onArchiveTask={()=> {}}
        ></Task>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
