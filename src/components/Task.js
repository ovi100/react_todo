import { BiTrash } from "react-icons/bi";
import { BiAlarm } from "react-icons/bi";
import { BiEdit } from "react-icons/bi";
const Task = ({ task, onDelete, onRemind, onComplete, onEdit, ...restProps }) => {
  return (
    <div className={`task ${task.reminder ? 'reminder' : ''}`}>
      <div className="task-content">
        <div className="checkbox-text">
          <div className="checkbox">
            <input type="checkbox" checked={task.complete} onChange={() => onComplete(task.id)} />
          </div>
          <div className={`text ${task.complete ? 'complete' : ''}`}>{task.title}</div>
        </div>
        <div className="buttons">
          <BiEdit onClick={() => restProps.setEditTask(task)} title="Edit Task" />
          <BiAlarm onClick={() => onRemind(task.id)} title="Toggle Reminder" />
          <BiTrash onClick={() => onDelete(task.id)} title="Delete Task" />
        </div>
      </div>
      <div className="task-time">{task.created_at}</div>
    </div>
  )
}

export default Task;
