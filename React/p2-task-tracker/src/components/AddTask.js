import useState from "react";

const AddTask = (onAdd) => {
  const [text, setText] = useState("");
  const [day, setDay] = useState("");
  const [reminder, setReminder] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();

    if (!text) {
      alert("Add a task");
      return;
    }

    onAdd({ text, day, reminder });
    setText("");
    setDay("");
    setReminder(false);
  };

  return (
    <form action="" className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label htmlFor="">
          Task
          <input
            type="text"
            placeholder="Add"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </label>
      </div>
      <div className="form-control">
        <label htmlFor="">
          Day & Time
          <input
            type="text"
            placeholder="Day and Time"
            value={day}
            onChange={(e) => setDay(e.target.value)}
          />
        </label>
      </div>
      <div className="form-control form-control-check">
        <label htmlFor="">
          Reminder
          <input
            type="checkbox"
            value={reminder}
            checked={reminder}
            onChange={(e) => setReminder(e.target.checked)}
          />
        </label>
      </div>

      <input type="submit" value="Save" className="btn btn-block" />
    </form>
  );
};

export default AddTask;
