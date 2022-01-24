import Task from './Task';

const Tasks = ({ tasks, onDelete, onRemind }) => {
  return (
    <div className="task-list">
      {tasks.map((task,index) => (
        <Task key={index} task={task} onDelete={onDelete} onRemind={onRemind} />
      ))}
    </div>
  )
}

export default Tasks
