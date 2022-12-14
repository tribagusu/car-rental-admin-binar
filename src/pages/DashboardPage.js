import React from "react"
import { Navigate } from "react-router-dom"
import { useTransition, animated } from "react-spring"
import { useAtom } from "jotai"
// func
import { showNavAtom } from "../layouts/Header"
import { navAnimation } from "../utils/navAnimation"

// comp
import NavDashboard from "../layouts/Navbar/NavDashboard"
const Dashboard = React.lazy(() => import("../components/Dashboard"))

const DashboardPage = () => {
  const [showNav] = useAtom(showNavAtom)
  // const user = localStorage.getItem("token")
  const navTransition = useTransition(showNav, navAnimation)

  return (
    <>
      {/* {!!user ? ( */}
      <main>
        <section className="dashboard-page">
          {navTransition(
            (style, item) =>
              item && (
                <animated.nav style={style} className="nav-container">
                  <NavDashboard />
                </animated.nav>
              )
          )}
          <React.Suspense fallback={<div>Loading..</div>}>
            <Dashboard />
          </React.Suspense>
        </section>
      </main>
      {/* ) : (
        <Navigate to="/login" replace />
      )} */}
    </>
  )
}

export default DashboardPage
