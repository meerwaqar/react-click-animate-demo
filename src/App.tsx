import React from "react";
import logo from "./logo.svg";
import "./App.css";
import AnimatedPointer from "./pointer";

function App() {
  return (
    <AnimatedPointer>
      <div className="App">
        <div className="header">
          <div className="header-title">
            <h1>Pointer App</h1>
          </div>
          <div className="nav-bar">
            <a>Option 1</a>
            <a>Option 2</a>
          </div>
        </div>

        <main>
          <button className="btn" onClick={()=>alert("button was clicked")}>Button-1</button>
          <div className="center-img">
            <img src="https://homepages.cae.wisc.edu/~ece533/images/fruits.png" alt="fresh fruits"/>
          </div>
        </main>
      </div>
    </AnimatedPointer>
  );
}

export default App;
