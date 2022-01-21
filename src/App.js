import { useState, useEffect } from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';

function App() {
  const [showForm, setShowForm] = useState(false);
  const [tasks, setTasks] = useState([]);

  // Fetching data from server
  useEffect(() => {
    const getTasks = async () => {
      const serverData = await fetchTasks();
      setTasks(serverData);
    }
    getTasks();
  }, [])

  const fetchTasks = async () => {
    const result = await fetch('http://localhost:5000/tasks');
    const data = await result.json();
    return data;
  }

  // ********************************

  // Add Task
  const addTask = async (task) => {
    const result = await fetch('http://localhost:5000/tasks', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(task)
    });
    const newTask = await result.json();
    setTasks([...tasks, newTask]);
  }

  // Delete Task
  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, { method: 'DELETE' });
    setTasks(tasks.filter(task => task.id !== id));
  }

  // Fetching Single Data
  const fetchTask = async (id) => {
    const result = await fetch(`http://localhost:5000/tasks/${id}`);
    const data = await result.json();
    return data;
  }

  // Remind Task
  const toggleRemind = async (id) => {
    const single_task = await fetchTask(id);
    const update_task = { ...single_task, reminder: !single_task.reminder };

    const result = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(update_task)
    });
    const data = await result.json();
    
    setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: data.reminder } : task));
  }


  return (
    <div className="container">
      <Header onShow={() => setShowForm(!showForm)} showForm={showForm} />
      {showForm && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (<Tasks tasks={tasks} onDelete={deleteTask} onRemind={toggleRemind} />) : (<p>No task found</p>)}
    </div>
  );
}

export default App;
