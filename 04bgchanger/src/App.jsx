import { useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const [color, setColor] = useState("gray");

  return (
  
    <>  
      <div className="back" style={{ backgroundColor: color }}>
        <div className="btns">
        <h1>Backgorund changer Project</h1>
          <button
            type="button"
            class="btn btn-primary"
            onClick={() => setColor("blue")}
          >
            Blue
          </button>
          <button
            type="button"
            class="btn btn-secondary"
            onClick={() => setColor("gray")}
          >
            grey
          </button>
          <button
            type="button"
            class="btn btn-success"
            onClick={() => setColor("green")}
          >
            green
          </button>
          <button
            type="button"
            class="btn btn-danger"
            onClick={() => setColor("red")}
          >
            red
          </button>
          <button
            type="button"
            class="btn btn-warning"
            onClick={() => setColor("yellow")}
          >
            yeloow
          </button>
          <button
            type="button"
            class="btn btn-info"
            onClick={() => setColor("skyblue")}
          >
            sky{" "}
          </button>
          <button
            type="button"
            class="btn btn-light"
            onClick={() => setColor("white")}
          >
            white
          </button>
          <button
            type="button"
            class="btn btn-secondary"
            onClick={() => setColor("black")}
          >
            black
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
