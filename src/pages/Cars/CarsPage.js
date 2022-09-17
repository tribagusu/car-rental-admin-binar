import React from "react"
import { Navigate } from "react-router-dom"
import { useTransition, animated } from "react-spring"
import { useSelector } from "react-redux"

//# lazy
// const Layout = React.lazy(() => import("../../layouts"))
// const CarList = React.lazy(() => import("../../components/Car/CarList"))

//# comp
import CarList from "../../components/Car"
import NavCars from "../../layouts/Navbar/NavCars"
import Header from "../../layouts/Header"
import Sidebar from "../../layouts/Sidebar"

const CarsPage = () => {
  const user = localStorage.getItem("token")
  const { show } = useSelector((state) => state.show)
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
          <section className="cars-page">
            {transition(
              (style, item) =>
                item && (
                  <animated.nav style={style} className="nav-container">
                    <NavCars />
                  </animated.nav>
                )
            )}
            <CarList />
          </section>
        </main>
      ) : (
        <Navigate to="/login" replace />
      )}
    </>
  )
}

export default CarsPage
