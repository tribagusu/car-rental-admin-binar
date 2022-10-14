import React, { useState } from "react"

// comp
import CarCard from "./CarList/CarCard"
import CarPagination from "./CarList/CarPagination"
import ListHeader from "./CarList/ListHeader"

const CarList = (props) => {
  // state
  const [page, setPage] = useState(1)

  return (
    <section className="car-list">
      <main className="car-list-container">
        <ListHeader />
        <CarCard {...props} page={page} />
        <CarPagination page={page} setPage={setPage} />
      </main>
    </section>
  )
}

export default CarList
