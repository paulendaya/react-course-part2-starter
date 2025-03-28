import { createBrowserRouter } from "react-router-dom";
import HomePage from "./HomePage";
import UserListPage from "./UserListPage";
import ContactPage from "./ContactPage";

// In this file, we define the routes for our application
// by using the createBrowserRouter function from react-router-dom

const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/users", element: <UserListPage /> },
  { path: "/contact", element: <ContactPage /> },
]);

export default router;
