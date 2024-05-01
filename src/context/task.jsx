import { createContext } from "react";
import { useState } from "react";
import axios from "axios";

const TasksContext = createContext();

const Provider = ({ children }) => {
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
  const fetchTasks = async () => {
    const response = await axios.get("http://localhost:3000/tasks");
    setTasks(response.data);
  };

  const sharedValuesAndMethods = {
    tasks,
    createTask,
    onDelete,
    editTaskById,
    fetchTasks,
  };

  return (
    <TasksContext.Provider value={sharedValuesAndMethods}>
      {children}
    </TasksContext.Provider>
  );
};

export { Provider };

export default TasksContext;
