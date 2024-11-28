import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const handleChange = () => {
    setNumber((prev) => !prev);
  };
  const handleChar = () => {
    setCharc((prev) => !prev);
  };
  const [length, setLength] = useState(0);
  const [number, setNumber] = useState(false);
  const [charc, setCharc] = useState(false);
  const [password, setPassword] = useState("");
  const [buttonColor, setButtonColor] = useState("bg-blue-700");

  const passwordRef = useRef(null);
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (number) {
      str += "123456789";
    }
    if (charc) {
      str += "!@#$%^&*=/-+?";
    }
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, number, charc,setPassword]);

  const passwordCopy = useCallback(() => {
    window.navigator.clipboard.writeText(password);
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 9);
    setButtonColor("bg-green-500"); // Change the button color
    setTimeout(() => setButtonColor("bg-blue-700"), 2000); // Reset the button color after 2 seconds
  },[password]);

  useEffect(() => {
    passwordGenerator();
  }, [length, number, charc, passwordGenerator]);

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-700">
        <h1 className="text-white text-center">Password generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="password"
            readOnly
            ref={passwordRef}
          />
          <button
            className={`outline-none text-white px-3 py-0.5 rounded-md shrink-0 ${buttonColor}`}
            onClick={passwordCopy}
          >
            Copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label>Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input type="checkbox" onChange={handleChange} />
            <label>Number</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input type="checkbox" onChange={handleChar} />
            <label>Character</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
