import React, { useState } from "react";
import TaskCreate from "./TaskCreate";

const TaskShow = ({ task, index, onDelete }) => {
  const [showEdit, setShowEdit] = useState(false);

  const handleDeleteClick = () => {
    onDelete(task.id);
  };

  const handleEditClick = () => {
    setShowEdit(!showEdit);
  };

  return (
    <div className="task-show">
      {showEdit ? (
        <>
          <TaskCreate task={task} taskFormUpdate={true} />
        </>
      ) : (
        <>
          <h3 className="task-title">{index + 1}. Göreviniz</h3>
          <p>{task.title}</p>
          <h3 className="task-title">Yapılacaklar</h3>
          <p>{task.taskDesc}</p>
          <div>
            <button className="task-delete" onClick={handleDeleteClick}>
              Sil
            </button>
            <button className="task-update-button" onClick={handleEditClick}>
              Güncelle
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default TaskShow;
