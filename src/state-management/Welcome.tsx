import { useAuth } from "./auth";

const Welcome = () => {
  const { user } = useAuth();
  if (!user) return null;
  return <h3>Welcome, {user}!</h3>;
};

export default Welcome;
