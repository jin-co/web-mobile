import "./ExpenseNewForm.css";
import { useState } from "react";
function ExpenseNewForm() {
  const [title, setTitle] = useState("");
  const [number, setNumber] = useState("");
  const [date, setDate] = useState("");

  const [input, setInput] = useState({
    title: "",
    number: "",
    date: "",
  });  

  const updateTitleHandler = (e) => {
    setTitle(e.target.value);
    console.log(e.target.value);
    setInput({
        ...input,
        title: e.target.value
    })
  };

  const updateNumberHandler = (e) => {
    setNumber(e.target.value);
    console.log(e.target.value);
  };

  const updateDateHandler = (e) => {
    setDate(e.target.value);
    console.log(e.target.value);
  };

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input onChange={updateTitleHandler} type="text" />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            onChange={updateNumberHandler}
            type="number"
            min="0.01"
            step="0.01"
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            onChange={updateDateHandler}
            type="date"
            min="2019-01-01"
            max="2022-12-12"
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add</button>
      </div>
    </form>
  );
}

export default ExpenseNewForm;
