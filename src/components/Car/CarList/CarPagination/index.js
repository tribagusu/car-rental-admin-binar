import React, { useState } from "react"
import { useSelector } from "react-redux"

const CarPagination = ({ setPage, page }) => {
  const { cars } = useSelector((state) => state.cars)

  // func
  const nextPage = () => setPage((prev) => prev + 1)
  const prevPage = () => setPage((prev) => prev - 1)

  return (
    <nav className="car-pagination">
      <button className="btn-primary" onClick={prevPage} disabled={page === 1}>
        PrevPage
      </button>
      <button className="btn-primary" onClick={nextPage} disabled={page === 2}>
        NextPage
      </button>
    </nav>
  )
}

export default CarPagination
