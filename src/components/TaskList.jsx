import TaskShow from "./TaskShow";

const TaskList = (props) => {
  const { tasks, onDelete, onUpdate } = props;

  return (
    <div className="task-list">
      {tasks.map((task, index) => {
        return (
          <div key={task.id}>
            <TaskShow
              task={task}
              index={index}
              onDelete={onDelete}
              onUpdate={onUpdate}
            />
          </div>
        );
      })}
    </div>
  );
};

export default TaskList;
