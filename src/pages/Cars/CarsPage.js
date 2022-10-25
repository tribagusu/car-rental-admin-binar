import React from "react"
import { Navigate } from "react-router-dom"
import { useTransition, animated } from "react-spring"
import { useSelector } from "react-redux"
import { useAtom } from "jotai"
// func
import { showNavAtom } from "../../layouts/Header"

// comp
const NavCars = React.lazy(() => import("../../layouts/Navbar/NavCars"))
const CarList = React.lazy(() => import("../../components/Car"))

const CarsPage = () => {
  const user = localStorage.getItem("token")
  // const { showNav } = useSelector((state) => state.showNav)
  const [showNav] = useAtom(showNavAtom)

  // navbar animation
  const transition = useTransition(showNav, {
    from: { x: -100, y: 0, opacity: 0 },
    enter: { x: 0, y: 0, opacity: 1 },
    delay: 0,
  })

  return (
    <>
      {!!user ? (
        <>
          <section className="cars-page">
            {transition(
              (style, item) =>
                item && (
                  <animated.nav style={style} className="nav-container">
                    <React.Suspense fallback={<div>Loading..</div>}>
                      <NavCars />
                    </React.Suspense>
                  </animated.nav>
                )
            )}
            <React.Suspense fallback={<div>Loading..</div>}>
              <CarList />
            </React.Suspense>
          </section>
        </>
      ) : (
        <Navigate to="/login" replace />
      )}
    </>
  )
}

export default CarsPage
