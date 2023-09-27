import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Login from "../pages/Shared/Login/Login";
import SignUp from "../pages/Shared/Registration/SignUp";
import Home from "../pages/Home/Home/Home";
import TreeDetails from "../pages/Trees/TreeDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <SignUp />,
      },
      {
        path:"/trees/:id",
        element:<TreeDetails/>,
        loader: ({params})=>fetch(`http://localhost:5000/trees/${params.id}`)
      }
    ],
  },
]);

export default router;
