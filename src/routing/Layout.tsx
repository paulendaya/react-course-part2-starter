import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";

const Layout = () => {
  // Outlet is a react-router-dom component that renders the child route component
  return (
    <>
      <NavBar />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
