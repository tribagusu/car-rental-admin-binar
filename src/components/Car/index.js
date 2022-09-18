import React, { useState } from "react"

// comp
import CarCard from "./CarList/Card"
import ListHeader from "./CarList/ListHeader"
import ModalDelete from "./CarList/Card/ModalDelete"

const CarList = () => {
  const [showModal, setShowModal] = useState(false)

  const handleModal = () => {
    setShowModal(!showModal)
  }

  return (
    <section className="car-list">
      <main className="car-list-container">
        <ListHeader />
        <CarCard handleModal={handleModal} />
        {showModal && <ModalDelete handleModal={handleModal} />}
      </main>
    </section>
  )
}

export default CarList
