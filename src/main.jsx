import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'

const router = createBrowserRouter(
      createRoutesFromElements(
        <Route  path="/" element={<Layout />}>
            <Route path="" element={<Home />} />
            <Route path="about" element={<About />} />            
            <Route path="contact" element={<Contact />} />            
        </Route>
      )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      {/* <App /> */}
      <RouterProvider router={router} />
  </React.StrictMode>,
)
