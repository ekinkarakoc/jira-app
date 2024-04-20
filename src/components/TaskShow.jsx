import React from "react";

const TaskShow = ({ task, index, onDelete }) => {
  const handleDeleteClick = () => {
    onDelete(task.id);
  };
  console.log(task);
  return (
    <div className="task-show">
      <h3 className="task-title">{index + 1}. Göreviniz</h3>
      <p>{task.title}</p>
      <h3 className="task-title">Yapılacaklar</h3>
      <p>{task.taskDesc}</p>
      <div>
        <button className="task-delete" onClick={handleDeleteClick}>
          Sil
        </button>
        <button className="task-update">Güncelle</button>
      </div>
    </div>
  );
};

export default TaskShow;