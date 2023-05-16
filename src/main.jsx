import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/pages/Home.jsx';
import Detailes from './Components/pages/Detailes.jsx';
import Post from './Components/pages/Post';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>

  },

  {
    path: "checkout/:id",
    element: <Detailes></Detailes>,
    loader: ({ params }) => fetch(`http://localhost:5000/user/${params.id}`)

  },
  {
    path: "post",
    element: <Post></Post>
  }

])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
