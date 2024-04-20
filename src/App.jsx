import { useState } from "react";
import "./App.css";
import TaskCreate from "./components/TaskCreate";
import TaskList from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState([]);
  const createTask = (title, taskDesc) => {
    const createdTasks = [
      ...tasks,
      {
        id: Math.round(Math.random() * 999999),
        title: title,
        taskDesc: taskDesc,
      },
    ];
    setTasks(createdTasks);
  };

  const onDelete = (id) => {
    const afterDeleting = tasks.filter((task) => {
      return task.id !== id;
    });
    setTasks(afterDeleting);
  };

  return (
    <>
      <div className="App">
        <TaskCreate onCreate={createTask} />
        <h1>Görevler</h1>
        <TaskList tasks={tasks} onDelete={onDelete} />
      </div>
    </>
  );
}

export default App;
