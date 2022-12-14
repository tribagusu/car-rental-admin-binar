import React from "react"
import { Navigate } from "react-router-dom"
import { useAtom } from "jotai"
import { showNavAtom } from "../../layouts/Header"

// comp
import NavCars from "../../layouts/Navbar/NavCars"
const CarEdit = React.lazy(() => import("../../components/Car/CarEdit"))

const EditCarPage = () => {
  // const user = localStorage.getItem("token")
  const [showNav] = useAtom(showNavAtom)

  return (
    <>
      {/* {!!user ? ( */}
      <main>
        <section className="edit-car-page">
          {showNav && (
            <nav className="nav-container">
              <NavCars />
            </nav>
          )}
          <React.Suspense fallback={<div>Loading..</div>}>
            <CarEdit />
          </React.Suspense>
        </section>
      </main>
      {/* ) : (
        <Navigate to="/login" replace />
      )} */}
    </>
  )
}

export default EditCarPage
