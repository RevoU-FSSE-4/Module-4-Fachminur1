import { CreateUserContainer, LoginContainer } from "./Containers/index";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PublicRoute from "./Layout/PublicRoute";
import ProtectRoute from "./Layout/ProtectRoute";
import ContextProvider from "./Provider/Provider";
import ListCategory from "./Containers/Category/ListToDo/ListToDo"; // Import ListCategory component directly

const App = () => {
  const router = createBrowserRouter([
    {
      element: <PublicRoute />,
      children: [
        {
          path: "/",
          element: <CreateUserContainer />,
        },
        {
          path: "/login",
          element: <LoginContainer />,
        },
      ],
    },
    {
      path: "*", // Wildcard route for 404
      element: <h1>404</h1>,
    },
    {
      element: <ProtectRoute />,
      children: [
        // Remove the old route configuration for "/list-category" path
        // Add the ListCategory component wrapped inside a route object
        {
          path: "/list-category", // Define the path for the ListCategory component
          element: <ListCategory /> // Wrap ListCategory inside a route object
        }
      ],
    },
  ]);

  return (
    <div>
      <ContextProvider>
        <RouterProvider router={router} />
      </ContextProvider>
    </div>
  );
};

export default App;
