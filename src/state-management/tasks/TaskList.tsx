import { useContext } from "react";
import useAuth from "../hooks/useAuth";
import TasksContext from "./tasksContext";

const useTasks = () => useContext(TasksContext);
// If we are to reuse the hook useTasks in other components, we can have a separate file for it
// Otherwise, we can have it in the same file as the component for simplicity, like this

const TaskList = () => {
  const { tasks, dispatch } = useTasks();
  const { user } = useAuth();

  if (!user) return null;

  return (
    <>
      <button
        onClick={() =>
          dispatch({
            type: "ADD",
            task: {
              id: Date.now(),
              title: "New Task - " + Date.now(),
            },
          })
        }
        className="btn btn-primary my-3"
      >
        Add Task
      </button>
      <ul className="list-group">
        {tasks.map((task) => (
          <li
            key={task.id}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            <span className="flex-grow-1">{task.title}</span>
            <button
              className="btn btn-outline-danger"
              onClick={() =>
                dispatch({
                  type: "DELETE",
                  id: task.id,
                })
              }
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default TaskList;
