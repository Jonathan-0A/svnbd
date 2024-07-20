import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './components/Home';
import Error from './components/Error';
import DikshyartiInfo from './components/DikshyartiInfo';
import DepositInfo from './components/DepositInfo';
import MemberDetails from './components/MemberDetails';
import DepositDetails from './components/DepositDetails';

let allRoutes = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/dikshyarti-info',
    element: <DikshyartiInfo />,
  },
  {
    path: '/deposit-info',
    element: <DepositInfo />,
  },
  {
    path: '*',
    element: <Error />,
  },
  {
    path: '/error',
    element: <Error />,
  },
  {
    path: '/dikshyarti-info/member/:id',
    element: <MemberDetails />
  },
  {
    path: '/deposit-info/member/:id',
    element: <DepositDetails />
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={allRoutes} />
  </React.StrictMode>
);
