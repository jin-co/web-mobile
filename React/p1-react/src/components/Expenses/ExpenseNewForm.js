import "./ExpenseNewForm.css";
import { useState } from "react";
import { hasSelectionSupport } from "@testing-library/user-event/dist/utils";
function ExpenseNewForm() {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  //   const [input, setInput] = useState({
  //     title: "",
  //     amount: "",
  //     date: "",
  //   });

  const updateTitleHandler = (e) => {
    setTitle(e.target.value);
    console.log(e.target.value);

    /** using single operator */
    /* one way */
    // setInput({
    //     ...input,
    //     title: e.target.value
    // })

    /* another -> this approach is better as it ensures that the previous state is up to date when one state happens after another */
    // hasSelectionSupport((prev) => {
    //   return {
    //     ...prev,
    //     title: e.target.value,
    //   };
    // });
  };

  const updateAmountHandler = (e) => {
    setAmount(e.target.value);
    console.log(e.target.value);
  };

  const updateDateHandler = (e) => {
    setDate(e.target.value);
    console.log(e.target.value);
  };

  const submitHandler = (e) => {
      e.preventDefault()
      const newData = {
          title: title,
          date: date,
          amount: amount
      }

      console.log(newData)
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input onChange={updateTitleHandler} type="text" />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            onChange={updateAmountHandler}
            type="Amount"
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
