import React from "react"
import Header from "./Header"
import Sidebar from "./Sidebar"

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Sidebar />
      {children}
      <Header />
    </div>
  )
}

export default Layout
