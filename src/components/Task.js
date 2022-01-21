import { FaTimes } from "react-icons/fa";
const Task = ({ task, onDelete, onRemind }) => {
  return (
    <div className={`task ${task.reminder ? 'reminder' : ''}`} onDoubleClick={() => onRemind(task.id)}>
      <h3>{task.title} <FaTimes onClick={() => onDelete(task.id)} /></h3>
      <p>{task.created_at}</p>
    </div>
  )
}

export default Task
