import { CreateUserContainer, LoginContainer } from "./Containers/index"
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PublicRoute from "./Layout/PublicRoute";
import ProtectRoute from "./Layout/ProtectRoute";
import ContextProvider from "./Provider/Provider";
import EditCategory from "./Containers/Category/Edit/Edit";
import ListCategory from "./Containers/Category/ListToDo/ListToDo";
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
      path: "*",
      element: <h1>404</h1>,
    },
    {
      element: <ProtectRoute />,
      children: [
        {
          path: "/protect-list-category",
          element: <ListCategory />,
        },
        {
          path: "/protect-edit-category/:id",
          element: <EditCategory />,
        },
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