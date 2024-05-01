import { useContext } from "react";
import TaskShow from "./TaskShow";
import TasksContext from "../context/task";

const TaskList = () => {
  const { tasks } = useContext(TasksContext);

  return (
    <div className="task-list">
      {tasks.map((task, index) => {
        return (
          <div key={task.id}>
            <TaskShow task={task} index={index} />
          </div>
        );
      })}
    </div>
  );
};

export default TaskList;
