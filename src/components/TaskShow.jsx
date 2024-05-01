import React, { useContext, useState } from "react";
import TaskCreate from "./TaskCreate";
import TasksContext from "../context/task";

const TaskShow = ({ task, index }) => {
  const { onDelete, editTaskById } = useContext(TasksContext);
  const [showEdit, setShowEdit] = useState(false);

  const handleDeleteClick = () => {
    onDelete(task.id);
  };

  const handleEditClick = () => {
    setShowEdit(!showEdit);
  };

  const handleOnUpdate = (id, newTitle, newTaskDesc) => {
    editTaskById(id, newTitle, newTaskDesc);
    setShowEdit(!showEdit);
  };
  return (
    <div className="task-show">
      {showEdit ? (
        <>
          <TaskCreate
            task={task}
            taskFormUpdate={true}
            onUpdate={handleOnUpdate}
          />
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
