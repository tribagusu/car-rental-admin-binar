import React from "react"
import { Navigate } from "react-router-dom"
import { useSelector } from "react-redux"

//# comp
import Header from "../../layouts/components/Header"
import Sidebar from "../../layouts/components/Sidebar"
import NavCars from "../../layouts/components/Navbar/NavCars"
import CarAddNew from "../../components/Car/CarAddNew"

const AddCarPage = () => {
  const user = localStorage.getItem("token")
  const { show } = useSelector((state) => state.show)

  return (
    <>
      {user ? (
        <main>
          <Header />
          <Sidebar />
          <section className="add-car-page">
            {show && (
              <nav className="nav-container">
                <NavCars />
              </nav>
            )}
            <CarAddNew />
          </section>
        </main>
      ) : (
        <Navigate to="/login" replace />
      )}
    </>
  )
}

export default AddCarPage
