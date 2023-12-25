import { useState } from "react";
import "./App.css";
//hooks use for change in ui react is resposibale for the the change in ui

function App() {
  let [counter, setCounter] = useState(15);

  //function for adding ....
  const addValue = () => {
    console.log("new number", counter);
    setCounter(counter + 1);
   
  };

  //function for decresing
  const removeValue = () => {
    setCounter(counter - 1);
  };

  return (
    <>
      <h1>Chai aur react</h1>
      <h2> ~Counter Value :{counter}</h2>
      <button onClick={addValue}>Add value</button>
      <br></br>
      <br></br>
      <button onClick={removeValue}>remove value</button>
    </>
  );
}

export default App;
