import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt,
        mollitia!
      </p>
      <div className="d-flex gap-3">
        <Link to="/users">Users</Link>
        <Link to="/contact">Contact</Link>
      </div>
      {/* <a href="/users">Users</a> */}
    </>
  );
};

export default HomePage;
