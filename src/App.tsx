import "./App.css";

import HomePage from "./state-management/HomePage";
import NavBar from "./state-management/NavBar";
import Welcome from "./state-management/Welcome";
import { TasksProvider } from "./state-management/tasks";
import { Counter } from "./state-management/counter";

function App() {
  // We wrap our components that need to access the state in a Context Provider
  return (
    <>
        <TasksProvider>
          <NavBar />
          <Welcome />
          <HomePage />
        </TasksProvider>
      <Counter />
    </>
  );
}

export default App;
