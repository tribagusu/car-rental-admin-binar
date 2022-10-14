import React from "react"
import { useEffect } from "react"
import { useDispatch } from "react-redux"

import { handleCarFiltered } from "../../../../../redux/actions/carFilteredAction"

const CarFilterSmall = (props) => {
  const { showSmall, setShowAll, setShowSmall, setShowMedium, setShowLarge } =
    props

  const dispatch = useDispatch()
  const handleShowSmall = () => {
    setShowSmall({
      cat1: "small",
      cat2: "2 - 4 orang",
    })
    setShowMedium(false)
    setShowLarge(false)
    setShowAll(false)
    dispatch(handleCarFiltered(showSmall))
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
