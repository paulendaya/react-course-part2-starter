// COMPLEX REDUCER

interface Task {
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

type TaskAction = AddTask | DeleteTask;
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

export default tasksReducer;
