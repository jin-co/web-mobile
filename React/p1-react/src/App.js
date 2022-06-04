import "./App.css";
import ExpenseItem from "./components/ExpenseItem";
import Exp from "./components/Exp";

const expenses = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {
  return (
    <div className="App">
      <h1>what</h1>
      <ExpenseItem
        title={expenses[0].title}
        date={expenses[0].date}
        amout={expenses[0].amount}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[0].title}
        date={expenses[0].date}
        amout={expenses[0].amount}
      ></ExpenseItem>


      <Exp title={expenses[1].title} text={expenses[1].date} sub={expenses[1].amount}></Exp>
    </div>
  );
}

export default App;
