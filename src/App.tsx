import { useReducer } from "react";
import "./App.css";

import AuthProvider from "./state-management/AuthProvider";
import HomePage from "./state-management/HomePage";
import NavBar from "./state-management/NavBar";
import Welcome from "./state-management/Welcome";
import TasksContext from "./state-management/contexts/tasksContext";
import tasksReducer from "./state-management/reducers/tasksReducer";

function App() {
  const [tasks, tasksDispatch] = useReducer(tasksReducer, []);

  // We wrap our components that need to access the state in a Context Provider
  return (
    <AuthProvider>
      <TasksContext.Provider value={{ tasks, dispatch: tasksDispatch }}>
        <NavBar />
        <Welcome />
        <HomePage />
      </TasksContext.Provider>
    </AuthProvider>
  );
}

export default App;
