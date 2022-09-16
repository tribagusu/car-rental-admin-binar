import React from "react"
import { UilPlus } from "@iconscout/react-unicons"

const CarListTitle = () => {
  return (
    <section className="car-list-title">
      <div className="car-list-title-container">
        <h2>List Car</h2>
        <button className="btn-primary ">
          <UilPlus />
          <p>Add New Car</p>
        </button>
      </div>
    </section>
  )
}

export default CarListTitle
