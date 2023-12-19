import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import App from './App.jsx'
import Home from './components/Pages/Home.jsx';
import About from './components/Pages/About.jsx';
import Services from './components/Pages/Services';
import Blog from './components/Pages/Blog';
import Contact from './components/Pages/Contact';
import AddBlog from './components/Pages/addBlog.jsx';


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import BlogOpen from './components/Pages/blogOpen.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/home",
        element: <Home/>,
      },
      {
        path: "/about",
        element: <About/>
      },
      {
        path: "/services",
        element: <Services/>
      },
      {
        path: "/blogs",
        element: <Blog/>
      },
      {
        path: "/contact",
        element: <Contact/>
      },
      {
        path: "/addBlog",
        element: <AddBlog/>
      },
      {
        path: "/blogs/:id",
        element: <BlogOpen/>,
        loader:({params})=>fetch(`http://localhost:5000/blogs/${params.id}`)
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)

