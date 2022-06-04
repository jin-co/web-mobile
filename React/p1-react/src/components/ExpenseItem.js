import "./ExpenseItem.css";
function ExpenseItem(props) {
  const expDate = new Date(2000, 2, 22);
  console.log(expDate)
  const title = 'Title'
  const amount = 22
  return (
    // <div className="expense-item">
    //   <div> { expDate.toISOString() } </div>
    //   <div className="expense-item__description">
    //     <h2> { title } </h2>
    //     <div className="expense-item__price">${ amount }</div>
    //   </div>
    // </div>
    <div className="expense-item">
      <div> { props.date.toISOString() } </div>
      <div className="expense-item__description">
        <h2> { props.title } </h2>
        <div className="expense-item__price">${ props.amount }</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
