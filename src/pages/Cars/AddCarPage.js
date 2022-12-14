import React from "react"
import { Navigate } from "react-router-dom"
import { useAtom } from "jotai"
import { showNavAtom } from "../../layouts/Header"
// comp
import NavCars from "../../layouts/Navbar/NavCars"
const CarAddNew = React.lazy(() => import("../../components/Car/CarAddNew"))

const AddCarPage = () => {
  // const user = localStorage.getItem("token")
  const [showNav] = useAtom(showNavAtom)

  return (
    <>
      {/* {!!user ? ( */}
      <main>
        <section className="add-car-page">
          {showNav && (
            <nav className="nav-container">
              <NavCars />
            </nav>
          )}
          <React.Suspense fallback={<div>Loading..</div>}>
            <CarAddNew />
          </React.Suspense>
        </section>
      </main>
      {/* ) : (
        <Navigate to="/login" replace />
      )} */}
    </>
  )
}

export default AddCarPage
