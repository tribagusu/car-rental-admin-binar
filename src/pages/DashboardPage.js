import { Navigate } from "react-router-dom"
import React, { useState, useEffect } from "react"
import { useSelector } from "react-redux"
import { useTransition, animated } from "react-spring"

// components
// const Dashboard = React.lazy(() => import("../components/Dashboard"))
// const Layout = React.lazy(() => import("../layouts"))

// comp
import Dashboard from "../components/Dashboard"
import NavDashboard from "../layouts/Navbar/NavDashboard"
import Header from "../layouts/Header"
import Sidebar from "../layouts/Sidebar"

const DashboardPage = () => {
  const { show } = useSelector((state) => state.show)
  const user = localStorage.getItem("token")
  const transition = useTransition(show, {
    from: { x: -100, y: 0, opacity: 0 },
    enter: { x: 0, y: 0, opacity: 1 },
    delay: 0,
  })

  return (
    <>
      {user ? (
        <main>
          <Header />
          <Sidebar />
          <section className="dashboard-page">
            {transition(
              (style, item) =>
                item && (
                  <animated.nav style={style} className="nav-container">
                    <NavDashboard />
                  </animated.nav>
                )
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
