import { Dispatch } from "react";
import { Task, TaskAction } from "./TasksProvider";
import React from "react";

// The purpose of the context is to share the state between components without doing a prop drilling

interface TaskContextType {
  tasks: Task[];
  dispatch: Dispatch<TaskAction>;
  // Dispatch is a type from react, it's a function that takes an action and returns void
}

const TasksContext = React.createContext<TaskContextType>(
  {} as TaskContextType
);
// By default, the value of the context is an empty object
// We don't want to have a null as a default value
// Instead we want to have an empty object but output it as a TaskContextType

export default TasksContext;
