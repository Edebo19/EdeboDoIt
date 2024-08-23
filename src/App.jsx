import React from 'react'
import { createHashRouter, RouterProvider } from 'react-router-dom'
import Login from './components/Auth/Login'
import SignUp from './components/Auth/SignUp'
import LandingPage from './components/Auth/LandingPage'
import BuyersPage from './components/Home/BuyersPage'
import Product from './components/Each/Product'
import Checkout from './components/Checkout/Checkout'
import Private from './components/Each/Private'

const router = createHashRouter([
  {
    path: "",
    element: <LandingPage/>
  },
  {
    path: "login",
    element:<Login/>
  },
  {
    path: "signup",
    element:<SignUp/>
  },
  {
    path: "user",
    element: <Private/>,
    children: [
      {
        path: "buyer",
        element:<BuyersPage/>
      },
      {
        path: "menu-page/:catname",
        element:<Product/>
      },
      {
        path: "checkout",
        element:<Checkout/>
      }
    ]
  }
])
const App = () => {
  return (
    <RouterProvider router={router} fallbackElement ={<div>Loading...</div>}/>
  )
}

export default App