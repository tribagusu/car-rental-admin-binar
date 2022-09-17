import React from "react"

// comp
import CarEditButton from "./CarEditForm/CarEditButton"
import CarEditForm from "./CarEditForm/CarEditForm"
import CarEditHeader from "./CarEditHeader"

const CarEdit = () => {
  return (
    <section className="car-edit">
      <main className="car-edit__container">
        <CarEditHeader />
        <div className="car-edit__form">
          <CarEditForm />
          <CarEditButton />
        </div>
      </main>
    </section>
  )
}

export default CarEdit
