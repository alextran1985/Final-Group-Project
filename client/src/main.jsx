// main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./index.css";    
import App from "./App";
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

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );