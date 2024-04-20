import TaskShow from "./TaskShow";

const TaskList = (props) => {
  const { tasks, onDelete } = props;

  return (
    <div className="task-list">
      {tasks.map((task, index) => {
        return (
          <div key={task.id}>
            <TaskShow task={task} index={index} onDelete={onDelete} />
          </div>
        );
      })}
    </div>
  );
};

export default TaskList;
