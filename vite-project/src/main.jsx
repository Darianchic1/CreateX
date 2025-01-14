import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import {Home} from '../src/pages/Home'
import { About } from '../src/pages/About'
import { ServicesPage } from '../src/pages/ServicesPage'
import { ProjectsPage } from '../src/pages/ProjectsPage'
import { NewsPage } from '../src/pages/NewsPage'

const router = createBrowserRouter([
  {
    path: '',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/services',
        element: <ServicesPage />
      },
      {
        path: '/projects',
        element: <ProjectsPage />
      },
      {
        path: '/news',
        element: <NewsPage />
      },
    ]
  }
])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
