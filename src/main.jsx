import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import Github, { githubInfoLoader } from './components/Github.jsx'
import AddPlayers from './components/addplayer/AddPlayers.jsx'

const router = createBrowserRouter(
      createRoutesFromElements(
        <Route  path="/" element={<Layout />}>
            <Route path="" element={<Home />} />
            <Route path="about" element={<About />} />            
            <Route path="contact" element={<Contact />} />            
            <Route loader={githubInfoLoader} path="github" element={<Github />} />  
            <Route path="player" element={<AddPlayers />} />           
        </Route>
      )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      {/* <App /> */}
      <RouterProvider router={router} />
  </React.StrictMode>,
)
