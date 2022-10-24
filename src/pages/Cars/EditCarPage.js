import React from "react"
import { Navigate } from "react-router-dom"
import { useSelector } from "react-redux"

// comp
const NavCars = React.lazy(() => import("../../layouts/Navbar/NavCars"))
const CarEdit = React.lazy(() => import("../../components/Car/CarEdit"))

const EditCarPage = () => {
  const user = localStorage.getItem("token")
  const { showNav } = useSelector((state) => state.showNav)

  return (
    <>
      {!!user ? (
        <main>
          <section className="edit-car-page">
            {showNav && (
              <nav className="nav-container">
                <React.Suspense fallback={<div>Loading..</div>}>
                  <NavCars />
                </React.Suspense>
              </nav>
            )}
            <React.Suspense fallback={<div>Loading..</div>}>
              <CarEdit />
            </React.Suspense>
          </section>
        </main>
      ) : (
        <Navigate to="/login" replace />
      )}
    </>
  )
}

export default EditCarPage
