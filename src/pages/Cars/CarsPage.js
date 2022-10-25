import React from "react"
import { Navigate } from "react-router-dom"
import { useTransition, animated } from "react-spring"
import { useAtom } from "jotai"
// func
import { showNavAtom } from "../../layouts/Header"
import { navAnimation } from "../../utils/navAnimation"

// comp
import NavCars from "../../layouts/Navbar/NavCars"
// const NavCars = React.lazy(() => import("../../layouts/Navbar/NavCars"))
const CarList = React.lazy(() => import("../../components/Car"))

const CarsPage = () => {
  const user = localStorage.getItem("token")
  const [showNav] = useAtom(showNavAtom)
  const navTransition = useTransition(showNav, navAnimation)

  return (
    <>
      {!!user ? (
        <>
          <section className="cars-page">
            {navTransition(
              (style, item) =>
                item && (
                  <animated.nav style={style} className="nav-container">
                    {/* <React.Suspense fallback={<div>Loading..</div>}> */}
                    <NavCars />
                    {/* </React.Suspense> */}
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
