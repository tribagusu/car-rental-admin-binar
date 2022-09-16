import { Navigate } from "react-router-dom"
import React, { useState, useEffect } from "react"

// components
// const Dashboard = React.lazy(() => import("../components/Dashboard"))
// const Layout = React.lazy(() => import("../layouts"))

import Dashboard from "../components/Dashboard"
import NavDashboard from "../layouts/components/Navbar/NavDashboard"
import Header from "../layouts/components/Header"
import Sidebar from "../layouts/components/Sidebar"

import { useSelector } from "react-redux"

const DashboardPage = () => {
  const user = localStorage.getItem("token")
  const { show } = useSelector((state) => state.show)

  return (
    <>
      {user ? (
        <div>
          {show && <NavDashboard />}
          <Header />
          <Sidebar />
          <Dashboard />
        </div>
      ) : (
        <Navigate to="/login" replace />
      )}
    </>
  )
}

export default DashboardPage
