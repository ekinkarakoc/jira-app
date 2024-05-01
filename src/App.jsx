import { useEffect, useState } from "react";
import "./App.css";
import TaskCreate from "./components/TaskCreate";
import TaskList from "./components/TaskList";
import axios from "axios";

function App() {
  const [tasks, setTasks] = useState([]);
  const createTask = async (title, taskDesc) => {
    const response = await axios.post("http://localhost:3000/tasks", {
      title: title,
      taskDesc: taskDesc,
    });

    console.log(response);
    const createdTasks = [...tasks, response.data];
    setTasks(createdTasks);
  };

  const fetchTasks = async () => {
    const response = await axios.get("http://localhost:3000/tasks");
    setTasks(response.data);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const onDelete = async (id) => {
    await axios.delete(`http://localhost:3000/tasks/${id}`);
    const afterDeleting = tasks.filter((task) => {
      return task.id !== id;
    });
    setTasks(afterDeleting);
  };

  const editTaskById = async (id, newTitle, newTaskDesc) => {
    await axios.put(`http://localhost:3000/tasks/${id}`, {
      title: newTitle,
      taskDesc: newTaskDesc,
    });
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return { id: id, title: newTitle, taskDesc: newTaskDesc };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  return (
    <>
      <div className="App">
        <TaskCreate onCreate={createTask} />
        <h1>Görevler</h1>
        <TaskList tasks={tasks} onDelete={onDelete} onUpdate={editTaskById} />
      </div>
    </>
  );
}

export default App;
