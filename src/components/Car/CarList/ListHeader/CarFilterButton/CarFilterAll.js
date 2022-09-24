import React from "react"
import { useDispatch } from "react-redux"
import { handleCars } from "../../../../../redux/actions/carsAction"

const CarFilterAll = (props) => {
  const { showAll, setShowAll, setShowSmall, setShowMedium, setShowLarge } =
    props

  const dispatch = useDispatch()
  const handleShowAll = () => {
    setShowAll(true)
    setShowSmall(false)
    setShowMedium(false)
    setShowLarge(false)
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
