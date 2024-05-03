import { Navigate } from "react-router-dom";
import  ListCategory  from "../Containers/Category/ListToDo/ListToDo"; // Import the ListCategory component

interface ProtectRouteProps {
  path?: string; // Make the path property optional
}

const ProtectRoute = ({ path = "/" }: ProtectRouteProps) => { // Provide a default value for the path property
  const token = localStorage.getItem("token");

  if (token) {
    if (path === "/categories") { // Check if the path matches the category page URL
      return <ListCategory />; // Render the ListCategory component for the category page
    } else {
      return <Navigate to="/" />; // Redirect to the home page for other paths
    }
  }

  return <Navigate to="/" />; // Redirect to the home page if no token is found
};

export default ProtectRoute;