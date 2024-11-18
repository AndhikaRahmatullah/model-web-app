/* eslint-disable react-refresh/only-export-components */

import { lazy, Suspense } from 'react';
import { Outlet } from 'react-router-dom';
// layouts
import { MainLayout } from '/src/layouts/main';
// components
import { LoadingScreen } from '/src/components/loading-screen';
// pages
export const HomePage = lazy(() => import('/src/pages/home/app'));
export const MapPage = lazy(() => import('/src/pages/map/app'));
export const AboutPage = lazy(() => import('/src/pages/about/app'));

// ----------------------------------------------------------------------

export const mainRoutes = [
  {
    path: '/',
    element: (
      <MainLayout>
        <Suspense fallback={<LoadingScreen />}>
          <Outlet />
        </Suspense>
      </MainLayout>
    ),
    children: [
      { element: <HomePage />, index: true },
      {
        path: 'map',
        children: [{ element: <MapPage />, index: true }],
      },
      {
        path: 'about',
        children: [{ element: <AboutPage />, index: true }],
      },
    ],
  },
];
