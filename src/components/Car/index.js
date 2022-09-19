import React, { useState } from "react"

// comp
import CarCard from "./CarList/CarCard"
import ListHeader from "./CarList/ListHeader"

const CarList = () => {
  return (
    <section className="car-list">
      <main className="car-list-container">
        <ListHeader />
        <CarCard />
      </main>
    </section>
  )
}

export default CarList
