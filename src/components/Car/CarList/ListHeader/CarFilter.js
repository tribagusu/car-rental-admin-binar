import React, { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

// comp
import CarFilterAll from "./CarFilterButton/CarFilterAll"
import CarFilterLarge from "./CarFilterButton/CarFilterLarge"
import CarFilterMedium from "./CarFilterButton/CarFilterMedium"
import CarFilterSmall from "./CarFilterButton/CarFilterSmall"

import { handleCarFiltered } from "../../../../redux/actions/carFilteredAction"

const CarFilter = ({ page }) => {
  const [showAll, setShowAll] = useState(true)
  const [showSmall, setShowSmall] = useState(false)
  const [showMedium, setShowMedium] = useState(false)
  const [showLarge, setShowLarge] = useState(false)

  //# props
  const props = {
    showAll,
    showSmall,
    showMedium,
    showLarge,
    setShowAll,
    setShowSmall,
    setShowMedium,
    setShowLarge,
    page,
  }

  // const dispatch = useDispatch()
  // useEffect(() => {
  //   dispatch(handleCarFiltered(showAll))
  // }, [])

  return (
    <section className="car-filter">
      <CarFilterAll {...props} />
      <CarFilterSmall {...props} />
      <CarFilterMedium {...props} />
      <CarFilterLarge {...props} />
    </section>
  )
}

export default CarFilter
