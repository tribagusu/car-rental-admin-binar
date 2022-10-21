import React from "react"

const CarPagination = ({ setPage, page, data }) => {
  // func
  const nextPage = () => {
    setPage((prev) => prev + 1)
  }
  const prevPage = () => {
    setPage((prev) => Math.max(prev - 1, 0))
  }

  return (
    <nav className="car-pagination">
      <button className="btn-primary" onClick={prevPage} disabled={page === 1}>
        <span>&lt;&lt;</span>
      </button>
      <p>{`Page ${page} of ${data?.pageCount}`}</p>
      <button
        className="btn-primary"
        onClick={nextPage}
        disabled={page === data?.pageCount}
      >
        <span>&gt;&gt;</span>
      </button>
    </nav>
  )
}

export default CarPagination
