import React from "react"

// comp
import CarCard from "./CarList/CarCard"
import ListHeader from "./CarList/ListHeader"

const CarList = (props) => {
  return (
    <section className="car-list">
      <main className="car-list-container">
        <ListHeader />
        <CarCard {...props} />
      </main>
    </section>
  )
}

export default CarList
