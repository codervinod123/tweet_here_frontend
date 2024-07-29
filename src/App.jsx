import React from 'react'
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './components/auth/Login'
import Home from './components/pages/Home'
import Register from './components/auth/Register'


const appRouter=createBrowserRouter([
  {
    path:"/",
    element:<Home/>,
    childrea:[]
  },
   {
      path:"/login",
      element:<Login/>,
      childrea:[]
   },
   {
    path:"/register",
    element:<Register/>,
    childrea:[]
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