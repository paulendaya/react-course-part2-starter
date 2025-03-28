import { createBrowserRouter } from "react-router-dom";
import ContactPage from "./ContactPage";
import HomePage from "./HomePage";
import Layout from "./Layout";
import UserDetail from "./UserDetail";
import UserPage from "./UserPage";

// In this file, we define the routes for our application
// by using the createBrowserRouter function from react-router-dom

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      //chilren are the nested routes, they will be rendere inside the parent route within the Outlet component
      { index: true, element: <HomePage /> },
      {
        path: "users",
        element: <UserPage />,
        children: [{ path: ":id", element: <UserDetail /> }],
      },
      { path: "contact", element: <ContactPage /> },
    ],
  },
]);

export default router;
