import React, { useState } from "react"
import { Navigate } from "react-router-dom"
import { useTransition, animated } from "react-spring"
//# lazy
// const Layout = React.lazy(() => import("../../layouts"))
// const CarList = React.lazy(() => import("../../components/Car/CarList"))
//# comp
import CarList from "../../components/Car"
import NavCars from "../../layouts/Navbar/NavCars"
//# redux
import { useDispatch, useSelector } from "react-redux"
import { handleCarSearched } from "../../redux/actions/carsAction"

const CarsPage = () => {
  const user = localStorage.getItem("token")
  // state
  const [query, setQuery] = useState("")
  const { showNav } = useSelector((state) => state.showNav)
  const dispatch = useDispatch()

  // query function
  const handleQuery = (e) => {
    setQuery(e.target.value)
    if (!e.target.value.length) {
      dispatch(handleCarSearched())
    }
  }

  // search function
  const handleSearch = () => {
    dispatch(handleCarSearched(query))
  }

  // navbar animation
  const transition = useTransition(showNav, {
    from: { x: -100, y: 0, opacity: 0 },
    enter: { x: 0, y: 0, opacity: 1 },
    delay: 0,
  })

  const props = {
    query,
    handleQuery,
    handleSearch,
  }

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
            <CarList {...props} />
          </section>
        </>
      ) : (
        <Navigate to="/login" replace />
      )}
    </>
  )
}

export default CarsPage
