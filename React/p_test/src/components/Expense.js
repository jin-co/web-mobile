import './Expense.css'
import ExpenseDate from './ExpenseDate';

const Expense = (props) => {
  return (
    <div className="card">

      <ExpenseDate date={props.date}></ExpenseDate>

      <div>{props.title}</div>
      <div>${props.amount}</div>
    </div>
  );
};

export default Expense;
