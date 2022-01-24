import { useState } from "react";

const AddTask = ({ onAdd }) => {
  let jsDate = new Date();
  const [title, setTitle] = useState('');
  const [reminder, setReminder] = useState(false);
  const [complete, setComplete] = useState(false);

  const formSubmit = (e) => {
    e.preventDefault();

    if (!title) {
      alert('Please add a task');
      return;
    }

    const date = jsDate.toDateString();
    const time = jsDate.toLocaleString().split(", ");
    const created_at = date + ' at ' + time[1];

    onAdd({ title, created_at, reminder, complete });

    setTitle('');
    setReminder(false);
    setComplete(false);
  }

  return (
    <form className="add-form" onSubmit={formSubmit}>
      <div className="input-box">
        <div className="form">
          <input
            type="text"
            className="form-control"
            placeholder="Enter task name"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="button">
          <button type="submit">add</button>
        </div>
      </div>
    </form>
  )
}

export default AddTask;
