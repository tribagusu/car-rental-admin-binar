import React from "react"
import { Navigate } from "react-router-dom"

//# lazy
// const Layout = React.lazy(() => import("../../layouts"))
// const CarList = React.lazy(() => import("../../components/Car/CarList"))

//# comp
import CarList from "../../components/Car/CarList"
import NavCars from "../../layouts/components/Navbar/NavCars"
import Header from "../../layouts/components/Header"
import Sidebar from "../../layouts/components/Sidebar"

import { useSelector } from "react-redux"

const CarsPage = () => {
  const user = localStorage.getItem("token")
  const { show } = useSelector((state) => state.show)

  return (
    <>
      {user ? (
        <main>
          <Header />
          <Sidebar />
          <section className="cars-page">
            {show && (
              <nav className="nav-container">
                <NavCars />
              </nav>
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
