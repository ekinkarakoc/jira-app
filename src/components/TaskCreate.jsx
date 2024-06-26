import { useContext, useState } from "react";
import "../App.css";
import TasksContext from "../context/task";

const TaskCreate = ({ task, taskFormUpdate, onUpdate }) => {
  const { editTaskById, createTask, handleEditClick } =
    useContext(TasksContext);

  const [title, setTitle] = useState(task ? task.title : "");
  const [taskDesc, setTaskDesc] = useState(task ? task.taskDesc : "");

  const handleChange = (e) => {
    setTitle(e.target.value);
  };
  const handleTaskChange = (e) => {
    setTaskDesc(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskFormUpdate) {
      onUpdate(task.id, title, taskDesc);
    } else {
      createTask(title, taskDesc);
    }
    setTitle("");
    setTaskDesc("");
  };

  return (
    <div>
      {taskFormUpdate ? (
        <>
          <div className="task-update">
            <h3>Lütfen Taskı Düzenleyiniz!!</h3>
            <form className="task-form" onSubmit={handleSubmit}>
              <label className="task-label" htmlFor="baslik">
                Başlığı Düzenleyiniz
              </label>
              <input
                type="text"
                className="task-input"
                id="baslik"
                value={title}
                onChange={handleChange}
              />
              <label className="task-label" htmlFor="olustur">
                Taskı Düzenleyiniz
              </label>
              <textarea
                type="text"
                className="task-input"
                id="olustur"
                rows={5}
                value={taskDesc}
                onChange={handleTaskChange}
              />
              <button
                className="task-button update-button"
                onClick={handleEditClick}
              >
                Güncelle
              </button>
            </form>
          </div>
        </>
      ) : (
        <>
          <div className="task-create">
            <h3>Lütfen Task Ekleyiniz!!</h3>
            <form className="task-form" onSubmit={handleSubmit}>
              <label className="task-label" htmlFor="baslik">
                Başlık
              </label>
              <input
                type="text"
                className="task-input"
                id="baslik"
                value={title}
                onChange={handleChange}
              />
              <label className="task-label" htmlFor="olustur">
                Task Giriniz
              </label>
              <textarea
                type="text"
                className="task-input"
                id="olustur"
                rows={5}
                value={taskDesc}
                onChange={handleTaskChange}
              />
              <button className="task-button">Oluştur</button>
            </form>
          </div>
        </>
      )}
    </div>
  );
};

export default TaskCreate;
