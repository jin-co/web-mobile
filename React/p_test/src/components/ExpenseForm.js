import Card from "./UI/Card";
import "./ExpenseForm.css";
import { useState } from "react";
import { hasSelectionSupport } from "@testing-library/user-event/dist/utils";

const ExpenseForm = () => {
  const [inputTitle, setTitle] = useState("");
  const [inputDate, setDate] = useState("");
  const [inputAmount, setAmount] = useState("");

  const [input, setData] = useState({
      inputTitle: '',
      inputDate: '',
      inputAmount: '',
  })  

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const newData = {
        title: inputTitle,
        date: inputDate,
        amount: inputAmount,
    }
    console.log(newData)    
  };

  const onTitleHandler = (e) => {
    e.preventDefault();
    setTitle(e.target.value);
    console.log(e.target.value);
  };

  const onDateHandler = (e) => {
    e.preventDefault();
    setDate(e.target.value);
  };

  const onAmountHandler = (e) => {
    e.preventDefault();
    setAmount(e.target.value);
  };

  return (
    <Card className="form-box">
      <form onSubmit={onSubmitHandler}>
        <Card>
          <label>
            Title
            <input onChange={onTitleHandler} type="text" />
          </label>
          <label>
            Date
            <input onChange={onDateHandler}  type="date" />
          </label>
          <label>
            Amount
            <input onChange={onAmountHandler}  type="number" />
          </label>
        </Card>
        <button>Add</button>
      </form>
      <p>{inputTitle}</p>
    </Card>
  );
};

export default ExpenseForm;
