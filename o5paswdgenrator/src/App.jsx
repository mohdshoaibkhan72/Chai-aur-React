import { useState, useCallback } from "react";
import "./App.css";

function App() {
  const [length, setlength] = useState(8);
  const [numberallowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowewd] = useState(false);
  const [pasword, setPassword] = useState("");

  const passwordGenrator = useCallback(() => {
    let pass = "";
    let str = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuioplkjhgfdsazxcvbnm";

    if (numberallowed) str += "0123456789";
    if (numberallowed) str += "!@#$%^&*()_[]{}`";

    for (let i = 1; i <= array.length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass=str.charAt(char);
    }
    setPassword(pass)
  }, [length, numberallowed, charAllowed, setPassword]);

  return (
    <>
      <h1 className="text-4xl text-center text-white">Pasword genrator</h1>
    </>
  );
}

export default App;
