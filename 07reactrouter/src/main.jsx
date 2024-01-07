import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Layout.jsx'
import About from './components/about/About.jsx'
import Homes from './components/Homes/Home.jsx'
import Contact from './components/contactus/Contact.jsx'
import Github from './components/Github/Github.jsx'


const router = createBrowserRouter([{
  path: '/',
  element: <Layout />,
  children: [{
    path: "",
    element: <Homes />
  }, {
    path: "about",
    element: <About />
  }, {
    path: "contact",
    element: <Contact />
  }, {
    path: "github",
    element: <Github></Github>
  }]
}])






ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <RouterProvider router={router} />
  </React.StrictMode>,
)
