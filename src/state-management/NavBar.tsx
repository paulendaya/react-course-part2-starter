import { LoginStatus, useAuth, useAuthStore } from "./auth";
import { useCounterStore } from "./counter";
import { useTasks } from "./tasks";

const NavBar = () => {
  const { tasks } = useTasks();
  //const { user } = useAuth();
  const { user } = useAuthStore();
  const { counter } = useCounterStore();

  return (
    <nav className="navbar d-flex justify-content-between">
      {user && <span className="badge text-bg-secondary">{counter}</span>}
      <LoginStatus />
    </nav>
  );
};

export default NavBar;
