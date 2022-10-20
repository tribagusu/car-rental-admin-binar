import React from "react"
import { useEffect } from "react"
import { useDispatch } from "react-redux"

import { handleCarFiltered } from "../../../../../redux/actions/carFilteredAction"

const CarFilterSmall = (props) => {
  const {
    showSmall,
    setShowAll,
    setShowSmall,
    setShowMedium,
    setShowLarge,
    page,
  } = props

  const dispatch = useDispatch()
  const handleShowSmall = () => {
    setShowSmall(true)
    setShowMedium(false)
    setShowLarge(false)
    setShowAll(false)
    dispatch(handleCarFiltered("small", page))
  }

  return (
    <button
      className={showSmall ? "btn-active" : "btn-passive"}
      onClick={handleShowSmall}
    >
      Small
    </button>
  )
}

export default CarFilterSmall
