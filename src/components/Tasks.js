import Task from './Task';

const Tasks = ({ tasks, ...restProps }) => {
  // restProps -> {odelte: onDelete, setEditTask: setEditTask}
  return (
    <div className="task-list">
      {tasks.map((task, index) => (
        <Task key={index} task={task} { ...restProps } />
      ))}
    </div>
  )
}

export default Tasks
