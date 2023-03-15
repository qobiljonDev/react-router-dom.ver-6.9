import React, {
  createContext,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { Button } from "./components";

import "./app.css";

export const Context = createContext();

const App = ({ name, fullName }) => {
  const [state, setState] = useState(0);
  const ref = useRef();

  const handleClick = (num) => {
    setState((prev) => prev + num);
    // state = state + num;
    ref.current.style.color = "red";
  };

  useEffect(() => {
    return () => {};
  }, []);

  useLayoutEffect(() => {}, []);

  return (
    <div className="app">
      <Context.Provider value={{name, fullName}} >
        <p ref={ref}>{state}</p>
        <p>{name}</p>
        <br />
        <Button ref={ref} onClick={() => handleClick(1)} className="salom">
          Increment
        </Button>
        <hr />
        <Button onClick={() => handleClick(-1)} className="salom">
          Decrement
        </Button>
      </Context.Provider>
    </div>
  );
};

export default App;
