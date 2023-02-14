import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import Contact from './contact/Contact.jsx'
import Experience from './experience/Experience.jsx'
import Home from "./home/Home.jsx"
import Portfolio from './portfolio/Portfolio.jsx'
import Root from './Root.jsx'
import './marchepas.css'

const router = createBrowserRouter([
  {
      path: '/',
      element: <Root />,
      //errorElement: <ErrorPage/>,
      children: [
          {
              path: '/home',
              element: <Home/>
          },
          {
              path: '/experience',
              element: <Experience/>
          },
          {
              path: '/portfolio',
              element: <Portfolio/>
          },
          {
              path: '/contact',
              element: <Contact/>
          }
      ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
