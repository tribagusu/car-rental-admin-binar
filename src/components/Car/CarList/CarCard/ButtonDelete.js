import React, { useState } from "react"

// comp
import ModalDelete from "./ModalDelete/ModalDelete"

const ButtonDelete = ({ carId }) => {
  const [showModal, setShowModal] = useState(false)

  const handleModal = () => {
    setShowModal(!showModal)
    console.log(carId)
  }

  return (
    <>
      <button
        onClick={handleModal}
        className="button-delete btn-outlined-danger"
      >
        <p>Delete</p>
      </button>
      {showModal && <ModalDelete carId={carId} handleModal={handleModal} />}
    </>
  )
}

export default ButtonDelete
