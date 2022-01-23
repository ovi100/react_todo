import Task from './Task';

const Tasks = ({ tasks, onDelete, onRemind }) => {
  return (
    <div>
      {tasks.map((task,index) => (
        <Task key={index} task={task} onDelete={onDelete} onRemind={onRemind} />
      ))}
    </div>
  )
}

export default Tasks
