import { useState } from "react";
import "../App.css";

const TaskCreate = ({ onCreate }) => {
  const [title, setTitle] = useState(" ");
  const [taskDesc, setTaskDesc] = useState(" ");

  const handleChange = (e) => {
    setTitle(e.target.value);
  };
  const handleTaskChange = (e) => {
    setTaskDesc(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    onCreate(title, taskDesc);
    setTitle("");
    setTaskDesc("");
  };

  return (
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
  );
};

export default TaskCreate;
