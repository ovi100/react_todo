import { useState, useEffect } from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';

function App() {
  const [showForm, setShowForm] = useState(false);
  const [tasks, setTasks] = useState([]);

  // Fetching data from server

  useEffect(() => {
    fetchTasks();
  }, [])

  const fetchTasks = async () => {
    const result = await fetch('https://todos-80274.firebaseio.com/tasks.json');
    const data = await result.json();
    console.log(data);
    const plain_data = Object.keys(data).map((key) => {
      return { id: key, ...data[key] }
    });
    console.log(plain_data);
    setTasks(plain_data);
  }


  // ********************************

  // Add Task
  const addTask = async (task) => {
    await fetch('https://todos-80274.firebaseio.com/tasks.json', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(task)
    });
    fetchTasks();
  }

  // Delete Task
  const deleteTask = async (id) => {
    await fetch(`https://todos-80274.firebaseio.com/tasks/${id}.json`, { method: 'DELETE' });
    setTasks(tasks.filter(task => task.id !== id));
  }

  // Fetching Single Data
  const fetchTask = async (id) => {
    const result = await fetch(`https://todos-80274.firebaseio.com/tasks/${id}.json`);
    const data = await result.json();
    return data;
  }

  // Remind Task
  const toggleRemind = async (id) => {
    const single_task = await fetchTask(id);
    const update_task = { ...single_task, reminder: !single_task.reminder };

    const result = await fetch(`https://todos-80274.firebaseio.com/tasks/${id}.json`, {
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
