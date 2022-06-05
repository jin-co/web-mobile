import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import { useState } from "react";

function ExpenseItem(props) {
  const [title, setTitle] = useState(props.title)

  const expDate = new Date(2000, 2, 22);
  console.log(expDate);
  
  const amount = 22;

  //event
  const clickHandler = () => {
    setTitle('updated')
    console.log("second way");
  };

  // const month = props.date.toLocaleString('en-US', {month:'long'})
  // const year = props.date.toLocaleString('en-US', {day:'2-digit'})
  // const day = props.date.getFullYear()
  return (
    // <div className="expense-item">
    //   <div> { expDate.toISOString() } </div>
    //   <div className="expense-item__description">
    //     <h2> { title } </h2>
    //     <div className="expense-item__price">${ amount }</div>
    //   </div>
    // </div>
    <Card className="expense-item">
      <div>
        {" "}
        {props.date.toISOString()}
        <ExpenseDate date={props.date}></ExpenseDate>
      </div>
      <div className="expense-item__description">
        {/* <h2> {props.title} </h2> */}
        <h2> {title} </h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={() => console.log("çlicked")}>Click</button>
      <button
        onClick={function () {
          console.log("çlicked");
        }}
      >
        Click
      </button>
      <button onClick={clickHandler}>Click</button>
    </Card>
  );
}

export default ExpenseItem;
