import React from 'react'
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './components/auth/Login'
import Home from './components/pages/Home'
import Register from './components/auth/Register'
import Dashboard from './components/pages/Dashboard'
import Profile from './components/pages/Profile'
import TweetContent from './components/pages/TweetContent'


const appRouter=createBrowserRouter([
   {
     path:"/",
     element:<Home/>,
     children:[
      {
        path:"/",
        element:<TweetContent/>,
        children:[]
      },
      {
        path:"/profile",
        element:<Profile/>,
        children:[]
      }
     ]
   },
   {
    path:"/login",
    element:<Login/>,
    children:[]
   },
   {
    path:"/register",
    element:<Register/>,
    children:[]
   }
])

const App = () => {
  return (
   <RouterProvider router={appRouter}>
       <div>App</div>
   </RouterProvider>
  )
}

export default App