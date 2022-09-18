import React from "react"

// lib
import { UilTrash } from "@iconscout/react-unicons"

const ButtonDelete = ({ handleModal }) => {
  return (
    <button onClick={handleModal} className="button-delete btn-outlined-danger">
      <UilTrash />
      <p>Delete</p>
    </button>
  )
}

export default ButtonDelete
