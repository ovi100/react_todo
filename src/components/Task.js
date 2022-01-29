import { BiTrash } from "react-icons/bi";
import { BiAlarm } from "react-icons/bi";
import { BiEdit } from "react-icons/bi";
const Task = ({ task, ...restProps }) => {
  return (
    <div className={`task ${task.reminder ? 'reminder' : ''}`}>
      <div className="task-content">
        <div className="checkbox-text">
          <div className="checkbox">
            <input type="checkbox" checked={task.complete} onChange={() => restProps.onComplete(task.id)} />
          </div>
          <div className={`text ${task.complete ? 'complete' : ''}`}>{task.title}</div>
        </div>
        <div className="buttons">
          {task.complete === false && <BiEdit onClick={() => restProps.setEditTask(task)} title="Edit Task" />}
          {task.complete === false && <BiAlarm onClick={() => restProps.onRemind(task.id)} title="Toggle Reminder" />}
          <BiTrash onClick={() => restProps.onDelete(task.id)} title="Delete Task" />
        </div>
      </div>
      <div className="task-time">{task.created_at}</div>
    </div>
  )
}

export default Task;
