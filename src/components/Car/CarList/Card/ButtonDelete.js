import React from "react"
import { UilTrash } from "@iconscout/react-unicons"

const ButtonDelete = () => {
  return (
    <button className="button-delete btn-outlined-danger">
      <UilTrash />
      <p>Delete</p>
    </button>
  )
}

export default ButtonDelete
