import React from 'react'
import Header from "./Header"
import SideBar from "./SideBar"
import Footer from "./Footer"
import { Outlet } from "react-router"

const Layout = () => {
  return (
    <>
      <Header/>
      <div className="flex border border-red-600 h-[80.20vh]">
        <SideBar/>
        <Outlet/>
      </div>
      <Footer/>
    </>
  )
}

export default Layout