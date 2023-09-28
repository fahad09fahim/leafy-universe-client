import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Login from "../pages/Shared/Login/Login";
import SignUp from "../pages/Shared/Registration/SignUp";
import Home from "../pages/Home/Home/Home";
import TreeDetails from "../pages/Trees/TreeDetails";
import Trees from "../pages/Trees/Trees";
import TreeStateProvider from "../providers/TreeStateProvider";
import PrivateRoute from "./PrivateRoute";
import AddTree from "../pages/Shared/Add Tree/AddTree";
import NotFound from './../Layout/NotFound';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <TreeStateProvider><Home/></TreeStateProvider>,
       
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
        path:"trees",
        element:<TreeStateProvider><Trees/></TreeStateProvider>
      },
      {
        path:"/trees/:id",
        element:<PrivateRoute><TreeDetails/></PrivateRoute>,
        loader: ({params})=>fetch(`http://localhost:5000/trees/${params.id}`)
      },
      {
        path:"addTree",
        element:<AddTree/>
      }
    ],
  },
  {
    path:"*",
    element:<NotFound/>
  }
]);

export default router;
