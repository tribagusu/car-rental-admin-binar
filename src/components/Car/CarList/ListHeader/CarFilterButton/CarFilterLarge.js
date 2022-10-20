import React from "react"
import { useDispatch } from "react-redux"

import { handleCarFiltered } from "../../../../../redux/actions/carFilteredAction"

const CarFilterLarge = (props) => {
  const {
    showLarge,
    setShowAll,
    setShowSmall,
    setShowMedium,
    setShowLarge,
    page,
  } = props

  const dispatch = useDispatch()
  const handleShowLarge = () => {
    setShowLarge(true)
    setShowAll(false)
    setShowSmall(false)
    setShowMedium(false)
    dispatch(handleCarFiltered("large", page))
  }

  return (
    <button
      className={showLarge ? "btn-active" : "btn-passive"}
      onClick={handleShowLarge}
    >
      Large
    </button>
  )
}

export default CarFilterLarge
