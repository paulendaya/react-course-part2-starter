import { createBrowserRouter } from "react-router-dom";
import ContactPage from "./ContactPage";
import HomePage from "./HomePage";
import Layout from "./Layout";
import UserDetail from "./UserDetail";
import UserPage from "./UserPage";
import ErrorPage from "./ErrorPage";
import LoginPage from "./LoginPage";
import PrivateRoutes from "./PrivateRoutes";

// In this file, we define the routes for our application
// by using the createBrowserRouter function from react-router-dom

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />, // This handles both 404 and 500 errors or any other errors that occur during rendering or the application throws an error
    children: [
      //chilren are the nested routes, they will be rendere inside the parent route within the Outlet component
      { index: true, element: <HomePage /> },
      { path: "login", element: <LoginPage /> },
      { path: "contact", element: <ContactPage /> },
    ],
  },
  // This is a layout route, to group routes that are always rendered together, in this case, the children routes are protected routes or routes that require authentication
  {
    element: <PrivateRoutes />,
    children: [
      {
        path: "users",
        element: <UserPage />,
        children: [{ path: ":id", element: <UserDetail /> }],
      },
    ],
  },
]);

export default router;
