// main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";    
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from "./components/Home/Home";
import Recipes from "./components/Recipes/Recipes";
import Profile from "./components/Profile/Profile";

// we create a router instance
const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
      /*  errorElement: <ErrorComponent />, */
      children: [
        {
            path: '/',
            element: <Home />
        },
        {
            path: '/recipes/:id',
            element: <Recipes />
        },
        {
            path: '/profile',
            element: <Profile />
        }
      ]
    }
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
