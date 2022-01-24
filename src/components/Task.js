import { BiTrash } from "react-icons/bi";
import { BiAlarm } from "react-icons/bi";
// import { BiEdit } from "react-icons/bi";
const Task = ({ task, onDelete, onRemind, onEdit }) => {
  return (
    <div className={`task ${task.reminder ? 'reminder' : ''}`}>
      <div className="task-content">
        <div className="checkbox-text" title="Double click to toggle remind">
          {/* <div className="checkbox">
            <input type="checkbox" />
          </div> */}
          <div className="text">{task.title}</div>
        </div>
        <div className="buttons">
          {/* <BiEdit onClick={() => onEdit(task.id)} title="Edit Task" /> */}
          <BiAlarm onClick={() => onRemind(task.id)} title="Toggle Reminder" />
          <BiTrash onClick={() => onDelete(task.id)} title="Delete Task" />
        </div>
      </div>
      <div className="task-time">{task.created_at}</div>
    </div>
  )
}

export default Task;
