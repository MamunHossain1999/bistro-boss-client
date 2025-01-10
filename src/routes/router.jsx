import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../MainLayOut/Main";
import Home from "../pages/home/Home";
import Menu from "../pages/menu/Menu";
import OrderShop from "../pages/OrderShop";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import Secret from "../shared/Secret/Secret";

 export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children: [
        {
           path: '/',
           element: <Home/> 
        },
        {
            path: '/menu',
            element: <Menu/>
        },
        {
          path: '/orderShop/:category',
          element: <OrderShop/>
        },
        {
          path: '/login',
          element: <Login/>
        },
        {
          path:'/register',
          element:<Register/>
        },
        {
          path: '/secret',
          element: <PrivateRoute><Secret/></PrivateRoute>
        }

      ]
    },
  ]);