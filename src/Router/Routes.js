import React from 'react';
import { useRoutes } from 'react-router-dom';
import HomePage from '../pages/Homepage/Homepage';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import HomeLayout from '../layouts/HomeLayout/HomeLayout';
import paths from './paths';
import DetailClub from '../pages/DetailClub/DetailClub';
// import Register from "../Pages/register/register";
const Router = () => {
  const routes = useRoutes([
    {
      path: '/home',
      element: <HomeLayout />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
      ],
    },
    {
      path: paths.register,
      element: <Register />,
    },
    {
      path: paths.login,
      element: <Login />,
    },
    {
      path: '*',
      element: <Login />,
    },
    {
      path:paths.home.detail,
      element:<DetailClub/>
    }
  ]);
  return routes;
};
export default Router;
