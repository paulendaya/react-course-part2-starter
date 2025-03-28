import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg"
      style={{ background: "#f0f0f0", marginBottom: "1rem" }}
    >
      <div className="container-fluid">
        <div className="d-flex justify-content-between">
          <a className="navbar-brand" href="#">
            My App
          </a>
          <div className="collapse navbar-collapse show" id="navbarNav">
            <ul className="navbar-nav d-flex gap-3 flex-row">
              <li className="nav-item">
                {/* <Link to="/" className="nav-link">
                  Home
                </Link> */}
                <NavLink to="/" className="nav-link">
                  Home
                </NavLink>
                {/* <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "active nav-link" : " nav-link"
                  }
                >
                  Home
                </NavLink> //isActive inside the function is a boolean that you can use to check if its the current route or not, then a desired active class can be outputted, otherwise, 'active' will automatically be attached */}
              </li>
              <li className="nav-item">
                <NavLink to="/users" className="nav-link">
                  Users
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
