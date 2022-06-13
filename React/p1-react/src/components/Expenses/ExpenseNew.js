import "./ExpenseNew.css";
import ExpenseNewForm from "./ExpenseNewForm";
import { useState } from "react";
const ExpenseNew = (props) => {
  const [test, setText] = useState("dd");

  const clickHandle = () => {
    setText("what");
  };

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    }
    console.log(expenseData)
  }

  return (
    <div className="new-expense">
      <ExpenseNewForm onSaveExpenseData={saveExpenseDataHandler} />
      <button onClick={clickHandle}>Click</button>
      <p>{test}</p>
    </div>
  );
};

export default ExpenseNew;
