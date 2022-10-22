import { Navigate } from "react-router-dom"
import { useTransition, animated } from "react-spring"
//# lazy
// const Layout = React.lazy(() => import("../../layouts"))
// const CarList = React.lazy(() => import("../../components/Car/CarList"))
//# comp
import CarList from "../../components/Car"
import NavCars from "../../layouts/Navbar/NavCars"
//# redux
import { useSelector } from "react-redux"

const CarsPage = () => {
  const user = localStorage.getItem("token")
  const { showNav } = useSelector((state) => state.showNav)

  // navbar animation
  const transition = useTransition(showNav, {
    from: { x: -100, y: 0, opacity: 0 },
    enter: { x: 0, y: 0, opacity: 1 },
    delay: 0,
  })

  return (
    <>
      {user ? (
        <>
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
        </>
      ) : (
        <Navigate to="/login" replace />
      )}
    </>
  )
}

export default CarsPage
