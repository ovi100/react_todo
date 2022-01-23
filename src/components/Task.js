import { FaTimes } from "react-icons/fa";
const Task = ({ task, onDelete, onRemind }) => {
  return (
    <div className={`task ${task.reminder ? 'reminder' : ''}`} onDoubleClick={() => onRemind(task.id)} title="Double click to toggle remind">
      <h3>{task.title} <FaTimes onClick={() => onDelete(task.id)} /></h3>
      <p>{task.created_at}</p>
    </div>
  )
}

export default Task;
