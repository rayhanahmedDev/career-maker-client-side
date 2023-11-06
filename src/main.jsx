import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Layout/Root';
import ErrorPage from './Pages/Error/ErrorPage';
import Home from './Pages/Home/Home';
import Services from './Pages/Services/Services';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import AuthProvider from './provider/AuthProvider';
import MyServices from './Pages/MyServices/MyServices';
import AddServices from './Pages/AddServices/AddServices';
import MySchedules from './Pages/MySchedules/MySchedules';
import AllServices from './Pages/AllServices/AllServices';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/services',
        element: <Services></Services>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/my-services',
        element: <MyServices></MyServices>
      },
      {
        path: '/add-services',
        element:<AddServices></AddServices>
      },
      {
        path:'/my-schedules',
        element:<MySchedules></MySchedules>
      },
      {
        path:'/allservices',
        element:<AllServices></AllServices>,
      }
    ]
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
