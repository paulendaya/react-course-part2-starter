import { LoginStatus, useAuth, useAuthStore } from "./auth";
import { useCounterStore } from "./counter";
import { useTasks } from "./tasks";

const NavBar = () => {
  const { tasks } = useTasks();
  //const { user } = useAuth();
  const { user } = useAuthStore();
  // const { counter } = useCounterStore();
  const counter = useCounterStore((s) => s.counter);
  // s is the state object and counter is the property defined in the interface
  // We're only interested in the counter property
  // When  counter property (not the whole state object) changes, the component will re-render
  // just testing the feature of state management system that a component only re-renders when the state changes

  //console.log("Re-rendering NavBar");

  return (
    <nav className="navbar d-flex justify-content-between">
      {user && <span className="badge text-bg-secondary">{counter}</span>}
      <LoginStatus />
    </nav>
  );
};

export default NavBar;
