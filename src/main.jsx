import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Statistics from './Components/Statistics';
import JobDetails from './Components/JobDetails/JobDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/",
        element: <Home/>,
        loader: () => fetch('FeaturedJobs.json')
      },
      {
        path:'/jobdetails/:id',
        element: <JobDetails/>,
        // loader: ({params}) => fetch('FeaturedJobs.json')
      },
      {
        path: 'statistics',
        element:<Statistics/>
      }
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
