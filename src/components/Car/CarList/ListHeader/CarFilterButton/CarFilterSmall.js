import React from "react"
import { useDispatch } from "react-redux"

import { handleCarFiltered } from "../../../../../redux/actions/carFilteredAction"

const CarFilterSmall = (props) => {
  const { showSmall, setShowAll, setShowSmall, setShowMedium, setShowLarge } =
    props

  const handleShowSmall = () => {
    setShowSmall({
      cat1: "small",
      cat2: "2 - 4 orang",
    })
    setShowMedium(false)
    setShowLarge(false)
    setShowAll(false)
    handleClick()
  }

  const dispatch = useDispatch()
  const handleClick = () => {
    dispatch(handleCarFiltered(showSmall))
  }

  return (
    <button
      className={showSmall ? "btn-active" : "btn-passive"}
      onClick={handleShowSmall}
    >
      2 - 4 people
    </button>
  )
}

export default CarFilterSmall
