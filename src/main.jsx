import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import LandingPage from './pages/LandingPage.jsx';
import Explore from './pages/Explore.jsx';
import DetailedMovie from './pages/DetailedMovie.jsx';
import NavBar from './components/common/NavBar.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/explore",
    element: <Explore />,
  },
  {
    path: "/movies/:movieid",
    element: <DetailedMovie />
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NavBar />
    <RouterProvider router={router} />
  </React.StrictMode>,
)
