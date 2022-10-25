import React from "react"
import { Navigate } from "react-router-dom"
import { useTransition, animated } from "react-spring"
import { useAtom } from "jotai"
// func
import { showNavAtom } from "../layouts/Header"
import { navAnimation } from "../utils/navAnimation"

// comp
const Dashboard = React.lazy(() => import("../components/Dashboard"))
const NavDashboard = React.lazy(() => import("../layouts/Navbar/NavDashboard"))

const DashboardPage = () => {
  const [showNav] = useAtom(showNavAtom)
  const user = localStorage.getItem("token")
  const navTransition = useTransition(showNav, navAnimation)

  return (
    <>
      {!!user ? (
        <main>
          <section className="dashboard-page">
            {navTransition(
              (style, item) =>
                item && (
                  <animated.nav style={style} className="nav-container">
                    <React.Suspense fallback={<div>Loading..</div>}>
                      <NavDashboard />
                    </React.Suspense>
                  </animated.nav>
                )
            )}
            <React.Suspense fallback={<div>Loading..</div>}>
              <Dashboard />
            </React.Suspense>
          </section>
        </main>
      ) : (
        <Navigate to="/login" replace />
      )}
    </>
  )
}

export default DashboardPage
