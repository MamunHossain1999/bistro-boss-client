import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../MainLayOut/Main";
import Home from "../pages/home/Home";
import Menu from "../pages/menu/Menu";

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
        }
      ]
    },
  ]);