import { useState, useCallback } from "react";

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
      pass = str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberallowed, charAllowed, setPassword]);

  return (
    <>
      <div className="w-full max-w-md  mx-auto shadow-md rounded-lg px-4  bg-gray-700 mt-20">
        <h1 className="text-white text-center my-3  ">PasswordGenrator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4 ">
          <input
            type="text"
            value={pasword}
            className="outerline-none  w-full py-1   rounded-lg "
            readOnly
          />
          <button className="pl-10 text-white">copy</button>
        </div>
      </div>
    </>
  );
}

export default App;
