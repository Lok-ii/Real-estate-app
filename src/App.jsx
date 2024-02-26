import { useState } from "react";
import "./App.css";
import Header from "./Components/Home/Header";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Components/Layout";
import Home from "./Components/Home/Home";
import { store } from "./Redux/Store";
import { Provider } from "react-redux";
import Liked from "./Components/Home/Liked";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },

        {
          path: "/rent",
          element: <Home />,
        },

        {
          path: "/buy",
          element: <Home />,
        },

        {
          path: "/sell",
          element: <Home />,
        },
        {
          path: "/manageproperty",
          element: <Home />,
        },
        {
          path: "/resources",
          element: <Home />,
        },
        {
          path: "/filter",
          element: <Home />
        },
        {
          path:'/search',
          element: <Home />
        },
        {
          path: "/liked",
          element: <Home />
        }
      ],
    },
  ]);
  return (
    <Provider store={store}>
      <div className="flex flex-col items-center gap-8">
        <RouterProvider router={router} />
      </div>
    </Provider>
  );
}

export default App;
