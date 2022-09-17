import React from "react"
import { Navigate } from "react-router-dom"
import { useSelector } from "react-redux"

//# comp
import Header from "../../layouts/Header"
import Sidebar from "../../layouts/Sidebar"
import NavCars from "../../layouts/Navbar/NavCars"
import CarEdit from "../../components/Car/CarEdit"

const EditCarPage = () => {
  const user = localStorage.getItem("token")
  const { show } = useSelector((state) => state.show)

  return (
    <>
      {user ? (
        <main>
          <Header />
          <Sidebar />
          <section className="edit-car-page">
            {show && (
              <nav className="nav-container">
                <NavCars />
              </nav>
            )}
            <CarEdit />
          </section>
        </main>
      ) : (
        <Navigate to="/login" replace />
      )}
    </>
  )
}

export default EditCarPage
