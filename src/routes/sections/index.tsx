import React from 'react';
import { Navigate, useRoutes } from 'react-router-dom';
//
import { mainRoutes, HomePage } from './main';

// ----------------------------------------------------------------------

const Router: React.FC = () => {
  return useRoutes([
    {
      path: '/',
      element: <HomePage />,
    },

    ...mainRoutes,

    // No match 404
    { path: '*', element: <Navigate to="/404" replace /> },
  ]);
};

export default Router;
