import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./Componets/card";


function App(props) {
  return (
    <>
      <Card username="ahmad" position="Front-end Enginear "></Card>
      <br></br>
      <Card username="Shoiab-khan" position="Softwear Enginear"></Card>
    </>
  );
}

export default App;
