import {createBrowserRouter,} from "react-router-dom";
import Main from "../Layout/Main";
import Login from "../pages/Shared/Login/Login";
import SignUp from "../pages/Shared/Registration/SignUp";

  const router = createBrowserRouter([
    {
      path: "/",
      element:<Main/>,
      children:[
        {
          path:'login',
          element:<Login/>
        },
        {
          path:'register',
         element:<SignUp/>
        }
      ]
    },
  ]);
  
  export default router;