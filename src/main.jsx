import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Body from '../components/Body'
import Header from '../components/Header'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import BrainTumor from '../components/BrainTumor'
import Alzheimers from '../components/Alzheimers'

const appRouter = createBrowserRouter([
  {
    path:"/",
    element: <App />,
    children:[{
      path:"/BrainTumor",
      element: <BrainTumor />,
    },
    {
      path:"/Alzheimers",
      element: <Alzheimers />,
    }]
  },
  

])




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={appRouter} />
  </React.StrictMode>,
)
