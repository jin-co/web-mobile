import NewCard from "./NewCard";
function NewExp(props) {
  const title = "h";
  const text = "h";
  const date = "h";
  return (
    <NewCard>
      <h1>{props.title}</h1>
      <h1>{props.date.toString()}</h1>
      <h1>{props.amount}</h1>
    </NewCard>
  );
}

export default NewExp;
