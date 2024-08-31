import React from "react";
import "./App.css";

function App() {
  return (
    <div className="container">
      <div className="mobile-screen">
        <h1>Mobile Screen</h1>
        <BigSquare />
      </div>
    </div>
  );
}

function BigSquare() {
  return (
    <div className="big-square">
      <div id="square-1" className="small-square"></div>
      <div id="square-2" className="small-square"></div>
      <div id="square-3" className="small-square"></div>
      <div id="square-4" className="small-square"></div>
      <div id="square-5" className="small-square"></div>
      <div id="square-6" className="small-square"></div>
      <div id="square-7" className="small-square"></div>
      <div id="square-8" className="small-square"></div>
    </div>
  );
}

export default App;
//coimentariosdu aweasd asdas