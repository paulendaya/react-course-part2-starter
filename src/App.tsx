import "./App.css";

import AuthProvider from "./state-management/AuthProvider";
import HomePage from "./state-management/HomePage";
import NavBar from "./state-management/NavBar";
import TasksProvider from "./state-management/TasksProvider";
import Welcome from "./state-management/Welcome";

function App() {
  // We wrap our components that need to access the state in a Context Provider
  return (
    <AuthProvider>
      <TasksProvider>
        <NavBar />
        <Welcome />
        <HomePage />
      </TasksProvider>
    </AuthProvider>
  );
}

export default App;
