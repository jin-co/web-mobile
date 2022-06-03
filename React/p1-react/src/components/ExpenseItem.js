import "./ExpenseItem.css";
function ExpenseItem() {
  const expDate = new Date(2021, 2, 22);
  const title = 'Title'
  const amount = 22
  return (
    <div className="expense-item">
      <div> { title } </div>
      <h2> { amount } </h2>
    </div>
  );
}

export default ExpenseItem;
