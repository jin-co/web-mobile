import logo from "./logo.svg";
import "./App.css";
import Expense from "./components/Expense";

const expenseData = [
  {
    title: "tom",
    date: new Date(),
    amount: 200,
  },
  {
    title: "jack",
    date: new Date(),
    amount: 300,
  },
  {
    title: "wang",
    date: new Date(),
    amount: 240,
  },
  {
    title: "gu",
    date: new Date(),
    amount: 203,
  },
];

function App() {
  return (
    <div className="App">
      <Expense
        title={expenseData[0].title}
        date={expenseData[0].date}
        amount={expenseData[0].amount}
      ></Expense>
      <Expense
        title={expenseData[1].title}
        date={expenseData[1].date}
        amount={expenseData[1].amount}
      ></Expense>
      <Expense
        title={expenseData[2].title}
        date={expenseData[2].date}
        amount={expenseData[2].amount}
      ></Expense>
      <Expense
        title={expenseData[3].title}
        date={expenseData[3].date}
        amount={expenseData[3].amount}
      ></Expense>
    </div>
  );
}

export default App;
