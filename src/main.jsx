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
import AddServices from './Pages/AddServices/AddServices';
import MySchedules from './Pages/MySchedules/MySchedules';
import AllServices from './Pages/AllServices/AllServices';
import ServiceDetails from './Pages/ServiceDetails/ServiceDetails';
import PrivateRoute from './provider/PrivateRoute';
import ManageServices from './Pages/ManageServices/ManageServices';
import UpdateServices from './Pages/UpdateServices/UpdateServices';



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
        element: <PrivateRoute><Services></Services></PrivateRoute>
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
        element: <PrivateRoute><ManageServices></ManageServices></PrivateRoute>,
        loader: () => fetch('http://localhost:5000/userService')
      },
      {
        path:'/update/:id',
        element:<UpdateServices></UpdateServices>,
        loader : ({params}) => fetch(`http://localhost:5000/userService/${params.id}`)
      },
      {
        path: '/add-services',
        element:<PrivateRoute><AddServices></AddServices></PrivateRoute>
      },
      {
        path:'/my-schedules',
        element:<MySchedules></MySchedules>
      },
      {
        path:'/allservices',
        element:<AllServices></AllServices>,
      },
      {
        path:'/details/:id',
        element:<PrivateRoute><ServiceDetails></ServiceDetails></PrivateRoute>,
        loader:({params}) => fetch(`http://localhost:5000/services/${params.id}`)
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
