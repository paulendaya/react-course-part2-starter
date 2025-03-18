// We created index.ts file to expose only the "public interface" of the module
// Here' we're hiding the "implementataion details" of the module

export { default as useTasks } from "./useTasks";
export { default as TaskList } from "./TaskList";
export { default as TasksProvider } from "./TasksProvider";
