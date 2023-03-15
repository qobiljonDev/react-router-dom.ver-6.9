import React, { useContext } from 'react'
import "./style.css";
import {Context} from "../../App";

const Button = React.forwardRef(({ children, className, onClick }, ref) => {
  const text = useContext(Context);
  const texts = useContext(Context);

  console.log(text, texts);

  return (
    <div onClick={onClick} className={"btn " + className}>
      {children}
    </div>
  );
});

export default Button