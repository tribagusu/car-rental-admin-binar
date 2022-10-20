import React from "react"
import { useSelector } from "react-redux"

const CarPagination = ({ setPage, page }) => {
  const { cars } = useSelector((state) => state.cars)

  // func
  const nextPage = () => {
    setPage((prev) => prev + 1)
    window.scroll(0, 0)
  }
  const prevPage = () => {
    setPage((prev) => prev - 1)
    window.scroll(0, 0)
  }

  return (
    <nav className="car-pagination">
      <button className="btn-primary" onClick={prevPage} disabled={page === 1}>
        PrevPage
      </button>
      <button
        className="btn-primary"
        onClick={nextPage}
        // disabled={cars.length === 0}
      >
        NextPage
      </button>
    </nav>
  )
}

export default CarPagination
