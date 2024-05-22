import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './Layout/Layout.jsx';
import Home from './components/Home/Home.jsx';
import Header from './components/Header/Header.jsx';
import Login from './components/Login/Login.jsx';
import Register from './components/Register/Register.jsx';
import 'bootstrap/dist/css/bootstrap.min.css'
import Blog from './components/Blog/Blog.jsx';
import Chefpage from './components/Chefpage/Chefpage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: ()=> fetch(`http://localhost:5000/chef`)
      }, 
      {
        path: "/header",
        element: <Header></Header>,
      }, 
      {
        path: "login",
        element: <Login></Login>,
      },  {
        path: "register",
        element: <Register></Register>,
      }, 
      {
        path: "blog",
        element: <Blog></Blog>,
      }, 
      {
        path: "/chef/:id",
        element: <Chefpage></Chefpage>,
        loader: ({params})=> fetch(`http://localhost:5000/chef/${params.id}`)
      }
       
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
       <RouterProvider router={router} />
  </React.StrictMode>,
)
