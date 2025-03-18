import { ReactNode, useReducer } from "react";
import TasksContext from "./tasksContext";

// COMPLEX REDUCER
// Reducer is a function that takes in the current state and an action, and returns the new state
// Reducer purpose is to centralize the logic of how the state changes, so we can keep the state logic in one place
// To have a separation of concerns - component is for UI, and reducer is for state

export interface Task {
  id: number;
  title: string;
}

interface AddTask {
  type: "ADD";
  task: Task;
}

interface DeleteTask {
  type: "DELETE";
  id: number;
}

export type TaskAction = AddTask | DeleteTask;
// we use type to define the shape of the action
// type is a way to define the shape of the action, it's main difference from interface is that type supports unions
// AddTask and DeleteTask are being unioned together, so we can use them in switch statement by using the property type

const tasksReducer = (tasks: Task[], action: TaskAction): Task[] => {
  switch (action.type) {
    case "ADD":
      return [action.task, ...tasks];
    // spread operator is used to spread the array into a new array
    // it's a way to copy the array
    // spread operator can be placed at the end of the array, or at the beginning - it doesn't matter, but it's good to place it at the end
    case "DELETE":
      return tasks.filter((task) => task.id !== action.id);
    // filter is used to filter the array based on a condition
    // it returns a new array with the elements that pass the condition
    // in this case, we're filtering out the task with the id that was passed in the action
  }
};

interface Props {
  children: ReactNode;
}

const TasksProvider = ({ children }: Props) => {
  const [tasks, dispatch] = useReducer(tasksReducer, []);
  return (
    <TasksContext.Provider value={{ tasks, dispatch }}>
      {children}
    </TasksContext.Provider>
  );
};

export default TasksProvider;
