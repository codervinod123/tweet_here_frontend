import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./components/auth/Login";
import Home from "./components/pages/Home";
import Register from "./components/auth/Register";
import Profile from "./components/pages/Profile";
import TweetContent from "./components/pages/TweetContent";
import LandingPage from "./components/pages/LandingPage";
import FutureUpdate from "./components/pages/FutureUpdate";
import Tweet from "./components/Tweet";
import Trending from "./components/pages/Trending";
import TrendingPosts from "./components/pages/TrendingPosts";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/",
        element: <TweetContent />,
        children: [],
      },
      {
        path: "/trending",
        element: <Trending />,
        children: [],
      },
      {
        path: "/trendingpost",
        element: <TrendingPosts />,
        children: [],
      },
      {
        path: "/profile",
        element: <Profile />,
        children: [
          {
            path: "",
            element: <Tweet />,
            children: [],
          },
          {
            path: "futureupdate",
            element: <FutureUpdate />,
            children: [],
          },
        ],
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
    children: [],
  },
  {
    path: "/register",
    element: <Register />,
    children: [],
  },
  {
    path: "/landing",
    element: <LandingPage />,
    children: [],
  },
]);

const App = () => {
  return (
    <RouterProvider router={appRouter}>
      <div>App</div>
    </RouterProvider>
  );
};

export default App;
