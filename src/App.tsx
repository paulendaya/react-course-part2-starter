import { useReducer } from "react";
import "./App.css";

import TasksContext from "./state-management/contexts/tasksContext";
import tasksReducer from "./state-management/reducers/tasksReducer";
import NavBar from "./state-management/NavBar";
import HomePage from "./state-management/HomePage";
import Welcome from "./state-management/Welcome";
import authReducer from "./state-management/reducers/authReducer";
import AuthContext from "./state-management/contexts/authContext";

function App() {
  const [tasks, tasksDispatch] = useReducer(tasksReducer, []);
  const [user, authDispatch] = useReducer(authReducer, "");

  // We wrap our components that need to access the state in a Context Provider
  return (
    <TasksContext.Provider value={{ tasks, dispatch: tasksDispatch }}>
      <AuthContext.Provider value={{ user, dispatch: authDispatch }}>
        <NavBar />
        <Welcome />
        <HomePage />
      </AuthContext.Provider>
    </TasksContext.Provider>
  );
}

export default App;
