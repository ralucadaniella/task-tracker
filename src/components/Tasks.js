import Task from "./Task";

const Tasks = ({ myTasks, onDelete, onToggle }) => {
  return (
    <>
      {myTasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onDelete={onDelete}
          onToggle={onToggle}
        />
      ))}
    </>
  );
};

export default Tasks;
