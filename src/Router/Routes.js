import React from 'react';
import { useRoutes } from 'react-router-dom';
import HomePage from '../pages/Homepage/Homepage';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import HomeLayout from '../layouts/HomeLayout/HomeLayout';
import paths from './paths';
// import Register from "../Pages/register/register";
import SettingsLayout from '../layouts/SettingsLayout/SettingsLayout';

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
      path: paths.settings.default,
      element: <SettingsLayout />,
      children: [
        {
          index: true,
          element: <h1>test</h1>,
        },
      ],
    },
  ]);
  return routes;
};
export default Router;
