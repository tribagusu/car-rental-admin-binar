import React from "react"
import { Navigate } from "react-router-dom"
import { useSelector } from "react-redux"
import { useTransition, animated } from "react-spring"

// components
// const Dashboard = React.lazy(() => import("../components/Dashboard"))
// const Layout = React.lazy(() => import("../layouts"))

// comp
import Dashboard from "../components/Dashboard"
import NavDashboard from "../layouts/Navbar/NavDashboard"

const DashboardPage = () => {
  const { showNav } = useSelector((state) => state.showNav)
  const user = localStorage.getItem("token")
  const transition = useTransition(showNav, {
    from: { x: -100, y: 0, opacity: 0 },
    enter: { x: 0, y: 0, opacity: 1 },
    delay: 0,
  })

  return (
    <>
      {user ? (
        <main>
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
