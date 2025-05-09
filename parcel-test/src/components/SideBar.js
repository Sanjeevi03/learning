import React from 'react'
import { Link } from "react-router"

const routes = [
  {
    title: "Home",
    path: "/"
  },
  {
    title: "About",
    path: "/about"
  },
  {
    title: "Contact",
    path: "/contact"
  },
]
const SideBar = () => {
  return (
    <div className="w-68 border">
      <div className="border">
        {
          routes.map(route => (
              <Link key={route.path} to={route.path}>
            <div  className="border py-2 px-1">
                <span className="px-4">{route.title}</span>
            </div>
              </Link>
          ))
        }
      </div>
    </div>
  )
}

export default SideBar