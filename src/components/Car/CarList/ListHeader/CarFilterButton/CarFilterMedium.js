import React from "react"
import { useDispatch } from "react-redux"
import { handleCarFiltered } from "../../../../../redux/actions/carFilteredAction"

const CarFilterMedium = (props) => {
  const {
    showMedium,
    setShowAll,
    setShowSmall,
    setShowMedium,
    setShowLarge,
    page,
  } = props

  const dispatch = useDispatch()
  const handleShowMedium = () => {
    setShowMedium(true)
    setShowLarge(false)
    setShowAll(false)
    setShowSmall(false)
    dispatch(handleCarFiltered("medium", page))
  }

  return (
    <button
      className={showMedium ? "btn-active" : "btn-passive"}
      onClick={handleShowMedium}
    >
      Medium
    </button>
  )
}

export default CarFilterMedium
