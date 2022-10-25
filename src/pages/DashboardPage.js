import React from "react"
import { Navigate } from "react-router-dom"
import { useTransition, animated } from "react-spring"
import { useAtom } from "jotai"
// func
import { showNavAtom } from "../layouts/Header"

// comp
const Dashboard = React.lazy(() => import("../components/Dashboard"))
const NavDashboard = React.lazy(() => import("../layouts/Navbar/NavDashboard"))

const DashboardPage = () => {
  const [showNav] = useAtom(showNavAtom)
  const user = localStorage.getItem("token")
  const transition = useTransition(showNav, {
    from: { x: -100, y: 0, opacity: 0 },
    enter: { x: 0, y: 0, opacity: 1 },
    delay: 0,
  })

  return (
    <>
      {!!user ? (
        <main>
          <section className="dashboard-page">
            {transition(
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
