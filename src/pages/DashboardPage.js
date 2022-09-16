import { Navigate } from "react-router-dom"
import React, { useState, useEffect } from "react"
import { useSelector } from "react-redux"

// components
// const Dashboard = React.lazy(() => import("../components/Dashboard"))
// const Layout = React.lazy(() => import("../layouts"))

// comp
import Dashboard from "../components/Dashboard"
import NavDashboard from "../layouts/components/Navbar/NavDashboard"
import Header from "../layouts/components/Header"
import Sidebar from "../layouts/components/Sidebar"

const DashboardPage = () => {
  const { show } = useSelector((state) => state.show)
  const user = localStorage.getItem("token")

  return (
    <>
      {user ? (
        <main>
          <Header />
          <Sidebar />
          <section className="dashboard-page">
            {show && (
              <nav className="nav-container">
                <NavDashboard />
              </nav>
            )}
            <Dashboard />
          </section>
        </main>
      ) : (
        <Navigate to="/login" replace />
      )}
    </>
  )
}

export default DashboardPage
