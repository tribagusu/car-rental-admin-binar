import React from "react"
import { useDispatch } from "react-redux"

import { handleCarFiltered } from "../../../../../redux/actions/carFilteredAction"

const CarFilterLarge = (props) => {
  const { showLarge, setShowAll, setShowSmall, setShowMedium, setShowLarge } =
    props

  const dispatch = useDispatch()
  const handleShowLarge = () => {
    setShowLarge({
      cat1: "large",
      cat2: "6 - 8 orang",
    })
    setShowAll(false)
    setShowSmall(false)
    setShowMedium(false)
    dispatch(handleCarFiltered(showLarge))
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
