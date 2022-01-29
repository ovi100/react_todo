import { useState, useEffect } from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';

function App() {
  const [loading, setLoading] = useState(true);
  const [tasks, setTasks] = useState([]);
  const [editTask, setEditTask] = useState(null);

  // Fetching data from server

  useEffect(() => {
    fetchTasks();
  }, [])

  const fetchTasks = async () => {
    const result = await fetch('https://todos-80274.firebaseio.com/tasks.json');
    const data = await result.json();
    //console.log(data);
    if (data) {
      const plain_data = Object.keys(data).map((key) => {
        return { id: key, ...data[key] }
      });
      // console.log(plain_data);
      setTasks(plain_data);
    }
    setLoading(false);
  }

  // Fetching Single Data
  const fetchTask = async (id) => {
    const result = await fetch(`https://todos-80274.firebaseio.com/tasks/${id}.json`);
    const data = await result.json();
    return data;
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

  // ********************************

  // Edit Task
  const onEdit = async (task) => {
    const update_task = task;

    await fetch(`https://todos-80274.firebaseio.com/tasks/${task.id}.json`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(update_task)
    });
    setEditTask(null);
    fetchTasks();
  }

  // Delete Task
  const deleteTask = async (id) => {
    await fetch(`https://todos-80274.firebaseio.com/tasks/${id}.json`, { method: 'DELETE' });
    setTasks(tasks.filter(task => task.id !== id));
  }

  // Remind Task
  const toggleRemind = async (id) => {
    const single_task = await fetchTask(id);
    const update_task = { ...single_task, reminder: !single_task.reminder };

    await fetch(`https://todos-80274.firebaseio.com/tasks/${id}.json`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(update_task)
    });

    fetchTasks();
  }

  // Complete Task
  const completeTask = async (id) => {
    const single_task = await fetchTask(id);
    const update_task = { ...single_task, complete: !single_task.complete };

    await fetch(`https://todos-80274.firebaseio.com/tasks/${id}.json`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(update_task)
    });

    fetchTasks();
  }

  return (
    <div className="todo">
      <Header title="React Todo" />
      <AddTask onAdd={addTask} onEdit={onEdit} task={editTask} />
      {loading ?
        (
          <div className="no-task">
            <h3>Task Loading.....</h3>
          </div>
        )
        :
        <>
          {tasks.length > 0 ?
            (
              <Tasks
                tasks={tasks}
                onDelete={deleteTask}
                onRemind={toggleRemind}
                onComplete={completeTask}
                setEditTask={setEditTask}
              />
            )
            :
            (
              <div className="no-task">
                <h3>No task found</h3>
                <p>Please add some task</p>
              </div>
            )
          }
        </>
      }
    </div>
  );
}

export default App;
