import { useState } from "react";
import "./style.css"
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  let [color, setcolor] = useState("red");
  const yeloo = () => {
    setcolor("yelow");
  };

  const black = () => {
    setcolor("black");
  };

  const blue = () => {
    setcolor("blue");
  };

  const green = () => {
    setcolor("green");
  };

  const skyblue = () => {
    setcolor("Skyblue");
  };

  return (<div className="bos-content">
    <h1> lerning hookes</h1>
    <> 
      <h1>my background color is {color} </h1>
      <div className="All-button">
      <button type="button" class="btn btn-outline-primary" onClick={blue}>
        blue
      </button>
      <button type="button" class="btn btn-outline-success" onClick={green}>
        green
      </button>
      <button type="button" class="btn btn-outline-warning" onClick={yeloo}>
        yelow
      </button>
      <button type="button" class="btn btn-outline-info" onClick={skyblue}>
        skyblue
      </button>
      <button type="button" class="btn btn-outline-light" onClick={black}>
        black
      </button></div>
    </></div>
  );
}

export default App;
