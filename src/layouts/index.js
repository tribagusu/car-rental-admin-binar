import React from "react"
import Header from "./Header"
import Sidebar from "./Sidebar"

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Sidebar />
      <div className="page-content">{children}</div>
      <Header />
    </div>
  )
}

export default Layout
