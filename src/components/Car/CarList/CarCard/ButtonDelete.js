import React, { useState } from "react"

// lib
import { UilTrash } from "@iconscout/react-unicons"

// comp
import ModalDelete from "./ModalDelete/ModalDelete"

const ButtonDelete = ({ carId }) => {
  const [showModal, setShowModal] = useState(false)

  const handleModal = () => {
    setShowModal(!showModal)
  }

  return (
    <>
      <button
        onClick={handleModal}
        className="button-delete btn-outlined-danger"
      >
        {/* <UilTrash /> */}
        <p>Delete</p>
      </button>
      {showModal && <ModalDelete carId={carId} handleModal={handleModal} />}
    </>
  )
}

export default ButtonDelete
