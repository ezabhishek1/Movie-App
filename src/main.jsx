import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import LandingPage from './pages/LandingPage.jsx';
import Explore from './pages/Explore.jsx';
import MovieExplore from './pages/Movies/MovieExplore.jsx';
import DetailedMovie from './pages/Movies/DetailedMovie.jsx';
import NavBar from './components/common/NavBar.jsx';
import TvExplore from './pages/Tvshows/Explore.jsx';
import TvDetails from './pages/Tvshows/Details.jsx';
import PeopleExplore from './pages/People/PeopleExplore.jsx'
import DetailedPeople from './pages/People/DetailedPeople.jsx'


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
    path: "/movies",
    element: <MovieExplore />,
  },
  {
    path: "/movies/:movieid",
    element: <DetailedMovie />
  },
  {
    path: "/tvshow",
    element: <TvExplore />,
  },
  {
    path: "/tvshow/:tvshowid",
    element: <TvDetails />
  },
  {
    path: "/people",
    element: <PeopleExplore />,
  },
  {
    path: "/people/:peopleid",
    element: <DetailedPeople />
  },
  {
    path: "*",
    element: <div>Not Found</div>,
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode >
    <NavBar />
    <RouterProvider router={router} />
  </React.StrictMode>,
)
