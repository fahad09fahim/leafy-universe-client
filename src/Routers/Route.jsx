import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Login from "../pages/Shared/Login/Login";
import SignUp from "../pages/Shared/Registration/SignUp";
import Home from "../pages/Home/Home/Home";
import TreeDetails from "../pages/Trees/TreeDetails";
import Trees from "../pages/Trees/Trees";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader:()=>fetch('https://leafy-universe-server-pikk9fpwt-fahad09fahim.vercel.app/trees')
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
        element:<Trees/>
      },
      {
        path:"/trees/:id",
        element:<TreeDetails/>,
        loader: ({params})=>fetch(`https://leafy-universe-server-pikk9fpwt-fahad09fahim.vercel.app/trees/${params.id}`)
      }
    ],
  },
]);

export default router;
