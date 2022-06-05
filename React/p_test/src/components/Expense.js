import './Expense.css'
import ExpenseDate from './ExpenseDate';

const expenseData = [
    {
        title: 'tom',
        data: new Date(),
        amount: 200
    },
    {
        title: 'tom',
        data: new Date(),
        amount: 200
    },
    {
        title: 'tom',
        data: new Date(),
        amount: 200
    },
    {
        title: 'tom',
        data: new Date(),
        amount: 200
    },
]

const Expense = () => {
  return (
    <div className="card">

      <ExpenseDate></ExpenseDate>

      <div>d</div>
      <div>d</div>
    </div>
  );
};

export default Expense;
