import { useState } from "react";

const AddTask = ({ onAdd }) => {
  const [title, setTitle] = useState('');
  const [created_at, setCreated_at] = useState('');
  const [reminder, setReminder] = useState(false);

  const formSubmit = (e) => {
    e.preventDefault();

    if (!title) {
      alert('Please add a task');
      return;
    }

    onAdd({ title, created_at, reminder });

    setTitle('');
    setCreated_at('');
    setReminder(false);
  }

  return (
    <form className="add-form" onSubmit={formSubmit}>
      <div className="form-control">
        <label>Task</label>
        <input
          type="text"
          placeholder="Enter task name"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label>Date</label>
        <input
          type="text"
          placeholder="Enter date"
          value={created_at}
          onChange={(e) => setCreated_at(e.target.value)}
        />
      </div>
      <div className="form-control form-control-check">
        <input
          type="checkbox"
          checked={reminder}
          value={reminder}
          onChange={(e) => setReminder(e.currentTarget.checked)}
        />
        <label>Reminder</label>
      </div>
      <button type="submit" className="btn btn-block">Save Task</button>
    </form>
  )
}

export default AddTask;
