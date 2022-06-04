import "./ExpenseItem.css";
function ExpenseItem() {
  const expDate = new Date();
  const title = 'Title'
  const amount = 22
  return (
    <div className="expense-item">
      <div> { expDate } </div>
      <div className="expense-item__description">
        <h2> { title } </h2>
        <div className="expense-item__price">${ amount }</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
