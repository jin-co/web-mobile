import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
function ExpenseItem(props) {
  const expDate = new Date(2000, 2, 22);
  console.log(expDate)
  const title = 'Title'
  const amount = 22

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
    <div className="expense-item">
      <div> { props.date.toISOString() } 
        <ExpenseDate date={props.date}></ExpenseDate>
      </div>
      <div className="expense-item__description">
        <h2> { props.title } </h2>
        <div className="expense-item__price">${ props.amount }</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
