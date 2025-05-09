import React from 'react'
import { createBrowserRouter, RouterProvider} from "react-router";
import Layout from "./components/Layout";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";

const routes = createBrowserRouter([
  {
    path:"/",
    Component: Layout,
    children: [
      {
        path: "/",
        Component: Home
      },
      {
        path: "/about",
        Component: About
      },
      {
        path: "/contact",
        Component: Contact
      },
    ]
  }
]);

const App = () => {
  return (
    <RouterProvider router={routes}>
      <Layout/>
    </RouterProvider>
  )
}

export default App