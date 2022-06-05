import "./ExpenseNew.css";
import ExpenseNewForm from "./ExpenseNewForm";
import { useState } from "react";
const ExpenseNew = (props) => {
  const [test, setText] = useState("dd");

  const clickHandle = () => {
    setText("what");
  };

  return (
    <div>
      <ExpenseNewForm></ExpenseNewForm>
      <button onClick={clickHandle}>Click</button>
      <p>{test}</p>
    </div>
  );
};

export default ExpenseNew;
