import React from "react"
import { Navigate } from "react-router-dom"
import { useSelector } from "react-redux"

//# comp
import Header from "../../layouts/Header"
import Sidebar from "../../layouts/Sidebar"
import NavCars from "../../layouts/Navbar/NavCars"
import CarAddNew from "../../components/Car/CarAddNew"

const AddCarPage = () => {
  const user = localStorage.getItem("token")
  const { showNav } = useSelector((state) => state.showNav)

  return (
    <>
      {user ? (
        <main>
          <Header />
          <Sidebar />
          <section className="add-car-page">
            {showNav && (
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
