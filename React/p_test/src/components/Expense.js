import './Expense.css'
import ExpenseDate from './ExpenseDate';
import Card from './UI/Card';

const Expense = (props) => {
  return (
    <Card>

      <ExpenseDate date={props.date}></ExpenseDate>

      <div>{props.title}</div>
      <div>${props.amount}</div>
    </Card>
  );
};

export default Expense;
