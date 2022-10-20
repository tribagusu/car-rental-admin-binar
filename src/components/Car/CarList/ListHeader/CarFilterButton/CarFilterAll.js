import React from "react"
import { useDispatch } from "react-redux"
import { handleCarFiltered } from "../../../../../redux/actions/carFilteredAction"

const CarFilterAll = (props) => {
  const {
    showAll,
    setShowAll,
    setShowSmall,
    setShowMedium,
    setShowLarge,
    page,
  } = props

  const dispatch = useDispatch()
  const handleShowAll = () => {
    setShowAll(true)
    setShowSmall(false)
    setShowMedium(false)
    setShowLarge(false)
    dispatch(handleCarFiltered("", page))
  }

  return (
    <button
      className={showAll ? "btn-active" : "btn-passive"}
      onClick={handleShowAll}
    >
      All
    </button>
  )
}

export default CarFilterAll
