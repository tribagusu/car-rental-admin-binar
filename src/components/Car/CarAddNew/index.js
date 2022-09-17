import React from "react"
import CarAddButton from "./CarAddForm/CarAddButton"
import CarAddForm from "./CarAddForm/CarAddForm"
import CarAddHeader from "./CarAddHeader"

const CarAddNew = () => {
  return (
    <section className="car-add-new">
      <main className="car-add-new__container">
        <CarAddHeader />
        <CarAddForm />
        <CarAddButton />
      </main>
    </section>
  )
}

export default CarAddNew
