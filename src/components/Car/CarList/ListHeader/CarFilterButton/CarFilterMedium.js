import React from "react"
import { useDispatch } from "react-redux"
import { handleCarFiltered } from "../../../../../redux/actions/carFilteredAction"

const CarFilterMedium = (props) => {
  const { showMedium, setShowAll, setShowSmall, setShowMedium, setShowLarge } =
    props

  const dispatch = useDispatch()
  const handleShowMedium = () => {
    setShowMedium({
      cat1: "medium",
      cat2: "4 - 6 orang",
    })
    setShowLarge(false)
    setShowAll(false)
    setShowSmall(false)
    dispatch(handleCarFiltered(showMedium))
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
